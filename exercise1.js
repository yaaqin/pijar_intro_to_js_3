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
                reject('Hari ini bukan hari kerja')
            }
        },3000)
    })
}

const workDay = (day) => {
    return(`Hari ${day} merupakan hari kerja`)
}

//penggunaan then catch

// cekHariKerja('sabtu')
// .then((result) => {
//     const isWorkDay = workDay(result)
//     console.log(isWorkDay)
// })
// .catch((Error) => {
//     console.log(Error)
// })

//penggunaan try catch

const tryCatch = async (day) => {
    try {
        console.log("wait a few minutes..")
        const callPromise = await cekHariKerja(day);
        const isWorkDay = await workDay(callPromise)
        console.log(isWorkDay)
    } catch (Error) {
        console.log(Error)
    }
}

tryCatch("sabtu")