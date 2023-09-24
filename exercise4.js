const api = 'https://jsonplacehollder.typicode.com/users';

fetch(api)
  .then((response) => {
    if (!response.ok) {
      return
    } else {
      return response.json();
    }
  })
  .then((data) => {
    // Mengambil semua nama (name) dari data yang diterima
    const names = data.map((user) => user.name);

    // Menampilkan nama-nama ke konsol
    names.forEach((name, index) => {
      console.log(`User ${index + 1}: ${name}`);
    });
  })
  .catch((error) => {
    console.error('Terjadi kesalahan');
  });
