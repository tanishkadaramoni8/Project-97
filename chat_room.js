  
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDpiaRMv9uSr7G5-W9RyvKOpYNFgLPq-1w",
      authDomain: "chat-app-eb0c0.firebaseapp.com",
      databaseURL: "https://chat-app-eb0c0.firebaseio.com",
      projectId: "chat-app-eb0c0",
      storageBucket: "chat-app-eb0c0.appspot.com",
      messagingSenderId: "1004597319858",
      appId: "1:1004597319858:web:d1d321ccccda926ab591ab"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name-" + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirecttoRoomName(this.id)'>#" + Room_names + "</div> <hr> ";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirecttoRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

user_name  = localStorage.getItem("user_name");
room_name  = localStorage.getItem("room_name");

function send()
{
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value = " ";
}