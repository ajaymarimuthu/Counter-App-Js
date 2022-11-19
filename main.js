const decrease=document.getElementById('decrease');
const increase=document.getElementById('increase');
const reset=document.getElementById('reset');

const counter=document.getElementById('counter');

let countValue=0;



increase.addEventListener('click',(e)=>{
    // console.log("increase");

    countValue+=1;
    console.log(countValue);

    counter.innerHTML=countValue;
})


decrease.addEventListener('click',(e)=>{
    // console.log("decrease");

    countValue=countValue-1;
    // console.log(countValue);

    counter.innerHTML=countValue;
})

reset.addEventListener('click',(e)=>{
    // console.log("increase");

    countValue=0;
    // console.log(countValue);

    counter.innerHTML=countValue;
})


