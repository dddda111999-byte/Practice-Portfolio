let full = document.getElementsByClassName("full")[0];
let x = 0; 
document.getElementById("prev").addEventListener("click",function(){
    x--;
    if(x < 0){
        x = 2;
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
})

document.getElementById("next").addEventListener("click",function(){
    x++;
    if(x >= 3){
        x = 0;
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
})

let slideRun = setInterval(function(){
    x++;
    if(x >= 3){
        x = 0;
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
},2500)

