# Use a stable, lightweight Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Copy the lightweight server code
COPY main.py .

# Expose the port the server listens on
EXPOSE 8000

# Start the unbuffered server
CMD ["python", "main.py"]
