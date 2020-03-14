var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input", ()=>{
    document.getElementsByTagName("body")[0].style.background = 'linear-gradient(to right,'+ color1.value +','+ color2.value +')';    
});

color2.addEventListener("input", ()=>{
    document.getElementsByTagName("body")[0].style.background = 'linear-gradient(to right,'+ color1.value +','+ color2.value +')';    
});
