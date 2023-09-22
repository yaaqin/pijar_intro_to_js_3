//send email

//get database

//hitung nilai

//bayar spp

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
  async function processPayment(deposit) {
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
  
  processPayment(70000);

