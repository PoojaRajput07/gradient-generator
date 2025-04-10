let btn1=document.getElementById("myButton1");
let btn2=document.getElementById("myButton2");
let randomcode1="5c91e5";
let randomcode2="983fc6";
const updatebackground=()=>{
    document.querySelector("section").style.backgroundImage=`linear-gradient(to right,#${randomcode1},#${randomcode2})`;
    document.getElementsByClassName("copycode")[0].innerHTML=` background-image:linear-gradient(to right,#${randomcode1},#${randomcode2})`

}
const handleButton1=()=>{
    let myHexnum="0123456789abcdef";
    randomcode1="";
    for(let i=0;i<6;i++){
        let num=Math.random()*16
        num=Math.floor(num);
        randomcode1+=myHexnum[num];

    }
    btn1.innerHTML="#"+randomcode1;
    updatebackground();
   
   

}



const handleButton2=()=>{
    let myHexnum="0123456789abcdef";
   randomcode2="";
    for(let i=0;i<6;i++){

        let num=Math.random()*16
        num=Math.floor(num);
        randomcode2+=myHexnum[num];

    }
    btn2.innerHTML="#"+randomcode2;
    updatebackground();
    



}
btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
document.getElementsByClassName("copycode")[0].addEventListener("click",()=>{
    navigator.clipboard.writeText(document.getElementsByClassName("copycode")[0].innerText);
    alert("background code is copied!!!");
});


