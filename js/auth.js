
    /*$(document).ready(() => {
        $("#login").click(() => {
            let email = $("#email").val();
            let password = $("#password").val();
     
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch((error) => {
                    swal(error.message);
                })
     
        })
        $("#logout").click(() => {
            firebase.auth().signOut();
            window.location = "index.html";
        })
     
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                $("#user").text(user.email);
                console.log(window.location.pathname);
                if(window.location.pathname != "/gallery.html"){
                    window.location = "gallery.html";
                }
            } else {
                $("#user").text("");
            }
        })
     
     
        $("#signup").click(() => {
            let email = $("#email").val();
            let password = $("#password").val();
     
            if (password == 123456) {
                swal("Error ", " The password can not be 123456, empty field or have less than 6 characters", "error");
                let passwordInput = $("#password").val("");
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        //swal("Error", error.message, "error");
                    })
            }
     
     
     
        })
     });*/
    
    