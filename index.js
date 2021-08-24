generateBtn = document.querySelector('#generate');
password = document.querySelector('#password');

generateBtn.addEventListener('click',() => {
    let arr = [];
    for(let i=0; i<10;i++){
        arr.push((Math.round(Math.random()*15)).toString(16));
    }
    password.innerHTML=arr.join('');
})

