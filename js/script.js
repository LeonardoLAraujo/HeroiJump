const heroi = document.querySelector('.heroi');
const monstro = document.querySelector('.monstro1');

const jump = () => {
    heroi.classList.add('jump');

    setTimeout(() =>{
        heroi.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=> {

    const monstroPosition = monstro.offsetLeft;
    const heroiPosition = +window.getComputedStyle(heroi).bottom.replace('px',''); //O + é para converter a string em number
    
    if(monstroPosition <= 170 && monstroPosition > 0 && heroiPosition < 150){
        monstro.style.animation = 'none';
        monstro.style.left = `${monstroPosition}px`;

        heroi.style.animation = 'none';
        heroi.style.bottom = `${heroiPosition}px`;

        heroi.src = './img/heroiOver.gif';

        window.alert("Você Perdeu!");
        

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);