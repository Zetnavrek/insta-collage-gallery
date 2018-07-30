
    document.getElementById('login').addEventListener('click', () => {
    //console.log('click');
        let email = document.getElementById('e-mail').value;
        let password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch ((error) => {
            swal(error.message);
        })
    })

    document.getElementById('logout').addEventListener('click', () => {
        console.log('click');
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location='index.html';
            // User is signed in.
        } else{
            console.log('deslogeado');
    }
});

    