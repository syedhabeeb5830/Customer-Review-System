
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
//     authDomain: "login-demo-254f7.firebaseapp.com",
//     projectId: "login-demo-254f7",
//     storageBucket: "login-demo-254f7.appspot.com",
//     messagingSenderId: "228883805517",
//     appId: "1:228883805517:web:db9063121d6bf3a79ab304",
//     measurementId: "G-C8Q2HYKHY1"
//   };




  const firebaseConfig = {
    apiKey: "AIzaSyBpagVZqoTW2YIbo5n6F6fcNdd5U0NNMCI",
    authDomain: "sign-up-6d7d5.firebaseapp.com",
    projectId: "sign-up-6d7d5",
    storageBucket: "sign-up-6d7d5.appspot.com",
    messagingSenderId: "359848367364",
    appId: "1:359848367364:web:3ac3aa7a752be44127ec51",
    measurementId: "G-JVZ9LXCYN9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));


    window.location.href = "C:/Users/syed%20habeeb%20uddin/Desktop/Sign_Up/public/Home.html"
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    window.location.href = "C:/Users/syed%20habeeb%20uddin/Desktop/Sign_Up/public/Home.html"

  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    // if(user){
    //   var email = user.email;
    //   alert("Active user "+email);

    // }else{
    //   alert("No Active user Found")
    // }
  })