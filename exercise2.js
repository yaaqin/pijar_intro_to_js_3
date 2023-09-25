//displaying months name

const getMonth = (callback) => {
    setTimeout (() => {
        let error = false
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"))
        }
    }, 4000);
}

const mapMonth = (nul, month) => {
    const result = month.map((namaBulan) => {
        return `Bulan ${namaBulan}`;
      });
      result.forEach((item) => {
        console.log(item);
        });
}

getMonth(mapMonth)