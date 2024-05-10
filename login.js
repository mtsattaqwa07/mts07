document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Kirim data ke server, cek login, dll.
    // Contoh:
    if (username === 'user' && password === '0354') {
      alert('Login berhasil!');
      // Redirect ke halaman lain
      window.location.href = 'adm.html';
    } else {
      alert('Login gagal! Silakan coba lagi.');
    }
  });
  