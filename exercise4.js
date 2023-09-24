// URL REST API yang ingin diambil datanya
const api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
  .then((response) => {
    // Memeriksa status respons HTTP
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    // Mengubah respons menjadi objek JSON
    return response.json();
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
    console.error('Terjadi kesalahan:', error);
  });
