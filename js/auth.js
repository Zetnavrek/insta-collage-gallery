
    $(document).ready(function () {
        console.log('Que esta pasando!!!?')
        $("#login").click(function () {
            var email = $("#email").val();
            var password = $("#password").val();
            console.log(email, password);
    
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                console.log(error.message);
                alert(error.message);
            })
        });
    
        $("#logout").click(function () {
            console.log("Boton logout clicleado");
            firebase.auth().signOut();
        });
    
        $("#signup").click(function () {
            console.log("Boton signup clicleado");
            var email = $("#email").val();
            var password = $("#password").val();
            console.log(email, password);
    
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function (error) {
                    console.log(error.message);
                    alert(error.message);
                })
        });
    
        firebase.auth().onAuthStateChanged(function (user) { //lo del objeto
            console.log("checking login state");
            if (user) {
                console.log("logged in");
                window.location = "index.html";
            
            } else {
                console.log("logged out");
            }
        });
    })
     
     /*document.getElementById('login').addEventListener('click',function (){
    //console.log('click');
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch ((error) => {
            swal(error.message);
        })
    });

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

/*firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        $("#user").text(user.email);
        window.location = "views/app.html";
    } else {
        $("#user").text("");
    }
})

document.getElementById('login').addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (password === 123456) {
        swal("Error ", "The password can not be 123456, have an empty field or have less than 6 characters")
        let passwordInput = document.getElementById('password').value = '';
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                swal("Error", error.message, "error");
            })
    }
});*/


    