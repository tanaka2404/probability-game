let redButton = document.getElementById('red');
let blueButton = document.getElementById('blue');
let monitor = document.getElementById('kaisuu');
let monitorKakuritu = document.getElementById('kakuritu');
let monitor_saikou = document.getElementById('saikou');
let fade = document.getElementById('fade');
let settingFade = document.getElementById('settingAnim');
let saikou = 0;
let el;
let kakuritu = 1;
let kaisuu = 0;
let visibleFade = 1;
let onAnimation = false;
let settingAnimToggle = 0;

settingFade.addEventListener('click', (e) => {
    settingAnimToggle ++;
    if ((settingAnimToggle % 2) == 0){
        settingFade.textContent = 'アニメーションを表示: Yes'
        visibleFade = 1;
    }else if((settingAnimToggle % 2) == 1){
        settingFade.textContent = 'アニメーションを表示: No'
        visibleFade = 0;
    }
})

function clicked(){
    if (visibleFade == 1){
        moveFade();
    }else{
        clickShori();
    }
}

function clickShori(){
    el = Math.floor(Math.random() * 100);
    if (el <= 50) {
        kakuritu = kakuritu * 2;
    } else {
        kakuritu = 1;
    }
    kaisuu ++;
    monitor.textContent = "回数:" + kaisuu;
    monitorKakuritu.textContent = "1/" + kakuritu;
    if (kakuritu > saikou){
        saikou = kakuritu;
    }
    monitor_saikou.textContent = "最高確率:1/" + saikou;
}

async function moveFade(){
    onAnimation = true;
    fade.style = 'transition: all 0.3s;transform: translateY(0%);';
    fade.addEventListener("transitionend", (e) => {
        setTimeout(() => {
            fade.style = 'transition: all 0.3s;transform: translateY(100%);';
            fade.addEventListener("transitionend", (e) => {
                fade.style.transition = 'none';
                fade.style.transform = 'translateY(-100%)';
                onAnimation = false;
            }, { once: true });
            clickShori();
        }, 700);
        
    }, { once: true });
}

redButton.addEventListener('click', () => {
    if (!onAnimation) {
        clicked();
    }
});
blueButton.addEventListener('click', () => {
    if (!onAnimation) {
        clicked();
    }
});