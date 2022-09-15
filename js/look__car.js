let car__model = document.querySelector("#car__model");
let img__car = document.querySelector(".img-car");
let car__model_value0=car__model.value;
let welcomeText = "Welcome to AM10 carStore";
let welcomeText2 = welcomeText.split("");
let i = document.querySelector("i");
console.log(welcomeText.split(""));
function welcomeMassege (){
    let a = 0;
    // setInterval(()=>{
    //     i.textContent+=welcomeText2[a];
    //     a++;
    // },300)
    setInterval(()=>{
       if(a<welcomeText2.length){
        i.textContent+=welcomeText2[a];
        a++;
       }
    },100)
}
welcomeMassege();

car__model.addEventListener("change",()=>{
    let car__model_value=car__model.value+ ".jpg";
    console.log(car__model_value);
    img__car.setAttribute("src","images/"+car__model_value);

})