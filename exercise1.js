const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

//penggunaan then catch

// cekHariKerja('sabtu').then((result) => {
//     console.log('proses berhasil dan selesai')
//     console.log(result)
// })
// .catch((Error) => {
//     console.log('hari tersebut bukan hari kerja')
// })

//penggunaan try catch

const tryCatch = async () => {
    try {
        console.log("wait a few minutes..")
        const callPromise = await cekHariKerja('sabtu');
        console.log(callPromise)
    } catch (Error) {
        console.log('Hari ini libur')
    }
}

tryCatch()