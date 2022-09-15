let listed = document.querySelector(".list__move");
let list__nav = document.querySelector(".list__nav");
let bod = document.querySelector("body");
// listed.addEventListener("click",()=>{
//     document.querySelector(".list__nav").style.transform="translate(300px)"
// })
let a = 0;
// document.querySelector(".list__move").addEventListener("click",()=>{ 

//     document.querySelector(".list__nav").style.transform="translateY(450px)";
// })
document.querySelector(".list__move").addEventListener("click",()=>{ 
    a++
    if(a%2 == 1){
        document.querySelector(".list__nav").style.transform="translateY(450px)";
    }else{
        document.querySelector(".list__nav").style.transform="translateY(-450px)";

    }
})
