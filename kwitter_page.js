//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAPyyw7-uVrTOg_PATti-Kb5VE3VNx0qpI",
      authDomain: "kwitter-1219c.firebaseapp.com",
      databaseURL: "https://kwitter-1219c-default-rtdb.firebaseio.com",
      projectId: "kwitter-1219c",
      storageBucket: "kwitter-1219c.appspot.com",
      messagingSenderId: "466220643678",
      appId: "1:466220643678:web:521aeefff5a9bf88360bcf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user");
    room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
row1 = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message + "</h4>";
row2 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +"onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = row1+row2;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("message").value="";
      console.log("Message is sent!");
}

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeitem("room_name");
      window.location.replace("index.html");
}

