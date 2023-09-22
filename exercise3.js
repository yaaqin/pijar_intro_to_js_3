//send email

//get database

//hitung nilai

//bayar spp

const jumlahTagihan = 100000

function bayarPLN(totalPayment) {
    return new Promise((resolve, reject) => {
      // Simulasi pembayaran PLN
      setTimeout(() => {
        if (totalPayment >= jumlahTagihan) {
            resolve("pembayaran selesai dilakukan")
        } else {
            reject("dana yang anda bayarkan kurang!")
        }
      }, 3000); // Waktu simulasi pembayaran (2 detik)
    });
  }
  
  // Menggunakan async/await untuk melakukan pembayaran PLN
  async function prosesPembayaran(tagihanPLN) {
  
    try {
      console.log('Memulai pembayaran PLN...');
      const hasilPembayaran = await bayarPLN(tagihanPLN);
      console.log(hasilPembayaran);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Memanggil fungsi untuk melakukan pembayaran
  prosesPembayaran(100000);