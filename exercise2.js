function tampilkanHasil(bulan) {
    bulan.forEach((item) => {
      console.log(item);
    });
  }

  function tampilkanBulan(callback) {
    const bulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
  
    // Menggunakan method map untuk memproses setiap elemen bulan
    const bulanDalamBahasa = bulan.map((namaBulan) => {
      return `Bulan ${namaBulan}`;
    });
  
    // Panggil callback function dengan hasilnya
    callback(bulanDalamBahasa);
  }

  tampilkanBulan(tampilkanHasil);