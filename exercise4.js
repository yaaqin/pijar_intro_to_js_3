const api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
  .then((response) => {
    if (!response.ok) {
      return
    } else {
      return response.json();
    }
  })
  .then((data) => {
    const names = data.map((user) => user.name);
    names.forEach((name, id) => {
      console.log(`User ${id + 1}: ${name}`);
    });
  })
  .catch((error) => {
    console.error('Terjadi kesalahan');
  });
