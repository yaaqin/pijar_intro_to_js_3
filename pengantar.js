const link = "https://jsonplaceholder.typicode.com/posts"

//Promise

const getDataPost = (method, url) => {
    return new Promise((resolve, reject)=>{

        const ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();

        ajax.onreadystatechange = () => {
            if (ajax.status === 200) {
                const result = JSON.parse(ajax.responseText)
                resolve(result);
            } else {
                const error = 'Gagal Bro...'
                reject(error)
            }
        };
    })
};

getDataPost("GET", link)
.then((res) => {
    console.log("Berhasil");
    res.map((item) => {
        console.log(`Untuk id ${item.id} Titlenya adalah : ${item.title}`);
    });
})
.catch((err) => {
    console.log(err);
});

//callback function

const callbackPost = (method, url, callback) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();

    ajax.onreadystatechange = () => {
        if (ajax.status === 200 ) {
            const result = JSON.parse(ajax.responseText);
            callback(null, result);
        } else {
            callback('eror guys...', null)
        }
    };
}

callbackPost ('GET', link, (error, result)=> {
    if (error) {
        console.log(error);
        return
    }

    result.map((item) => [
        console.log(`Title id ${item.id} adalah ${item.title}`)
    ])
})


