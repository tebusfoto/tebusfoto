document.getElementById('form-berita').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit default

  // Ambil nilai dari input form
  const judul = document.getElementById('judul').value;
  const ringkasan = document.getElementById('ringkasan').value;
  const thumbnail = document.getElementById('thumbnail').value;
  const konten = document.getElementById('konten').value;

  // Kirim data ke Google Sheets melalui Apps Script
  fetch('https://script.google.com/macros/s/AKfycbwX7avh2JsRfQqHZDDbMpBuN9yjYlamafbp93kSqQFcW-IloqJ5BiwP2fuX-pIO-cRQ/exec', {
    method: 'POST',
    body: JSON.stringify({
      judul: judul,
      ringkasan: ringkasan,
      thumbnail: thumbnail,
      konten: konten
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert('Berita berhasil dikirim!');
    document.getElementById('form-berita').reset(); // Reset form
  })
  .catch(error => {
    alert('Terjadi kesalahan saat mengirim berita. Silakan coba lagi.');
    console.error('Error:', error);
  });
});
