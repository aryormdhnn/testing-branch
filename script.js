fetch('https://64527770a2860c9ed40d2a69.mockapi.io/doctor')
.then(response => response.json())
.then(data => {
    console.log(data);

    data.forEach((item,index)=> {
        const namaId= 'nama' + (index + 1);
        const umurId= 'exp' + (index + 1);
        const jobId= 'job' + (index + 1);
        const priceId= 'price' + (index + 1);

        document.getElementById(namaId).innerHTML = 'dr.'+ item.name;
        document.getElementById(umurId).innerHTML = item.experience + ' Tahun';
        document.getElementById(jobId).innerHTML = item.job;
        document.getElementById(priceId).innerHTML = 'Rp.' + item.price * 1000;
    }
    )
})
.catch(error => console.log(error))