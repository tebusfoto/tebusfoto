<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Form Berita TebusFoto</title>
</head>
<body>
  <h1>Tambah Berita</h1>
  <form action="https://script.google.com/macros/s/AKfycb…/exec" method="post" target="hidden_iframe" onsubmit="alert('Berita terkirim!');">
    <label>Tanggal:</label><br>
    <input type="date" name="tanggal"/><br><br>

    <label>Judul:</label><br>
    <input type="text" name="judul" required/><br><br>

    <label>Ringkasan:</label><br>
    <textarea name="ringkasan"></textarea><br><br>

    <label>Link Thumbnail:</label><br>
    <input type="url" name="thumbnail" required/><br><br>

    <label>Konten Lengkap:</label><br>
    <textarea name="konten" required></textarea><br><br>

    <button type="submit">Kirim Berita</button>
  </form>

  <!-- Iframe tersembunyi agar form tidak redirect halaman utama -->
  <iframe name="hidden_iframe" style="display:none;"></iframe>
</body>
</html>
