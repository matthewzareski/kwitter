function adduser(){
    username = document.getElementById("user").value;

    localStorage.setItem("user", username);

    window.location = "kwitter_room.html";

}

