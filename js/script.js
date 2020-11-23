console.log("hello world");

function test(){
    var x="hello";
    console.log(x);
}
function toggleMobileNavigation(){
   document.getElementById("mainNavi").classList.toggle("open");
}

document.getElementById("toggle_menu").addEventListener("click", toggleMobileNavigation);
