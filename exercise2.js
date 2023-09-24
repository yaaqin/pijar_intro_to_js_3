const returnMonth = (bulan) => {
    bulan.forEach((item) => {
      console.log(item);
    });
  }

  const getmonth = (callback) => {
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
    const result = bulan.map((namaBulan) => {
      return `Bulan ${namaBulan}`;
    });
    callback(result);
  }

  getmonth(returnMonth);