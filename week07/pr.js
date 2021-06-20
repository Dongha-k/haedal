const _body = document.getElementsByTagName('body')[0];
const _moon = document.getElementsByClassName('night-shift')[0];
const _rest = document.getElementById('education')
const _rest2 = document.getElementById('contact')

let day = true;

_moon.addEventListener('click', function(){
    console.log("클릭이 일어남");
    if(day){
        _body.style.color = 'white';
        _body.style.backgroundColor = 'black';
        
        _rest.style.color = 'white';
        _rest.style.backgroundColor = 'black';
        
        _rest2.style.color = 'white';
        _rest2.style.backgroundColor = 'black';
        
        day = false;
    }
    else{
        _body.style.color = 'black';
        _body.style.backgroundColor = 'white';
        
        _rest.style.color = 'black';
        _rest.style.backgroundColor = 'white';
        
        _rest2.style.color = 'black';
        _rest2.style.backgroundColor = 'white';
        day = true;
    }
})