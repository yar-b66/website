/* ==========================================================================
   Yared Bekele Portfolio JavaScript
   ========================================================================== */

// Contact Form API Configuration
const CONTACT_CONFIG = {
    // Backend API (FastAPI server)
    backendEndpoint: "https://website-3pj3.onrender.com/", // Update this to your deployed backend URL in production

    // Background Email API (Formspree)
    emailEndpoint: "https://formspree.io/f/yaredb680@gmail.com"
};


// Global Translation Dictionaries (EN, AM, OM)
const TRANSLATIONS = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-connect": "Connect",
        "hero-location": "Addis Ababa, Ethiopia",
        "hero-title-greeting": "Hi, I'm",
        "hero-subheading": "Bridging the gap between technology and artificial intelligence.",
        "hero-cta-work": "View My Work",
        "hero-cta-contact": "Get in Touch",
        "about-tagline": "Background",
        "about-title": "About Me",
        "about-subtitle": "Merging Automation & Language Technology",
        "about-bio-p1": "I am a multidisciplinary professional with a Bachelor of Science in Electrical and Computer Engineering from Mizan Tepi University (Class of 2021). I thrive at the intersection of automation and language technology.",
        "about-bio-p2": "Whether I am building Python-based automation bots or training AI language models, I bring a highly analytical and technical approach to everything I do. My diverse experiences allow me to solve complex, cross-functional problems in unique and efficient ways.",
        "stat-ece-num": "B.Sc.",
        "stat-ece-label": "Electrical & Computer Eng.",
        "stat-lang-num": "Amharic & Oromo",
        "stat-lang-label": "Native Linguistic Specialist",
        "stat-ai-num": "AI Training",
        "stat-ai-label": "Google AI Studio, Micro1",
        "skills-tagline": "My Abilities",
        "skills-title": "Skills & Expertise",
        "filter-all": "All Skills",
        "filter-software": "Software & Automation",
        "filter-linguistics": "Linguistics & AI Data",
        "filter-media": "Digital Media & AI",
        "projects-tagline": "My Creations",
        "projects-title": "Featured Projects",
        "project-learn-more": "Learn More",
        "slider-title": "AI Photo Enhancement Showcase",
        "slider-subtitle": "Drag the handle to view the raw camera asset versus the final studio color-corrected AI output.",
        "badge-before": "Raw Asset",
        "badge-after": "AI Color Enhanced",
        "prompt-label": "Engineered AI Retouch Prompt",
        "contact-tagline": "Get In Touch",
        "contact-title": "Contact Me",
        "contact-heading": "Let's Connect!",
        "contact-subtext": "I am always open to discussing tech projects or linguistic data opportunities. Whether you want to hire me, collaborate, or just talk shop, drop me a message!",
        "detail-email-label": "Email Me",
        "detail-phone-label": "Call / Telegram",
        "detail-tg-label": "Telegram Username",
        "social-label": "Find Me Online",
        "bot-status": "bot • online",
        "bot-msg-welcome": "Hello! Welcome to Yared Bekele's portfolio bot. How can I help you today? Please choose an option below.",
        "preset-tech": "Discuss a Tech Project",
        "preset-forex": "Talk Forex",
        "preset-linguistics": "Linguistic Services",
        "footer-based": "Based in Addis Ababa, Ethiopia",
        // Typing effects strings by language
        "type-roles": ["Software Developer", "Linguistic Data Specialist", "Content Creator"]
    },
    am: {
        "nav-home": "መነሻ",
        "nav-about": "ስለ እኔ",
        "nav-skills": "ክህሎቶች",
        "nav-projects": "ፕሮጀክቶች",
        "nav-contact": "እውቂያ",
        "nav-connect": "እንገናኝ",
        "hero-location": "አዲስ አበባ, ኢትዮጵያ",
        "hero-title-greeting": "ሰላም, እኔ",
        "hero-subheading": "በቴክኖሎጂ እና በሰው ሰራሽ አስተዋይነት (AI) መካከል ያለውን ልዩነት ማጥበብ።",
        "hero-cta-work": "ስራዎቼን ተመልከት",
        "hero-cta-contact": "እንገናኝ",
        "about-tagline": "ታሪክ",
        "about-title": "ስለ እኔ",
        "about-subtitle": "አውቶሜሽን እና የቋንቋ ቴክኖሎጂን ማጣመር",
        "about-bio-p1": "እኔ በኤሌክትሪካል እና ኮምፒውተር ምህንድስና ከሚዛን ቴፒ ዩኒቨርሲቲ (የ2013 ዓ.ም. ምሩቅ) የመጀመሪያ ዲግሪ ያገኘሁ፣ በበርካታ ዘርፎች የተሰማራሁ ባለሙያ ነኝ። በአውቶሜሽን እና በቋንቋ ቴክኖሎጂ መስቀለኛ መንገድ ላይ እሰራለሁ።",
        "about-bio-p2": "የፓይዘን አውቶሜሽን ቦቶችን እየገነባሁ ወይም የ AI ቋንቋ ሞዴሎችን እያሰለጠንኩ፣ ለሚያደርገው ነገር ሁሉ ከፍተኛ ትንተናዊ እና ቴክኒካዊ አካሄድን አመጣለሁ። የእኔ ልዩ ልዩ ልምዶች ውስብስብ የሆኑ ችግሮችን በልዩ እና ቀልጣፋ መንገድ እንድፈታ ያስችሉኛል።",
        "stat-ece-num": "ዲግሪ",
        "stat-ece-label": "ኤሌክትሪካል እና ኮምፒውተር ምህንድስና",
        "stat-lang-num": "አማርኛ እና ኦሮሚኛ",
        "stat-lang-label": "አፍ መፍቻ ቋንቋ ባለሙያ",
        "stat-ai-num": "የ AI ስልጠና",
        "stat-ai-label": "ጉግል AI ስቱዲዮ, ሚክሮ1",
        "skills-tagline": "የእኔ ችሎታዎች",
        "skills-title": "ክህሎቶች እና እውቀት",
        "filter-all": "ሁሉንም ክህሎቶች",
        "filter-software": "ሶፍትዌር እና አውቶሜሽን",
        "filter-linguistics": "ሊንጉስቲክስ እና AI ዳታ",
        "filter-media": "ዲጂታል ሚዲያ እና AI",
        "projects-tagline": "የእኔ ፈጠራዎች",
        "projects-title": "ተለይተው የቀረቡ ፕሮጀክቶች",
        "project-learn-more": "ተጨማሪ እወቅ",
        "slider-title": "የ AI ፎቶ ማሻሻያ ማሳያ",
        "slider-subtitle": "ያልተስተካከለውን ካሜራ ፎቶ እና የመጨረሻውን የ AI ስቱዲዮ ቀለም ማሻሻያ ለማነጻጸር እጀታውን ይጎትቱ።",
        "badge-before": "ያልተስተካከለ",
        "badge-after": "AI ቀለም ማሻሻያ",
        "prompt-label": "የተቀናበረ የ AI ማሻሻያ ትዕዛዝ (Prompt)",
        "contact-tagline": "እውቂያ",
        "contact-title": "አግኙኝ",
        "contact-heading": "እንገናኝ!",
        "contact-subtext": "ስለ ቴክኖሎጂ ፕሮጀክቶች ወይም ስለ ቋንቋ ዳታ እድሎች ለመወያየት ሁል ጊዜ ዝግጁ ነኝ። እኔን መቅጠር፣ አብሮ መስራት ወይም ዝም ብሎ ለመነጋገር ከፈለጉ መልዕክት ይተውልኝ!",
        "detail-email-label": "ኢሜይል ላክ",
        "detail-phone-label": "ደውል / ቴሌግራም",
        "detail-tg-label": "ቴሌግራም አድራሻ",
        "social-label": "በማህበራዊ ገጽ አግኙኝ",
        "bot-status": "ቦት • መስመር ላይ",
        "bot-msg-welcome": "ሰላም! ወደ ያሬድ በቀለ ፖርትፎሊዮ ቦት እንኳን ደህና መጡ። ዛሬ እንዴት ልረዳዎ እችላለሁ? እባክዎ ከታች ካሉት አማራጮች አንዱን ይምረጡ።",
        "preset-tech": "የቴክኖሎጂ ፕሮጀክት",
        "preset-forex": "ስለ ፎሬክስ ለመነጋገር",
        "preset-linguistics": "የቋንቋ አገልግሎት",
        "footer-based": "አዲስ አበባ, ኢትዮጵያ ውስጥ የተመሰረተ",
        "type-roles": ["ሶፍትዌር ገንቢ", "የቋንቋ ዳታ ባለሙያ", "ይዘት ፈጣሪ"]
    },
    om: {
        "nav-home": "Ka'umsa",
        "nav-about": "Waa'ee Koo",
        "nav-skills": "Dandeettii",
        "nav-projects": "Pirojektoota",
        "nav-contact": "Quunnamsii",
        "nav-connect": "Wal arginee",
        "hero-location": "Finfinnee, Itoophiyaa",
        "hero-title-greeting": "Akkam, ani",
        "hero-subheading": "Rifti teeknoolojii fi beekumsa nam-tolchee (AI) gidduu jiru dhiphisuu.",
        "hero-cta-work": "Hojii Koo Ilaali",
        "hero-cta-contact": "Quunnami",
        "about-tagline": "Seenaa",
        "about-title": "Waa'ee Koo",
        "about-subtitle": "Waliin Makuu Hojii-of-duubee fi Teeknoolojii Afaanii",
        "about-bio-p1": "Ani ogeessa damee adda addaa irratti bobba'e, Yuunivarsiitii Mizaani Teppii irraa injiniiringii elektirikaalii fi kompiutaraatiin (Class of 2021) B.Sc. qabu dha. Hojii hojii-of-duubee fi teeknoolojii afaanii gidduutti nan hojjedha.",
        "about-bio-p2": "Bots hojii-of-duubee Python yommuun ijaaru ykn modeloota afaanii AI yommuun leenjisu, waan hojjedhu hundaaf dandeettii xiinxala fi teeknikaalii gadi fagoon fida. Muuxannoowwan koo adda addaa pirobleemota walxaxoo ta'an karaa adda ta'eefi effeektiva ta'een furuuf na gargaaru.",
        "stat-ece-num": "Digrii",
        "stat-ece-label": "Elektirikaalii fi Injiniiringii Kompiutaraa",
        "stat-lang-num": "Afaan Oromoo & Amaaraa",
        "stat-lang-label": "Ogeessa Afaanii Dhalootaa",
        "stat-ai-num": "Leenjii AI",
        "stat-ai-label": "Google AI Studio, Micro1",
        "skills-tagline": "Dandeettii Koo",
        "skills-title": "Dandeettii fi Ogeessa",
        "filter-all": "Dandeettii Hunda",
        "filter-software": "Software & Automation",
        "filter-linguistics": "Linguistics & AI Data",
        "filter-media": "Digital Media & AI",
        "projects-tagline": "Uumama Koo",
        "projects-title": "Pirojektoota Filataman",
        "project-learn-more": "Dabalata Baruuf",
        "slider-title": "AI Garaagarummaa Fakkii",
        "slider-subtitle": "Garaagarummaa fakkii qullaa fi fakkii AI gradingiin bareche hudhuuf qabannoo gadi dhiibi.",
        "badge-before": "Raw Asset",
        "badge-after": "AI Bareeche",
        "prompt-label": "AI Prompt Engineering",
        "contact-tagline": "Quunnamsii",
        "contact-title": "Na Quunnami",
        "contact-heading": "Kottu Haasofnu!",
        "contact-subtext": "Yeroo hundaa pirojektoota teeknoolojii ykn carraawwan daataa afaanii irratti mari'achuuf banaa dha. Na qaxaruuf, waliin hojjechuuf, ykn waa'ee teeknoolojii haasofuuf ergaa naaf barreessi!",
        "detail-email-label": "E-mail Naaf Barreessi",
        "detail-phone-label": "Bilbila / Telegram",
        "detail-tg-label": "Telegram Username",
        "social-label": "Carraawwan Online",
        "bot-status": "bot • sarara irra",
        "bot-msg-welcome": "Akkam! Gara bot portfolio Yaared Bakkaletti baga nagaa dhuftan. Har'a akkamitti si gargaaruu danda'a? Hojja kee filannoo gaditti kennaman keessaa filadhu.",
        "preset-tech": "Pirojektii Teeknoolojii",
        "preset-forex": "Waa'ee Forex",
        "preset-linguistics": "Tajaajila Afaanii",
        "footer-based": "Finfinnee, Itoophiyaa Keessatti Kan Hundeeffame",
        "type-roles": ["Software Developer", "Ogeessa Daataa Afaanii", "Uumaa Qabiyyee"]
    }
};

let CURRENT_LANG = "en";
let currentTypingTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initAmbientCanvas();
    initLanguageToggle();
    initThemeCycle();
    initTypingEffect();
    initSkillsFilter();
    initProjectModals();
    initBeforeAfterSlider();
    initBotContactForm();
    initFooterCoffeeTooltip();
    initScrollReveal();
    initFooterYear();
});

/* ==========================================================================
   Header Scroll State
   ========================================================================== */
function initHeader() {
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

/* ==========================================================================
   Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ==========================================================================
   Ambient Particle Canvas Background
   ========================================================================== */
function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let animationId;
    
    const settings = {
        maxParticles: 80,
        connectionDistance: 120,
        particleSpeed: 0.4,
        particleColor: 'rgba(59, 130, 246, 0.25)',
        lineColor: 'rgba(59, 130, 246, 0.04)'
    };
    
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        if (window.innerWidth < 768) {
            settings.maxParticles = 35;
            settings.connectionDistance = 80;
        } else {
            settings.maxParticles = 80;
            settings.connectionDistance = 120;
        }
        createParticles();
    }
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * settings.particleSpeed;
            this.vy = (Math.random() - 0.5) * settings.particleSpeed;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = settings.particleColor;
            ctx.fill();
        }
    }
    
    function createParticles() {
        particles = [];
        for (let i = 0; i < settings.maxParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < settings.connectionDistance) {
                    const alpha = (1 - (dist / settings.connectionDistance)) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#060913';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    resizeCanvas();
    animate();
}

/* ==========================================================================
   Interactive Live Language Toggle
   ========================================================================== */
function initLanguageToggle() {
    const langSwitcher = document.getElementById('lang-switcher');
    if (!langSwitcher) return;
    
    const langBtns = langSwitcher.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            if (selectedLang === CURRENT_LANG) return;
            
            // Switch active buttons
            langBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Set language and translate
            changeLanguage(selectedLang);
        });
    });
}

function changeLanguage(langCode) {
    CURRENT_LANG = langCode;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(elem => {
        const key = elem.getAttribute('data-translate');
        if (TRANSLATIONS[langCode] && TRANSLATIONS[langCode][key]) {
            // Special cases for input fields or placeholders
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.setAttribute('placeholder', TRANSLATIONS[langCode][key]);
            } else {
                elem.innerHTML = TRANSLATIONS[langCode][key];
            }
        }
    });

    // Reset typewriter with new localized lists
    initTypingEffect();
}

/* ==========================================================================
   Hidden UI Theme Switchers (Standard + Monospace Terminal + Stock Grid)
   ========================================================================== */
function initThemeCycle() {
    const themeBtn = document.getElementById('theme-cycle-btn');
    if (!themeBtn) return;
    
    const themes = ["dark", "light", "terminal", "trading"];
    let currentThemeIdx = 0;
    
    // Read cached preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes.includes(savedTheme)) {
        currentThemeIdx = themes.indexOf(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    themeBtn.addEventListener('click', () => {
        currentThemeIdx = (currentThemeIdx + 1) % themes.length;
        const nextTheme = themes[currentThemeIdx];
        
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);
        
        updateThemeIcon(nextTheme);
        showToast("Theme Updated", `Switched layout to: ${nextTheme.toUpperCase()} mode`, true);
    });
    
    function updateThemeIcon(themeName) {
        // Toggle theme button icon structures dynamically
        if (themeName === "dark") {
            // Sun icon (click to go to light)
            themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-sun-icon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        } else if (themeName === "light") {
            // Terminal icon (click to go to terminal)
            themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-terminal-icon"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
        } else if (themeName === "terminal") {
            // Stock chart icon (click to go to trading)
            themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-chart-icon"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`;
        } else if (themeName === "trading") {
            // Moon icon (click to go to dark)
            themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-moon-icon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
        }
    }
}

/* ==========================================================================
   Auto-Typing Tagline Effect
   ========================================================================== */
function initTypingEffect() {
    const textTarget = document.getElementById('typed-text');
    if (!textTarget) return;
    
    // Clear previous timers if language is changed
    if (currentTypingTimeout) {
        clearTimeout(currentTypingTimeout);
    }
    
    // Get roles translated in current active language
    const taglines = TRANSLATIONS[CURRENT_LANG]["type-roles"];
    
    let currentTagIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const fullText = taglines[currentTagIdx];
        
        if (isDeleting) {
            textTarget.textContent = fullText.substring(0, currentCharIdx - 1);
            currentCharIdx--;
            typingSpeed = 50;
        } else {
            textTarget.textContent = fullText.substring(0, currentCharIdx + 1);
            currentCharIdx++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIdx === fullText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && currentCharIdx === 0) {
            isDeleting = false;
            currentTagIdx = (currentTagIdx + 1) % taglines.length;
            typingSpeed = 500;
        }
        
        currentTypingTimeout = setTimeout(type, typingSpeed);
    }
    
    textTarget.textContent = "";
    type();
}

/* ==========================================================================
   Skills Category Filter
   ========================================================================== */
function initSkillsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterValue = e.target.getAttribute('data-filter');
            
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   Detailed Project Modals
   ========================================================================== */
const projectData = {
    "it-bot": {
        title: "IT Support Desk Bot",
        category: "Software & Automation",
        accentClass: "software",
        badges: ["Python", "Telegram API", "Render", "System Monitoring", "Git"],
        goal: "Develop a secure, centralized Telegram-based interface for employees and agents within a customs industrial park to easily access administrative documents, legal directives, and log IT maintenance requests.",
        desc: "Designed and implemented an asynchronous Python Telegram Bot serving a specialized customs industrial park. The bot functions as a centralized digital handbook, letting verified operators query specific customs regulations, retrieve official directive documents, and directly open service tickets with the IT division.",
        implementation: [
            "Programmed fully asynchronous callback routing handling hundreds of concurrent users without delays.",
            "Established custom cloud storage linkages to dynamically retrieve and deliver administrative PDF documents.",
            "Deployed securely via Render's Web Services model utilizing custom Docker specifications.",
            "Configured continuous heartbeats through UptimeRobot to ensure near-zero latency and high service availability."
        ]
    },
    "ai-training": {
        title: "AI Language Training",
        category: "Linguistics & AI Data",
        accentClass: "linguistics",
        badges: ["Amharic Localization", "Oromo Localization", "AI Data Annotation", "LLM Evaluation"],
        goal: "Enhance global artificial intelligence capabilities in low-resource Horn of Africa languages (Amharic & Oromo) through accurate evaluation, dataset curation, and grammatical alignment.",
        desc: "Acted as a Native-Level Linguistic Specialist for international crowdsourcing networks. Performed grammatical screening, transcriptions, prompt-engineering validation, and comparative analysis of Large Language Model responses to verify cultural nuances, semantic accuracy, and safety.",
        implementation: [
            "Delivered translations of technical interface instructions, ensuring localization and ease of use.",
            "Conducted extensive RLHF (Reinforcement Learning from Human Feedback) evaluations for leading tech platforms (Micro1, Sigma Group, Clickworker).",
            "Identified and resolved dialectal inconsistencies in training datasets to optimize semantic output accuracy.",
            "Validated prompt responses for local context, vocabulary, and grammatical correctness."
        ]
    }
};

function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalContentWrapper = document.getElementById('modal-body-content');
    const projectCardsButtons = document.querySelectorAll('.project-btn');
    
    if (!modal || !modalCloseBtn || !modalContentWrapper) return;
    
    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;
        
        const markup = `
            <div class="modal-header">
                <span class="modal-category modal-category-${data.accentClass}">${data.category}</span>
                <h3 class="modal-title">${data.title}</h3>
                <div class="modal-badge-row">
                    ${data.badges.map(b => `<span class="modal-badge">${b}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-hero-visual" style="background: linear-gradient(135deg, rgba(var(--color-${data.accentClass}-rgb), 0.1) 0%, rgba(var(--color-${data.accentClass}-rgb), 0.02) 100%);">
                <span style="color: var(--color-${data.accentClass}); filter: drop-shadow(0 0 8px rgba(var(--color-${data.accentClass}-rgb), 0.3)); font-weight: 600; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    ${data.title} Details
                </span>
            </div>
            
            <h4 class="modal-section-title">Project Objective</h4>
            <p class="modal-text">${data.goal}</p>
            
            <h4 class="modal-section-title">Overview &amp; Context</h4>
            <p class="modal-text">${data.desc}</p>
            
            <h4 class="modal-section-title">Key Implementations</h4>
            <ul class="modal-list">
                ${data.implementation.map(item => `<li>${item}</li>`).join('')}
            </ul>
            
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="document.getElementById('project-modal').classList.remove('active'); window.location.href='#contact';">Inquire About This</button>
                <button class="btn btn-outline" id="modal-inner-close">Close Details</button>
            </div>
        `;
        
        modalContentWrapper.innerHTML = markup;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        document.getElementById('modal-inner-close').addEventListener('click', closeModal);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    projectCardsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projId = e.target.getAttribute('data-project');
            openModal(projId);
        });
    });
    
    modalCloseBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================================================
   AI & Media "Before & After" Comparison Slider
   ========================================================================== */
function initBeforeAfterSlider() {
    const slider = document.getElementById('before-after-slider');
    const handle = document.getElementById('slider-handle');
    const enhancedImg = document.getElementById('enhanced-img-wrapper');
    
    if (!slider || !handle || !enhancedImg) return;
    
    let isDragging = false;
    
    function moveSlider(clientX) {
        const rect = slider.getBoundingClientRect();
        const position = clientX - rect.left;
        let percent = (position / rect.width) * 100;
        
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        
        handle.style.left = percent + '%';
        enhancedImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
    }
    
    // Mouse events
    handle.addEventListener('mousedown', () => {
        isDragging = true;
        slider.style.cursor = 'ew-resize';
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'default';
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });
    
    // Touch events for mobile responsiveness
    handle.addEventListener('touchstart', () => {
        isDragging = true;
    });
    
    window.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches[0]) {
            moveSlider(e.touches[0].clientX);
        }
    });
}

/* ==========================================================================
   Telegram-styled Interactive Chatbot Form
   ========================================================================== */
function initBotContactForm() {
    const chatMessages = document.getElementById('telegram-chat-messages');
    const chatPresets = document.getElementById('telegram-chat-presets');
    const chatForm = document.getElementById('telegram-chat-form');
    const chatInput = document.getElementById('telegram-chat-input');
    const chatSendBtn = document.getElementById('telegram-chat-send');
    
    if (!chatMessages || !chatPresets || !chatForm || !chatInput || !chatSendBtn) return;
    
    let chatState = {
        step: 0,
        intent: "",
        name: "",
        email: "",
        message: ""
    };
    
    let activeTypingIndicator = null;

    function showPersistentTypingIndicator() {
        if (activeTypingIndicator) return;
        activeTypingIndicator = document.createElement('div');
        activeTypingIndicator.className = 'telegram-message bot-msg typing-container-indicator';
        activeTypingIndicator.innerHTML = `
            <div class="message-bubble typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatMessages.appendChild(activeTypingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removePersistentTypingIndicator() {
        if (activeTypingIndicator) {
            activeTypingIndicator.remove();
            activeTypingIndicator = null;
        }
    }
    
    // Set up click events for presets
    const presetButtons = chatPresets.querySelectorAll('.preset-btn');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const intent = e.target.getAttribute('data-intent');
            const intentText = e.target.innerText;
            
            chatState.intent = intent;
            
            // Print user choice message bubble
            appendMessage(intentText, 'user');
            
            // Disable presets
            chatPresets.style.display = 'none';
            
            // Bot typing simulation -> Ask for Name
            chatState.step = 1;
            showTypingIndicator(() => {
                appendMessage(getBotQuestion(chatState.step, intent), 'bot');
                enableChatInput("Type your full name...");
            });
        });
    });
    
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInputValue = chatInput.value.trim();
        if (!userInputValue) return;
        
        appendMessage(userInputValue, 'user');
        chatInput.value = "";
        disableChatInput();
        
        processWorkflow(userInputValue);
    });
    
    function processWorkflow(value) {
        if (chatState.step === 1) {
            // Save Name
            chatState.name = value;
            chatState.step = 2;
            
            showTypingIndicator(() => {
                appendMessage(getBotQuestion(chatState.step), 'bot');
                enableChatInput("Type your email address...");
            });
        } else if (chatState.step === 2) {
            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showTypingIndicator(() => {
                    appendMessage("Oops! That doesn't look like a valid email. Please check it and type a valid email address.", 'bot');
                    enableChatInput("Type your email address...");
                });
                return;
            }
            
            // Save Email
            chatState.email = value;
            chatState.step = 3;
            
            showTypingIndicator(() => {
                appendMessage(getBotQuestion(chatState.step), 'bot');
                enableChatInput("Type your message...");
            });
        } else if (chatState.step === 3) {
            // Save Message & Submit
            chatState.message = value;
            chatState.step = 4;
            
            showTypingIndicator(() => {
                appendMessage("Thank you! I am forwarding your message directly to Yared Bekele in the background now...", 'bot');
                
                // Submit to background endpoints
                submitFormDirectly();
            });
        }
    }
    
    function getBotQuestion(step, intent) {
        if (step === 1) {
            let topic = "collaborating";
            if (intent === "tech") topic = "tech projects";
            if (intent === "forex") topic = "markets and trading";
            if (intent === "linguistics") topic = "linguistics services";
            return `Great choice! Let's discuss ${topic}. To begin, what is your full name?`;
        }
        if (step === 2) {
            return `Nice to meet you, ${chatState.name}! What is your email address so Yared can reach back to you?`;
        }
        if (step === 3) {
            return `Got it. Lastly, please describe what you would like to discuss (timeline, specifications, or opportunities).`;
        }
        return "";
    }
    
    function submitFormDirectly() {
        // Show persistent typing indicator while waiting for API response
        showPersistentTypingIndicator();
        
        const senderInfo = chatState.name ? `${chatState.name} (${chatState.email})` : "Portfolio Visitor";
        
        // 1. Try sending via the secure backend API
        fetch(CONTACT_CONFIG.backendEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender_info: senderInfo,
                message: chatState.message
            })
        })
        .then(res => {
            removePersistentTypingIndicator();
            if (res.ok) {
                showFinalBotReply(true);
            } else {
                console.warn("Backend rejected message. Attempting Formspree email fallback...");
                sendFormspreeFallback();
            }
        })
        .catch(err => {
            removePersistentTypingIndicator();
            console.error("Backend server is unreachable. Attempting Formspree email fallback...", err);
            sendFormspreeFallback();
        });

        // 2. Formspree fallback logic
        function sendFormspreeFallback() {
            showPersistentTypingIndicator();
            const formData = new FormData();
            formData.append('name', chatState.name || "Portfolio Visitor");
            formData.append('email', chatState.email || "yaredb680@gmail.com");
            formData.append('_subject', `Intent: ${chatState.intent.toUpperCase()} - ${chatState.name || "Visitor"}`);
            formData.append('message', chatState.message);
            
            fetch(CONTACT_CONFIG.emailEndpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                removePersistentTypingIndicator();
                if (response.ok) {
                    showFinalBotReply(true);
                } else {
                    throw new Error("Formspree API rejection");
                }
            })
            .catch(err => {
                removePersistentTypingIndicator();
                console.error("Formspree fallback failed: ", err);
                showFinalBotReply(false);
            });
        }
    }
    
    function showFinalBotReply(success) {
        showTypingIndicator(() => {
            if (success) {
                appendMessage(`Message successfully delivered to Yared!`, 'bot');
            } else {
                appendMessage(`Message delivery failed. Please try emailing yaredb680@gmail.com or contacting him directly via Telegram @yared_b instead.`, 'bot');
                
                const mailBody = `Hello Yared,\n\nName: ${chatState.name || "Visitor"}\nEmail: ${chatState.email || ""}\nTopic: ${chatState.intent}\n\nMessage:\n${chatState.message}`;
                const mailtoUrl = `mailto:yaredb680@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(mailBody)}`;
                const botMessageText = `🔔 New Portfolio Message!\n\n👤 Name: ${chatState.name || "Visitor"}\n📧 Email: ${chatState.email || ""}\n📌 Intent: ${chatState.intent.toUpperCase()}\n\n💬 Message:\n${chatState.message}`;
                
                // Copy to clipboard for Telegram copy-paste safety
                navigator.clipboard.writeText(botMessageText).catch(() => {});
                
                setTimeout(() => {
                    window.location.href = mailtoUrl;
                }, 1000);
            }
            
            // Allow resetting chat
            setTimeout(() => {
                showTypingIndicator(() => {
                    appendMessage(`To start a new conversation, select an option below:`, 'bot');
                    chatPresets.style.display = 'flex';
                    chatState = { step: 0, intent: "", name: "", email: "", message: "" };
                    chatInput.placeholder = "Select an option above...";
                });
            }, 3000);
        });
    }
    
    function appendMessage(text, sender) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `telegram-message ${sender}-msg`;
        
        messageDiv.innerHTML = `
            <div class="message-bubble">${text}</div>
            <span class="message-time">${time}</span>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function showTypingIndicator(callback) {
        const indicatorDiv = document.createElement('div');
        indicatorDiv.className = 'telegram-message bot-msg typing-container-indicator';
        indicatorDiv.innerHTML = `
            <div class="message-bubble typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatMessages.appendChild(indicatorDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Typing duration simulation
        setTimeout(() => {
            indicatorDiv.remove();
            callback();
        }, 1200);
    }
    
    function enableChatInput(placeholderText) {
        chatInput.disabled = false;
        chatInput.placeholder = placeholderText;
        chatSendBtn.disabled = false;
        chatInput.focus();
    }
    
    function disableChatInput() {
        chatInput.disabled = true;
        chatInput.placeholder = "Processing response...";
        chatSendBtn.disabled = true;
    }
}

/* ==========================================================================
   Localized Footer Coffee Tooltip
   ========================================================================== */
function initFooterCoffeeTooltip() {
    const coffeeIcon = document.getElementById('coffee-cup-icon');
    const eggContainer = coffeeIcon ? coffeeIcon.closest('.coffee-egg-container') : null;
    
    if (!eggContainer) return;
    
    // Toggle active state for mobile touch
    coffeeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        eggContainer.classList.toggle('active');
    });
    
    // Close tooltip on click outside
    window.addEventListener('click', () => {
        eggContainer.classList.remove('active');
    });
}

/* ==========================================================================
   Contact Toast Status Notification Helper
   ========================================================================== */
function showToast(title, message, isSuccess = true) {
    const toast = document.getElementById('toast-notify');
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastMsg = document.getElementById('toast-msg');
    
    if (!toast) return;
    
    toastTitle.textContent = title;
    toastMsg.textContent = message;
    
    if (isSuccess) {
        toast.style.borderLeftColor = 'var(--color-software)';
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
        toastIcon.style.color = 'var(--color-software)';
        toastIcon.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
    } else {
        toast.style.borderLeftColor = '#ef4444';
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
        toastIcon.style.color = '#ef4444';
        toastIcon.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
    }
    
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
}

/* ==========================================================================
   Scroll Animations Reveal Observers
   ========================================================================== */
function initScrollReveal() {
    const sections = document.querySelectorAll('.scroll-reveal');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(sec => revealObserver.observe(sec));
    
    const activeSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}` || (link.getAttribute('href') === '#' && id === 'home')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.4
    });
    
    const trackingSections = document.querySelectorAll('section, header');
    trackingSections.forEach(sec => {
        if (sec.id) activeSectionObserver.observe(sec);
    });
}

/* ==========================================================================
   Footer Current Year
   ========================================================================== */
function initFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
