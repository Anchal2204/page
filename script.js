let x=1;
let y=2;
let z=3;
let prev= document.getElementById('btnP');
let btn1= document.getElementById('btn1');
let btn2= document.getElementById('btn2');
let btn3= document.getElementById('btn3');
let next= document.getElementById('btnN');
function condition(){
    btn1.innerHTML = (`<button id="btn-${x}">${x}</button`);
    let blue1= document.getElementById(`btn-${x}`);
    if(x%3==0){
        blue1.style.background="blue";
    }
    btn2.innerHTML = (`<button id="btn-${y}">${y}</button`);
    let blue2= document.getElementById(`btn-${y}`);
    if(y%3==0){
        blue1.style.background="blue";
    }
    btn3.innerHTML = (`<button id="btn-${z}">${z}</button`);
    let blue3= document.getElementById(`btn-${z}`);
    if(z%3==0){
        blue1.style.background="blue";
    }
}
next.addEventListener("click",function(){
    x++;
    y++;
    z++;
    condition();
})
    prev.addEventListener("click",function(){
        if(x>1||y>2||z>3){
        x--;
        y--;
        z--;
        condition();
        }
})
btn2.addEventListener("click",function(){
    x++;
    y++;
    z++;
    condition();
})
btn3.addEventListener("click",function(){
    x+=2;
    y+=2;
    z+=2;
    condition();
})