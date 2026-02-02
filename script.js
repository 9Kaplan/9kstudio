document.addEventListener('DOMContentLoaded', () => {
    
    // Kotlin kodundan alınan tam liste
    const tools = [
        { name: "El Feneri", icon: "fa-solid fa-bolt" },
        { name: "Not Defteri", icon: "fa-solid fa-note-sticky" },
        { name: "Cetvel", icon: "fa-solid fa-ruler" },
        { name: "Kronometre", icon: "fa-solid fa-stopwatch" },
        { name: "Birim Çevirici", icon: "fa-solid fa-arrow-right-arrow-left" },
        { name: "Hesap Makinesi", icon: "fa-solid fa-calculator" },
        { name: "Cihaz Bilgisi", icon: "fa-solid fa-mobile-screen" },
        { name: "Ses Ölçer", icon: "fa-solid fa-wave-square" },
        { name: "Pusula", icon: "fa-solid fa-compass" },
        { name: "Adım Sayar", icon: "fa-solid fa-person-running" },
        { name: "Hız Göstergesi", icon: "fa-solid fa-gauge-high" },
        { name: "QR Merkezi", icon: "fa-solid fa-qrcode" },
        { name: "Büyüteç", icon: "fa-solid fa-magnifying-glass-plus" },
        { name: "İnternet Hızı", icon: "fa-solid fa-wifi" },
        { name: "Nabız Ölçer", icon: "fa-solid fa-heart-pulse" },
        { name: "Renk Seçici", icon: "fa-solid fa-eye-dropper" },
        { name: "Ayna", icon: "fa-solid fa-user" },
        { name: "Su Terazisi", icon: "fa-solid fa-scale-balanced" },
        { name: "Şans Oyunları", icon: "fa-solid fa-dice" },
        { name: "Belge Tarayıcı", icon: "fa-solid fa-print" },
        { name: "Ses Kaydı", icon: "fa-solid fa-microphone" },
        { name: "FitCheck", icon: "fa-solid fa-weight-scale" },
        { name: "Hoparlör Temizle", icon: "fa-solid fa-volume-high" },
        { name: "FocusLab", icon: "fa-solid fa-brain" },
        { name: "MediaSlim", icon: "fa-solid fa-image" },
        { name: "Pro Counter", icon: "fa-solid fa-arrow-up-9-1" },
        { name: "Neural Test", icon: "fa-solid fa-microchip" },
        { name: "Deep Clean", icon: "fa-solid fa-broom" },
        { name: "LinkSafe", icon: "fa-solid fa-shield-halved" },
        { name: "Şifre Üretici", icon: "fa-solid fa-key" },
        { name: "Kripto Takibi", icon: "fa-brands fa-bitcoin" },
        { name: "Kalori Takibi", icon: "fa-solid fa-utensils" }
    ];

    const gridContainer = document.getElementById('tool-grid');

    // Kartları oluştur
    tools.forEach((tool, index) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <i class="${tool.icon}"></i>
            <h4>${tool.name}</h4>
        `;
        
        // Giriş animasyonu için stil
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        gridContainer.appendChild(card);

        // Animasyonu tetikle
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 30);
    });
});