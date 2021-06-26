var chanel1 = [];
var chanel2 = [];
var chanel3 = [];
var chanel4 = [];
var boomAudio = document.querySelector('[data-sound="boom"]');
var clapAudio = document.querySelector('[data-sound="clap"]');
var hihatAudio = document.querySelector('[data-sound="hihat"]');
var kickAudio = document.querySelector('[data-sound="kick"]');
var openhatAudio = document.querySelector('[data-sound="openhat"]');
var rideAudio = document.querySelector('[data-sound="ride"]');
var snareAudio = document.querySelector('[data-sound="snare"]');
var tinkAudio = document.querySelector('[data-sound="tink"]');
var tomAudio = document.querySelector('[data-sound="tom"]');
var playChanel1Btn = document.querySelector('#playChanel1');
var playChanel2Btn = document.querySelector('#playChanel2');
var playChanel3Btn = document.querySelector('#playChanel3');
var playChanel4Btn = document.querySelector('#playChanel4');
var recordChanel1Btn = document.querySelector('#recordChanel1');
var recordChanel2Btn = document.querySelector('#recordChanel2');
var recordChanel3Btn = document.querySelector('#recordChanel3');
var recordChanel4Btn = document.querySelector('#recordChanel4');
document.body.addEventListener('keypress', function (ev) { return onKeyDown(ev, null); });
playChanel1Btn.addEventListener('click', function (ev) { return playChanel(ev, playChanel1Btn, chanel1); });
playChanel2Btn.addEventListener('click', function (ev) { return playChanel(ev, playChanel2Btn, chanel2); });
playChanel3Btn.addEventListener('click', function (ev) { return playChanel(ev, playChanel3Btn, chanel3); });
playChanel4Btn.addEventListener('click', function (ev) { return playChanel(ev, playChanel4Btn, chanel4); });
recordChanel1Btn.addEventListener('click', function (ev) { return recordChanel(ev, recordChanel1Btn, chanel1); });
recordChanel2Btn.addEventListener('click', function (ev) { return recordChanel(ev, recordChanel2Btn, chanel2); });
recordChanel3Btn.addEventListener('click', function (ev) { return recordChanel(ev, recordChanel3Btn, chanel3); });
recordChanel4Btn.addEventListener('click', function (ev) { return recordChanel(ev, recordChanel4Btn, chanel4); });
function onKeyDown(ev, chanelTab) {
    var key = ev.key;
    var time = ev.timeStamp;
    switch (key) {
        case "q":
            playSound(boomAudio);
            changeStyle(boomAudio);
            break;
        case "w":
            playSound(clapAudio);
            changeStyle(clapAudio);
            break;
        case "e":
            playSound(hihatAudio);
            changeStyle(hihatAudio);
            break;
        case "r":
            playSound(kickAudio);
            changeStyle(kickAudio);
            break;
        case "t":
            playSound(openhatAudio);
            changeStyle(openhatAudio);
            break;
        case "a":
            playSound(rideAudio);
            changeStyle(rideAudio);
            break;
        case "s":
            playSound(snareAudio);
            changeStyle(snareAudio);
            break;
        case "d":
            playSound(tinkAudio);
            changeStyle(tinkAudio);
            break;
        case "f":
            playSound(tomAudio);
            changeStyle(tomAudio);
            break;
    }
    chanelTab.push({
        key: key,
        time: time
    });
    console.log(chanelTab);
    console.log('--------------');
    console.log(chanel1);
    console.log(chanel2);
    console.log(chanel3);
    console.log('--------------');
}
function playSound(instrument) {
    instrument.currentTime = 0;
    instrument.play();
}
// function onPlayChanel1():void {
//     playChannel(chanel1);  
//     console.log(chanel1)
// }
// function onPlayChanel2():void {
//     playChannel(chanel2);  
//     console.log(chanel2)
// }
function recordChanel(ev, chanelNumber, tab) {
    if (chanelNumber.style.color !== 'red') {
        chanelNumber.style.color = 'red';
    }
    else {
        chanelNumber.style.color = 'black';
    }
    document.body.addEventListener('keypress', function (ev) { return onKeyDown(ev, tab); });
    // chanel1.push({
    //   key,
    //   time
    // // });
    // console.log(chanel1)
}
function playChanel(event, chanelNumber, chanelTab) {
    if (chanelNumber.innerHTML !== '||') {
        chanelNumber.innerHTML = '||';
    }
    else {
        chanelNumber.innerHTML = '►';
    }
    onPlayChannel(chanelTab, event.target.id);
}
function onPlayChannel(chanel, event) {
    var prevTime = 0;
    chanel.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () {
            console.log(chanel);
            switch (sound.key) {
                case "q":
                    playSound(boomAudio);
                    break;
                case "w":
                    playSound(clapAudio);
                    break;
                case "e":
                    playSound(hihatAudio);
                    break;
                case "r":
                    playSound(kickAudio);
                    break;
                case "t":
                    playSound(openhatAudio);
                    break;
                case "a":
                    playSound(rideAudio);
                    break;
                case "s":
                    playSound(snareAudio);
                    break;
                case "d":
                    playSound(tinkAudio);
                    break;
                case "f":
                    playSound(tomAudio);
                    break;
            }
            console.log(sound.key);
        }, timeout);
    });
}
// function :void {
//     // const key = ev.key;
//     // const time = ev.timeStamp;
//     // chanel1.push({
//     //     key,
//     //     time
//     // });
// }
// function playChannel(chanel : any):void{
//     let prevTime = 0;
//     chanel.forEach(sound =>{
//         const timeout = sound.time - prevTime;
//         setTimeout(() => {
//             switch (sound.key) {
//                 case "q":
//                     playSound(boomAudio);
//                   break;
//                 case "w":
//                     playSound(clapAudio);
//                   break;
//                 case "e":
//                     playSound(hihatAudio);
//                   break;
//                 case "r":
//                     playSound(kickAudio);
//                   break;
//                 case "t":
//                     playSound(openhatAudio);
//                   break;
//                 case "a":
//                     playSound(rideAudio);
//                   break;
//                 case "s":
//                     playSound(snareAudio);
//                   break;
//                 case "d":
//                     playSound(tinkAudio);
//                   break;
//                 case "f":
//                     playSound(tomAudio);
//                   break;
//               }
//             console.log(sound.key)
//         },timeout)
//     })
// }
function changeStyle(element) {
    if (element.parentElement.className === 'buttonEach') {
        element.parentElement.className = 'buttonOnclick';
        setTimeout(function () {
            element.parentElement.className = 'buttonEach';
        }, 300);
    }
    else {
        element.parentElement.className = 'buttonEach';
    }
}
