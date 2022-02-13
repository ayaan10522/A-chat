
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBUzinR4_wbYWorrMuoINPSyNZ4LkEIrf0",
    authDomain: "kwitter-a4d5b.firebaseapp.com",
    databaseURL:"https://kwitter-a4d5b-default-rtdb.firebaseio.com/",
    projectId: "kwitter-a4d5b",
    storageBucket: "kwitter-a4d5b.appspot.com",
    messagingSenderId: "926931126191",
    appId: "1:926931126191:web:942384c5daa73880dad15a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getitem("user_name")
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick= 'redirecttoroomname(this.id)'>#" + Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+row;
    //End code
    });});}
    
    
getData();
function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
