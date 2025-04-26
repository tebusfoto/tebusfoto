document.getElementById('form-berita').addEventListener('submit', function(event) {
  event.preventDefault(); // cegah reload halaman

  // ambil data dari form
  const judul = document.getElementById('judul').value.trim();
  const ringkasan = document.getElementById('ringkasan').value.trim();
  const thumbnail = document.getElementById('thumbnail').value.trim();
  const konten = document.getElementById('konten').value.trim();

  // validasi sederhana
  if (!judul || !ringkasan || !konten) {
    alert('Harap isi semua kolom yang wajib.');
    return;
  }

  // kirim ke Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbyJtrIMmY0lzm5eOInxbOgGyg2IVTeWSIVzmg_6v4o_qPIqMJD0OB4W_tleJTZ05I_M/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      judul: judul,
      ringkasan: ringkasan,
      thumbnail: thumbnail,
      konten: konten
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      alert('✅ Berita berhasil dikirim!');
      document.getElementById('form-berita').reset();
    } else {
      throw new Error(data.message || 'Gagal menyimpan.');
    }
  })
  .catch(error => {
    console.error('❌ Error:', error);
    alert('❌ Terjadi kesalahan. Silakan coba lagi.');
  });
});
