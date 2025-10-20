// ==UserScript==
// @name         Klanlar Otomasyon Paneli
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Otomatik giriş ve IP doğrulama
// @match        https://www.klanlar.org/*
// @grant        none
// ==/UserScript==

(function() {
    const div = document.createElement('div');
    div.innerHTML = `
        <div style="
            position:fixed;
            top:10px;
            left:10px;
            background:#000;
            color:#0f0;
            padding:10px;
            font-size:16px;
            z-index:9999;
            border-radius:6px;
            box-shadow:0 0 5px #0f0;
            font-family:Arial, sans-serif;
        ">
            ✅ Script aktif<br>
            Otomasyon hazır
        </div>
    `;
    document.body.appendChild(div);
})();