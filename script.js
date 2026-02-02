document.addEventListener('DOMContentLoaded', () => {
    
    // Kotlin dosyasından aldığımız Araç Listesi
    const tools = [
        { id: "flashlight", name: "El Feneri", icon: "fa-solid fa-bolt" },
        { id: "notes", name: "Not Defteri", icon: "fa-solid fa-note-sticky" },
        { id: "ruler", name: "Cetvel", icon: "fa-solid fa-ruler" },
        { id: "timer", name: "Kronometre", icon: "fa-solid fa-stopwatch" },
        { id: "converter", name: "Birim Çevirici", icon: "fa-solid fa-arrow-right-arrow-left" },
        { id: "calculator", name: "Hesap Makinesi", icon: "fa-solid fa-calculator" },
        { id: "deviceinfo", name: "Cihaz Bilgisi", icon: "fa-solid fa-mobile-screen" },
        { id: "decibel", name: "Ses Ölçer", icon: "fa-solid fa-wave-square" },
        { id: "compass", name: "Pusula", icon: "fa-solid fa-compass" },
        { id: "stepcounter", name: "Adım Sayar", icon: "fa-solid fa-person-running" },
        { id: "speedometer", name: "Hız Göstergesi", icon: "fa-solid fa-gauge-high" },
        { id: "qrscanner", name: "QR Merkezi", icon: "fa-solid fa-qrcode" },
        { id: "magnifier", name: "Büyüteç", icon: "fa-solid fa-magnifying-glass-plus" },
        { id: "speedtest", name: "İnternet Hızı", icon: "fa-solid fa-wifi" },
        { id: "heartrate", name: "Nabız Ölçer", icon: "fa-solid fa-heart-pulse" },
        { id: "colorpicker", name: "Renk Seçici", icon: "fa-solid fa-eye-dropper" },
        { id: "mirror", name: "Ayna", icon: "fa-solid fa-user" },
        { id: "level", name: "Su Terazisi", icon: "fa-solid fa-scale-balanced" },
        { id: "decision", name: "Şans Oyunları", icon: "fa-solid fa-dice" },
        { id: "scanner", name: "Belge Tarayıcı", icon: "fa-solid fa-print" },
        { id: "voicerecorder", name: "Ses Kaydı", icon: "fa-solid fa-microphone" },
        { id: "fitcheck", name: "FitCheck", icon: "fa-solid fa-weight-scale" },
        { id: "sonicwave", name: "Hoparlör Temizle", icon: "fa-solid fa-volume-high" },
        { id: "focuslab", name: "FocusLab", icon: "fa-solid fa-brain" },
        { id: "mediaslim", name: "MediaSlim", icon: "fa-solid fa-image" },
        { id: "procounter", name: "Pro Counter", icon: "fa-solid fa-arrow-up-9-1" },
        { id: "neuraltest", name: "Neural Test", icon: "fa-solid fa-microchip" },
        { id: "deepclean", name: "Deep Clean", icon: "fa-solid fa-broom" },
        { id: "linksafe", name: "LinkSafe", icon: "fa-solid fa-shield-halved" },
        { id: "passwordgen", name: "Şifre Üretici", icon: "fa-solid fa-key" },
        { id: "crypto", name: "Kripto Takibi", icon: "fa-brands fa-bitcoin" },
        { id: "nutrition", name: "Kalori Takibi", icon: "fa-solid fa-utensils" }
    ];

    const gridContainer = document.getElementById('tool-grid');

    // Her bir araç için HTML kartı oluştur ve sayfaya ekle
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <i class="${tool.icon}"></i>
            <h4>${tool.name}</h4>
        `;
        gridContainer.appendChild(card);
    });

    // Ufak bir giriş animasyonu
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50); // Kartlar sırayla gelsin
    });
});