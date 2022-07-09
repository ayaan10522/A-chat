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
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose :"Adding Room name"
    });
    localStorage.setItem("room_name",Room_name);
    window.location = "kwitter_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
     
    //Start code
console.log("Room Name -" +Room_name);
row="<div class='room_name' id="+Room_name+" onclick='GoToRoom_Name(this.id)'>#"+Room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End cod
    });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="index.html";
    }
    
    function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
    
