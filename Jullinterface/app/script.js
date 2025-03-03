// Dil çeviri objesi
const translations = {
    en: {
        appTitle: "Jullinterface Editor",
        boldBtn: "Bold",
        italicBtn: "Italic",
        underlineBtn: "Underline",
        fontSizeBtn: "Font Size",
        fontColorBtn: "Font Color",
        saveBtn: "Save Text",
        loadBtn: "Load Text",
        settingsBtn: "Settings",
        settingsTitle: "Settings",
        fontLabel: "Font Family:",
        fontSizeLabel: "Font Size:",
        lineHeightLabel: "Line Height:",
        textColorLabel: "Text Color:",
        bgColorLabel: "Background Color:",
        fontWeightLabel: "Font Weight:",
        marginPaddingLabel: "Margin/Padding:",
        textBoxSizeLabel: "Text Box Size:",
        textShadowLabel: "Text Shadow:",
        textAlignLabel: "Text Alignment:",
        languageLabel: "Language:",
        applySettingsBtn: "Apply Settings",
        closeSettingsBtn: "Close"
    },
    tr: {
        appTitle: "Jullinterface Düzenleyici",
        boldBtn: "Kalın",
        italicBtn: "İtalik",
        underlineBtn: "Altı Çizili",
        fontSizeBtn: "Yazı Boyutu",
        fontColorBtn: "Yazı Rengi",
        saveBtn: "Metni Kaydet",
        loadBtn: "Metni Yükle",
        settingsBtn: "Ayarlar",
        settingsTitle: "Ayarlar",
        fontLabel: "Yazı Tipi:",
        fontSizeLabel: "Yazı Boyutu:",
        lineHeightLabel: "Satır Aralığı:",
        textColorLabel: "Yazı Rengi:",
        bgColorLabel: "Arka Plan Rengi:",
        fontWeightLabel: "Yazı Ağırlığı:",
        marginPaddingLabel: "Kenarlık/Dolgu:",
        textBoxSizeLabel: "Metin Kutusu Boyutu:",
        textShadowLabel: "Yazı Gölgesi:",
        textAlignLabel: "Metin Hizalaması:",
        languageLabel: "Dil:",
        applySettingsBtn: "Ayarları Uygula",
        closeSettingsBtn: "Kapat"
    },
    es: {
        appTitle: "Editor Jullinterface",
        boldBtn: "Negrita",
        italicBtn: "Cursiva",
        underlineBtn: "Subrayado",
        fontSizeBtn: "Tamaño de fuente",
        fontColorBtn: "Color de fuente",
        saveBtn: "Guardar texto",
        loadBtn: "Cargar texto",
        settingsBtn: "Configuraciones",
        settingsTitle: "Configuraciones",
        fontLabel: "Familia de fuente:",
        fontSizeLabel: "Tamaño de fuente:",
        lineHeightLabel: "Altura de línea:",
        textColorLabel: "Color de texto:",
        bgColorLabel: "Color de fondo:",
        fontWeightLabel: "Peso de la fuente:",
        marginPaddingLabel: "Margen/Relleno:",
        textBoxSizeLabel: "Tamaño del cuadro de texto:",
        textShadowLabel: "Sombra de texto:",
        textAlignLabel: "Alineación del texto:",
        languageLabel: "Idioma:",
        applySettingsBtn: "Aplicar configuraciones",
        closeSettingsBtn: "Cerrar"
    },
    de: {
        appTitle: "Jullinterface Editor",
        boldBtn: "Fett",
        italicBtn: "Kursiv",
        underlineBtn: "Unterstrichen",
        fontSizeBtn: "Schriftgröße",
        fontColorBtn: "Schriftfarbe",
        saveBtn: "Text speichern",
        loadBtn: "Text laden",
        settingsBtn: "Einstellungen",
        settingsTitle: "Einstellungen",
        fontLabel: "Schriftart:",
        fontSizeLabel: "Schriftgröße:",
        lineHeightLabel: "Zeilenhöhe:",
        textColorLabel: "Textfarbe:",
        bgColorLabel: "Hintergrundfarbe:",
        fontWeightLabel: "Schriftgewicht:",
        marginPaddingLabel: "Rand/Aufpolsterung:",
        textBoxSizeLabel: "Textfeldgröße:",
        textShadowLabel: "Textschatten:",
        textAlignLabel: "Textausrichtung:",
        languageLabel: "Sprache:",
        applySettingsBtn: "Einstellungen anwenden",
        closeSettingsBtn: "Schließen"
    }
};

// Dil değiştirildiğinde çağrılacak fonksiyon
function changeLanguage() {
    const selectedLang = document.getElementById("languageSelect").value;
    const lang = translations[selectedLang];

    document.getElementById("appTitle").textContent = lang.appTitle;
    document.getElementById("boldBtn").textContent = lang.boldBtn;
    document.getElementById("italicBtn").textContent = lang.italicBtn;
    document.getElementById("underlineBtn").textContent = lang.underlineBtn;
    document.getElementById("fontSizeBtn").textContent = lang.fontSizeBtn;
    document.getElementById("fontColorBtn").textContent = lang.fontColorBtn;
    document.getElementById("saveBtn").textContent = lang.saveBtn;
    document.getElementById("loadBtn").textContent = lang.loadBtn;
    document.getElementById("settingsBtn").textContent = lang.settingsBtn;
    document.getElementById("settingsTitle").textContent = lang.settingsTitle;
    document.getElementById("fontLabel").textContent = lang.fontLabel;
    document.getElementById("fontSizeLabel").textContent = lang.fontSizeLabel;
    document.getElementById("lineHeightLabel").textContent = lang.lineHeightLabel;
    document.getElementById("textColorLabel").textContent = lang.textColorLabel;
    document.getElementById("bgColorLabel").textContent = lang.bgColorLabel;
    document.getElementById("fontWeightLabel").textContent = lang.fontWeightLabel;
    document.getElementById("marginPaddingLabel").textContent = lang.marginPaddingLabel;
    document.getElementById("textBoxSizeLabel").textContent = lang.textBoxSizeLabel;
    document.getElementById("textShadowLabel").textContent = lang.textShadowLabel;
    document.getElementById("textAlignLabel").textContent = lang.textAlignLabel;
    document.getElementById("languageLabel").textContent = lang.languageLabel;
    document.getElementById("applySettingsBtn").textContent = lang.applySettingsBtn;
    document.getElementById("closeSettingsBtn").textContent = lang.closeSettingsBtn;
}

// Stil ve ayarları uygulama
function applySettings() {
    const font = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('fontSizeSelect').value;
    const lineHeight = document.getElementById('lineHeightSelect').value;
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('backgroundColor').value;
    const fontWeight = document.getElementById('fontWeight').value;
    const marginPadding = document.getElementById('marginPadding').value;
    const textBoxSize = document.getElementById('textBoxSize').value;
    const textShadow = document.getElementById('textShadow').value;
    const textAlign = document.getElementById('textAlign').value;

    const editor = document.getElementById('editor');
    editor.style.fontFamily = font;
    editor.style.fontSize = fontSize;
    editor.style.lineHeight = lineHeight;
    editor.style.color = textColor;
    editor.style.backgroundColor = bgColor;
    editor.style.fontWeight = fontWeight;
    editor.style.margin = marginPadding;
    editor.style.padding = marginPadding;
    editor.style.width = textBoxSize + 'px';
    editor.style.textShadow = textShadow;
    editor.style.textAlign = textAlign;
}

// Kaydedilen metni dosyaya yazdırma
function saveText() {
    const text = document.getElementById("editor").innerText;
    if (text.trim() === "") {
        alert("Please enter some text to save!");
        return;
    }

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textfile.txt";
    link.click();
}

// Text yükleme
function loadText() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            document.getElementById("editor").innerText = content;
        };

        reader.readAsText(file);
    });
}

// Ayarları göster/gizle
function toggleSettingsPanel() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('show');
}

// Kapatma fonksiyonu
function closeSettingsPanel() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.remove('show');
}

// Olay dinleyicileri
document.getElementById("settingsBtn").addEventListener("click", toggleSettingsPanel);
document.getElementById("closeSettingsBtn").addEventListener("click", closeSettingsPanel);
document.getElementById("applySettingsBtn").addEventListener("click", applySettings);
document.getElementById("saveBtn").addEventListener("click", saveText);
document.getElementById("loadBtn").addEventListener("click", loadText);
document.getElementById("languageSelect").addEventListener("change", changeLanguage);
