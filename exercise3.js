const amountBill = 100000

const payPLN = (totalPayment) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (totalPayment >= amountBill) {
            resolve("Payment success...")
        } else {
            reject("the funds you paid are less!")
        }
      }, 3000); // time to simulated payment (3 second)
    });
  }
//calculate payment

const calculatePayment = (deposit) => {
    const result = amountBill - deposit;
    return `The shortfall you have to pay is:${result}`
}

  
  // use async/await for Electric payment
   const processPayment = async (deposit) => {
    try {
      console.log('Start Payment...');
      const resultPayment = await payPLN(deposit);
      console.log(resultPayment);
    } catch (error) {
      console.error(error);
      const moreInfo = calculatePayment(deposit)
      console.log(moreInfo)
    }
  }
  
//   processPayment(70000);


//generate number member (1-100)
const numMember = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const cekMember = (member) => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            if (member >=1 && member <= 100) {
                resolve("Terima kasih telah menjadi member kami")
            } else {
                reject("kamu belum mendaftar sebagai member")
            }
        },2500)
    }) 
}

const jumlahPoint = async (member) => {
    try {
        console.log("Memeriksa data...")
        let success = await cekMember(member)
        const point = 43200
        console.log(`${success}\nmember dengan nomor ${member} memiliki poin sebanyak ${point}`)
    } catch (error) {
        console.error(error);
    }
}

jumlahPoint(1001)