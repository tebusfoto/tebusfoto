document.getElementById('form-berita').addEventListener('submit', function(event) {
  event.preventDefault();

  const judul = document.getElementById('judul').value;
  const ringkasan = document.getElementById('ringkasan').value;
  const thumbnail = document.getElementById('thumbnail').value;
  const konten = document.getElementById('konten').value;

  fetch('https://script.google.com/macros/s/AKfycbzgUxDj7pL8EzCWrKULPmiLDWCvZmsVQ3jr7l2KSBirBKjYWZDO9u8SdvJtJOC466SA/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ judul, ringkasan, thumbnail, konten }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(() => {
    alert('✅ Berita berhasil dikirim!');
    document.getElementById('form-berita').reset();
  })
  .catch(error => {
    alert('❌ Gagal mengirim berita. Coba lagi.');
    console.error('Error:', error);
  });
});
