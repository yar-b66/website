import os
import json
import urllib.request
import urllib.error
from http.server import HTTPServer, BaseHTTPRequestHandler

def load_env():
    # Simple built-in env loader to avoid dotenv dependency
    env_path = os.path.join(os.path.dirname(__file__), '.env')
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, val = line.split('=', 1)
                    os.environ[key.strip()] = val.strip()

class PortfolioBackendHandler(BaseHTTPRequestHandler):
    def send_cors_response(self, status_code, content_type, body_dict):
        self.send_response(status_code)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Type', content_type)
        self.end_headers()
        self.wfile.write(json.dumps(body_dict).encode('utf-8'))

    def do_OPTIONS(self):
        # Handle CORS preflight request
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        if self.path == '/health':
            response = {"status": "healthy", "service": "portfolio-backend"}
            self.send_cors_response(200, 'application/json', response)
        else:
            self.send_response(404)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

    def do_POST(self):
        if self.path == '/api/send-message':
            # 1. Read content length and parse JSON payload
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                payload = json.loads(post_data.decode('utf-8'))
                message = payload.get('message', '')
                sender_info = payload.get('sender_info', '')
            except Exception as e:
                self.send_cors_response(400, 'application/json', {"detail": "Invalid JSON payload"})
                return

            # 2. Read Credentials securely from Environment Variables (defaulting to user's chat ID)
            bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
            chat_id = os.getenv("TELEGRAM_CHAT_ID") or "656903615"

            # 3. Server-side validation of credentials
            if not bot_token or bot_token == "YOUR_TELEGRAM_BOT_TOKEN" or not chat_id:
                self.send_cors_response(500, 'application/json', {
                    "detail": "Server configuration error: Telegram credentials are not set on the environment."
                })
                return

            # 4. Construct message body for Telegram Bot
            formatted_text = (
                f"📩 New Portfolio Message!\n\n"
                f"👤 Sender Info:\n{sender_info}\n\n"
                f"💬 Message:\n{message}"
            )

            telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
            
            # 5. Make request to Telegram using urllib
            telegram_payload = json.dumps({
                "chat_id": chat_id,
                "text": formatted_text,
                "parse_mode": "HTML"
            }).encode('utf-8')

            req = urllib.request.Request(
                telegram_url,
                data=telegram_payload,
                headers={'Content-Type': 'application/json'}
            )

            try:
                with urllib.request.urlopen(req, timeout=10) as response:
                    res_body = response.read().decode('utf-8')
                
                self.send_cors_response(200, 'application/json', {
                    "status": "success",
                    "detail": "Message forwarded to Telegram successfully."
                })

            except urllib.error.HTTPError as http_err:
                err_content = http_err.read().decode('utf-8')
                self.send_cors_response(502, 'application/json', {
                    "detail": f"Telegram API responded with error: {err_content}"
                })
            except Exception as req_err:
                self.send_cors_response(504, 'application/json', {
                    "detail": f"Network connectivity issue with Telegram API: {str(req_err)}"
                })
        else:
            self.send_cors_response(404, 'application/json', {"detail": "Not Found"})

def run(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, PortfolioBackendHandler)
    print(f"Starting lightweight backend server on port {port}...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()

if __name__ == '__main__':
    load_env()
    run()
