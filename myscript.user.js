(function() {
  // Proxy ve kullanıcı bilgisi (Puppeteer tarafından set edilecek)
  const proxyIP = window.injectProxyIP || 'Proxy IP bilinmiyor';
  const username = window.injectUsername || 'Kullanıcı yok';
  const timestamp = new Date().toLocaleTimeString('tr-TR');

  // Sayfa üstü bilgi kutusu
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
      ✅ Script inject edildi<br>
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

  // Mobil panel entegrasyonu için JSON export (hazır altyapı)
  window.cansemaPanelData = {
    proxy: proxyIP,
    user: username,
    time: timestamp,
    status: 'başarılı',
    bbcode: bbcodeBox.value
  };

  console.log('✅ cansemaPanelData:', window.cansemaPanelData);
})();
