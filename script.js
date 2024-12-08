let btn1_am = document.getElementById('btn1_am')
let btn1_is = document.getElementById('btn1_is')
let btn1_are= document.getElementById('btn1_are')

let word1 = document.getElementById('word1')

let btn1_translate = document.getElementById('btn1_translate')

let right1 = document.getElementById('right1')
let right2 = document.getElementById('right2')
let right3 = document.getElementById('right3')
let right4 = document.getElementById('right4')
let right5 = document.getElementById('right5')
let right6 = document.getElementById('right6')
let right7 = document.getElementById('right7')

btn1_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word1.innerText = "'m not"
    word1.style.color = 'yellow'
    btn1_am.style.backgroundColor = 'chartreuse'
    btn1_am.style.color = 'green'
    btn1_am.disabled = 'true'
    btn1_is.disabled = 'true'
    btn1_are.disabled = 'true'
    right1.style.visibility = 'visible'
})

btn1_is.addEventListener('click', function() {
    word1.innerText = "'s not"
    word1.style.color = 'yellow'
    btn1_is.style.backgroundColor = 'red'
    btn1_is.style.color = 'yellow'
    btn1_is.disabled = 'true'
})

btn1_are.addEventListener('click', function() {
    word1.innerText = "'re not"
    word1.style.color = 'yellow'
    btn1_are.style.backgroundColor = 'red'
    btn1_are.style.color = 'yellow'
    btn1_are.disabled = 'true'
})

btn1_translate.addEventListener('click', function() {
    btn1_translate.textContent = 'Eu não estou feliz hoje.'
    btn1_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn1_translate.textContent = 'Translate'
        btn1_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 2
let btn2_am = document.getElementById('btn2_am')
let btn2_is = document.getElementById('btn2_is')
let btn2_are= document.getElementById('btn2_are')

let word2 = document.getElementById('word2')

let btn2_translate = document.getElementById('btn2_translate')

btn2_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word2.innerText = "'re not"
    word2.style.color = 'yellow'
    btn2_are.style.backgroundColor = 'chartreuse'
    btn2_are.style.color = 'green'
    btn2_am.disabled = 'true'
    btn2_is.disabled = 'true'
    btn2_are.disabled = 'true'
    right2.style.visibility = 'visible'
})

btn2_is.addEventListener('click', function() {
    word2.innerText = "'s not"
    word2.style.color = 'yellow'
    btn2_is.style.backgroundColor = 'red'
    btn2_is.style.color = 'yellow'
    btn2_is.disabled = 'true'
})

btn2_am.addEventListener('click', function() {
    word2.innerText = "'m not"
    word2.style.color = 'yellow'
    btn2_am.style.backgroundColor = 'red'
    btn2_am.style.color = 'yellow'
    btn2_am.disabled = 'true'
})

btn2_translate.addEventListener('click', function() {
    btn2_translate.textContent = 'Você não está triste agora.'
    btn2_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn2_translate.textContent = 'Translate'
        btn2_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 3
let btn3_am = document.getElementById('btn3_am')
let btn3_is = document.getElementById('btn3_is')
let btn3_are= document.getElementById('btn3_are')

let word3 = document.getElementById('word3')

let btn3_translate = document.getElementById('btn3_translate')

btn3_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word3.innerText = "'s not"
    word3.style.color = 'yellow'
    btn3_is.style.backgroundColor = 'chartreuse'
    btn3_is.style.color = 'green'
    btn3_am.disabled = 'true'
    btn3_is.disabled = 'true'
    btn3_are.disabled = 'true'
    right3.style.visibility = 'visible'
})

btn3_are.addEventListener('click', function() {
    word3.innerText = "'re not"
    word3.style.color = 'yellow'
    btn3_are.style.backgroundColor = 'red'
    btn3_are.style.color = 'yellow'
    btn3_are.disabled = 'true'
})

btn3_am.addEventListener('click', function() {
    word3.innerText = "'m not"
    word3.style.color = 'yellow'
    btn3_am.style.backgroundColor = 'red'
    btn3_am.style.color = 'yellow'
    btn3_am.disabled = 'true'
})

btn3_translate.addEventListener('click', function() {
    btn3_translate.textContent = 'Ele não é professor. Ele é mecânico'
    btn3_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn3_translate.textContent = 'Translate'
        btn3_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 4
let btn4_am = document.getElementById('btn4_am')
let btn4_is = document.getElementById('btn4_is')
let btn4_are= document.getElementById('btn4_are')

let word4 = document.getElementById('word4')

let btn4_translate = document.getElementById('btn4_translate')

btn4_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word4.innerText = "'s not"
    word4.style.color = 'yellow'
    btn4_is.style.backgroundColor = 'chartreuse'
    btn4_is.style.color = 'green'
    btn4_am.disabled = 'true'
    btn4_is.disabled = 'true'
    btn4_are.disabled = 'true'
    right4.style.visibility = 'visible'
})

btn4_are.addEventListener('click', function() {
    word4.innerText = "'re not"
    word4.style.color = 'yellow'
    btn4_are.style.backgroundColor = 'red'
    btn4_are.style.color = 'yellow'
    btn4_are.disabled = 'true'
})

btn4_am.addEventListener('click', function() {
    word4.innerText = "'m not"
    word4.style.color = 'yellow'
    btn4_am.style.backgroundColor = 'red'
    btn4_am.style.color = 'yellow'
    btn4_am.disabled = 'true'
})

btn4_translate.addEventListener('click', function() {
    btn4_translate.textContent = 'Ela não está cansada. Ela está cheia de energia.'
    btn4_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn4_translate.textContent = 'Translate'
        btn4_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 5
let btn5_am = document.getElementById('btn5_am')
let btn5_is = document.getElementById('btn5_is')
let btn5_are= document.getElementById('btn5_are')

let word5 = document.getElementById('word5')

let btn5_translate = document.getElementById('btn5_translate')

btn5_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word5.innerText = "'s not"
    word5.style.color = 'yellow'
    btn5_is.style.backgroundColor = 'chartreuse'
    btn5_is.style.color = 'green'
    btn5_am.disabled = 'true'
    btn5_is.disabled = 'true'
    btn5_are.disabled = 'true'
    right5.style.visibility = 'visible'
})

btn5_are.addEventListener('click', function() {
    word5.innerText = "'re not"
    word5.style.color = 'yellow'
    btn5_are.style.backgroundColor = 'red'
    btn5_are.style.color = 'yellow'
    btn5_are.disabled = 'true'
})

btn5_am.addEventListener('click', function() {
    word5.innerText = "'m not"
    word5.style.color = 'yellow'
    btn5_am.style.backgroundColor = 'red'
    btn5_am.style.color = 'yellow'
    btn5_am.disabled = 'true'
})

btn5_translate.addEventListener('click', function() {
    btn5_translate.textContent = 'Não está ensolarado esta manhã. Está chuvoso.'
    btn5_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn5_translate.textContent = 'Translate'
        btn5_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 6
let btn6_am = document.getElementById('btn6_am')
let btn6_is = document.getElementById('btn6_is')
let btn6_are= document.getElementById('btn6_are')

let word6 = document.getElementById('word6')

let btn6_translate = document.getElementById('btn6_translate')

btn6_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word6.innerText = "'re not"
    word6.style.color = 'yellow'
    btn6_are.style.backgroundColor = 'chartreuse'
    btn6_are.style.color = 'green'
    btn6_am.disabled = 'true'
    btn6_is.disabled = 'true'
    btn6_are.disabled = 'true'
    right6.style.visibility = 'visible'
})

btn6_is.addEventListener('click', function() {
    word6.innerText = "'s not"
    word6.style.color = 'yellow'
    btn6_is.style.backgroundColor = 'red'
    btn6_is.style.color = 'yellow'
    btn6_is.disabled = 'true'
})

btn6_am.addEventListener('click', function() {
    word6.innerText = "'m not"
    word6.style.color = 'yellow'
    btn6_am.style.backgroundColor = 'red'
    btn6_am.style.color = 'yellow'
    btn6_am.disabled = 'true'
})

btn6_translate.addEventListener('click', function() {
    btn6_translate.textContent = "Nós não somos irmãos. Nós somos primos."
    btn6_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn6_translate.textContent = 'Translate'
        btn6_translate.style.color = 'kadetBlue'
    }, 3000);
})

//WORD 7
let btn7_am = document.getElementById('btn7_am')
let btn7_is = document.getElementById('btn7_is')
let btn7_are= document.getElementById('btn7_are')

let word7 = document.getElementById('word7')

let btn7_translate = document.getElementById('btn7_translate')

btn7_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word7.innerText = "'re not"
    word7.style.color = 'yellow'
    btn7_are.style.backgroundColor = 'chartreuse'
    btn7_are.style.color = 'green'
    btn7_am.disabled = 'true'
    btn7_is.disabled = 'true'
    btn7_are.disabled = 'true'
    right7.style.visibility = 'visible'
})

btn7_is.addEventListener('click', function() {
    word7.innerText = "'s not"
    word7.style.color = 'yellow'
    btn7_is.style.backgroundColor = 'red'
    btn7_is.style.color = 'yellow'
    btn7_is.disabled = 'true'
})

btn7_am.addEventListener('click', function() {
    word7.innerText = "'m not"
    word7.style.color = 'yellow'
    btn7_am.style.backgroundColor = 'red'
    btn7_am.style.color = 'yellow'
    btn7_am.disabled = 'true'
})

btn7_translate.addEventListener('click', function() {
    btn7_translate.textContent = "Eles não são amigáveis. Eles são rudes."
    btn7_translate.style.color = 'kadetBlue'
    setTimeout(() => {
        btn7_translate.textContent = 'Translate'
        btn7_translate.style.color = 'kadetBlue'
    }, 3000);
})