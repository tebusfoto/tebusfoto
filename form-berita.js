// Fungsi untuk menampilkan toast notification
function showToast(message, isSuccess = true) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.padding = '16px 24px';
  toast.style.borderRadius = '12px';
  toast.style.backgroundColor = isSuccess ? '#4CAF50' : '#F44336';
  toast.style.color = 'white';
  toast.style.fontSize = '16px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  toast.style.zIndex = '1000';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease';

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}

// Event handler untuk form submission
document.getElementById('form-berita').addEventListener('submit', function(event) {
  event.preventDefault();

  const judul     = document.getElementById('judul').value.trim();
  const ringkasan = document.getElementById('ringkasan').value.trim();
  const thumbnail = document.getElementById('thumbnail').value.trim();
  const konten    = document.getElementById('konten').value.trim();

  // Pastikan minimal field wajib terisi
  if (!judul || !ringkasan || !konten) {
    showToast('Harap isi semua kolom yang wajib.', false);
    return;
  }

  fetch('https://script.google.com/macros/s/AKfycbzgUxDj7pL8EzCWrKULPmiLDWCvZmsVQ3jr7l2KSBirBKjYWZDO9u8SdvJtJOC466SA/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      judul:     judul,
      ringkasan: ringkasan,
      thumbnail: thumbnail,
      konten:    konten
    })
  })
  .then(() => {
    showToast('✅ Berita berhasil dikirim!');
    document.getElementById('form-berita').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    showToast('❌ Gagal mengirim berita. Coba lagi.', false);
  });
});
