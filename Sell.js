var firebaseConfig = {
    apiKey: "AIzaSyAqs7XiLi7zRml6QtKqnUPnZGNqHxMllxs",
    authDomain: "hhr1website.firebaseapp.com",
    databaseURL: "https://hhr1website-default-rtdb.firebaseio.com",
    projectId: "hhr1website",
    storageBucket: "hhr1website.appspot.com",
    messagingSenderId: "656572968982",
    appId: "1:656572968982:web:79d494b3a1cde972b98537"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_no= document.getElementById("no_user").value;
email_user= document.getElementById("email_user").value;

room_name="Sell_Book"
function submit(){
  
  document.getElementById("ask_number").style.display="none"
  document.getElementById("thanks").style.display="inherit"
  buy_book=localStorage.getItem("book")
  user_no= document.getElementById("no_user").value;
  email_user= document.getElementById("email_user").value;
    firebase.database().ref(room_name).push({
        Phone_no: user_no,
        email_of_user: email_user,
        book: buy_book
  })

}