// ==UserScript==
// @name         Cansema Panel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Proxy IP ve kullanıcı bilgisi gösterimi
// @match        https://www.klanlar.org/*
// @grant        none
// ==/UserScript==

(function() {
  const proxyIP = window.injectProxyIP || 'otomatik';
  const username = window.injectUsername || 'otomatik';
  const timestamp = new Date().toLocaleTimeString('tr-TR');

  // Bilgi kutusu
  const infoBox = document.createElement('div');
  infoBox.innerHTML = `
    <div style="
      position:fixed;
      top:10px;
      left:10px;
      background:#000;
      color:#0f0;
      padding:10px 16px;
      font-size:16px;
      z-index:9999;
      border-radius:6px;
      box-shadow:0 0 5px #0f0;
      font-family:Arial, sans-serif;
    ">
      ✅ Script aktif<br>
      🌐 Proxy IP: ${proxyIP}<br>
      👤 Kullanıcı: ${username}<br>
      🕒 Zaman: ${timestamp}
    </div>
  `;
  document.body.appendChild(infoBox);

  // BBCode export kutusu
  const bbcodeBox = document.createElement('textarea');
  bbcodeBox.value = `[b]Giriş Başarılı[/b]\n[i]Proxy: ${proxyIP}[/i]\n[i]Kullanıcı: ${username}[/i]\n[i]Zaman: ${timestamp}[/i]`;
  bbcodeBox.style = `
    position:fixed;
    bottom:10px;
    right:10px;
    width:300px;
    height:100px;
    z-index:9999;
    background:#111;
    color:#0f0;
    border:1px solid #0f0;
    padding:10px;
    font-family:monospace;
  `;
  document.body.appendChild(bbcodeBox);

  // Mobil panel JSON export
  window.cansemaPanelData = {
    proxy: proxyIP,
    user: username,
    time: timestamp,
    status: 'başarılı',
    bbcode: bbcodeBox.value
  };

  // Mobil panel veri çekme altyapısı
  window.addEventListener('message', (e) => {
    if (e.data === 'getCansemaData') {
      window.postMessage(window.cansemaPanelData, '*');
    }
  });

  console.log('✅ cansemaPanelData:', window.cansemaPanelData);
})();

