const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY0ODE2NjcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnZXJvY3Jvc3RlbGxpQGdtYWlsLmNvbSJ9.-MxUEnqP278Wj9TFMzDDHVUpKplXbm9V0xy-WKHqvwPinj8N0TJyDR5FBaeoEseT7Y29EBB8KYSUc-nVeYUShg";
const loaddata=async () =>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    fetch('https://api.estadisticasbcra.com/usd_of', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
loaddata();