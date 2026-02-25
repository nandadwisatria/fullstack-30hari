// H3 Javascript
window.onload = function(){
    alert("Welcome To My Interactive Portfolio");
    console.log("Website Loaded Successfully");
};

// Function 1 Greeting visitor
function greetvisitor(){
    // Ambil input dari user
    let visitorname = document.getElementById("visitorname").value;

    // Validasi: Cek apakah user mengisi nama atau tidak
    if(visitorname === ""){
        alert("⚠️ Please Enter Your Name!");
        return;
    }

    // Tampilkan Pesan Greeting
    let greetingmessage = document.getElementById("greetingmessage");
    greetingmessage.innerHTML="Hello, " + visitorname + " Welcome To My Portfolio";

    // Kosongkan Input field
    document.getElementById("visitorname").value = "";

    // Ubah deskripsi Profile
    let profiledesc = document.getElementById("profiledesc");
    profiledesc.innerHTML="Nice to meet you, " + visitorname + "!";
}

// Change Theme
function changetheme(color){
    let body = document.body;

    // Gradient Themes
    if (color === 'purple'){
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else if (color === 'blue'){
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #0fd3dd 100%)';
    } else if (color === 'green'){
        body.style.background = 'linear-gradient(135deg, #1bd559 0%, #38f9d7 100%)';
    } else if (color === 'orange'){
        body.style.background = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
    }
    // feedback ke user
    console.log("Theme Changed to " + color);
}

// Visitor Counter
let viewcount = 0;
function incrementcounter(){
    viewcount++;
    document.getElementById("viewcount").innerHTML = viewcount;

    //Pesan Khusus milestone tertentu
    if (viewcount === 10){
        alert ("Congratulations! You have reached 10 views!");
    } else if (viewcount === 50){
        alert ("Congratulations! You have reached 50 views You're Awesome ");
    }
}

// Chalenge pro real time clock
function updateclock(){
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    console.log("Current Time: " + timeString);
}

// Update clock setiap satu detik
setInterval(updateclock, 1000);

// Log Untuk Debugging
console.log("✅ JavaScript loaded successfully!");
console.log("Today is " + new Date().toLocaleDateString());