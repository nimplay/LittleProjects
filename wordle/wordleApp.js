var heiht = 6;
var wight = 5;

var row = 0;
var col = 0;

var gameOver = false;
var word = "squid"

window.onload = function(){
    inicialize(); 
}

function inicialize(){
    for (let r = 0; r < heiht; r++) {
        for (let c = 0; c < wight; c++) {
            let tile =document.createElement("span");
            tile.id = r.toString() + "_" + c.toString();
            tile.classList.add("tile");  
            tile.innerText = ""; 
            document.getElementById("board").appendChild(tile);         
        }
       
        
    }
}
//listener for key
document.addEventListener("keyup", (e) => {
    if(gameOver) return;
    //alert(e.code);
})
