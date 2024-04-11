console.log("hello, vanilla.");
const $gameStart = document.getElementById('gameStart');
const $inputBox = document.getElementById('inputBox');
const $guess = document.querySelector('#inputBox');
let random;
const $result = document.getElementById('result');
const $leftChance = document.getElementById('leftChance');
let chance = 10;
const $restart = document.getElementById('restart');

$gameStart.onclick = function answer() {
    let result = '';
    let randomFirst, randomSecond, randomThird;
    
    do {
    randomFirst = Math.floor(Math.random() * 10);
    randomSecond = Math.floor(Math.random() * 10);
    randomThird = Math.floor(Math.random() * 10);
    } while (randomFirst === 0 || randomFirst === randomSecond || randomSecond === randomThird || randomFirst === randomThird)

    result += String(randomFirst)+String(randomSecond)+String(randomThird);
    random = Number(result);    
    console.log(random);
}; 

$inputBox.addEventListener('keyup', function enter () {
    if (event.keyCode === 13) {
        if ($guess.value <= 99) {
            alert('입력하신 숫자가 세자리 미만 입니다.');
        }else{};
    }else{};
});

$inputBox.addEventListener('keyup', function check (event) {
    if (event.keyCode === 13) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < String($guess.value).length; i++) {
            if (String(random)[i] === String($guess.value)[i]) {
                strike ++;
            } else if(String(random).includes(String($guess.value)[i])) {
                ball ++;
            }
        } 
        console.log(strike);
        console.log(ball);
        $result.innerHTML = `스트라이크: ${strike}<br>볼: ${ball}`

        if (chance >0) {
            chance--;
        }
        if (chance === 0) {
            alert("남은 기회를 전부 소진하였습니다!")   
        }

        $leftChance.innerHTML = `남은 기회: ${chance}회`;
    };
});

$restart.onclick = function restart() {
    chance = 10;

    let result = '';
    let randomFirst, randomSecond, randomThird;
    
    do {
    randomFirst = Math.floor(Math.random() * 10);
    randomSecond = Math.floor(Math.random() * 10);
    randomThird = Math.floor(Math.random() * 10);
    } while (randomFirst === 0 || randomFirst === randomSecond || randomSecond === randomThird || randomFirst === randomThird)

    result += String(randomFirst)+String(randomSecond)+String(randomThird);
    random = Number(result);    
    console.log(random);

    $leftChance.innerHTML = `남은 기회: ${chance}회`
}; 