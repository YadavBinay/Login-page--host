console.log("lets check if javascript is working");

const images = [ 'bg1.jp','bg2.jp','bg3.jp','bg4.jp','bg5.jp'];
window.onload = function(){
    console.log("checking if window load is called");
    document.body.style.backgroundImage = `url("images/bg1.jpg")`;
    
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundSize = "200%";
        //background loop images
        document.body.style.backgroundImage = `url("images/bg${index+1}.jpg")`;
        if(index < 4){
            index += 1;
        }
        else{
            index = 0;
        }
        document.body.style.backgroundSize = "100%";

    }, 10000);//time of interval 1000 = 1s 
};

const loginlink = document.getElementById('loginlink');
const reglink = document.getElementById('reglink');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
loginlink.addEventListener('click', ()=>{
    login.style.transform = 'translate3d(0%,0,0)';
    login.style.scale = 1;
    register.style.transform = 'translate3d(0%,0,0)';
    register.style.scale = 0;
})
reglink.addEventListener('click', ()=>{
    login.style.transform = 'translate3d(-100%,0,0)';
    login.style.scale = 0;
    register.style.transform = 'translate3d(-100%,0,0)';
    register.style.scale = 1;
})