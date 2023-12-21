function openModal() {
    document.getElementById('signup-modal').style.display = 'block';
}

// function closeModal() {
//     document.getElementById('signup-modal').style.display = 'none';
// }



function signIn() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(userName);
    console.log(password);
    axios.get(`http://localhost:9000/sign/${userName}/${password}`)
    .then(response => {
        console.log('GET Response:', response.data);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });
}
