
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
     apiKey: "AIzaSyDFCKmLGER9PAfTMuugRhuV6foVEDSalH4",
  authDomain: "a-chat-bd886.firebaseapp.com",
  databaseURL: "https://a-chat-bd886-default-rtdb.firebaseio.com",
  projectId: "a-chat-bd886",
  storageBucket: "a-chat-bd886.appspot.com",
  messagingSenderId: "1074046004183",
  appId: "1:1074046004183:web:fc2b7c7934dfaecec6f992",
  measurementId: "G-MEWB3M053T"
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
