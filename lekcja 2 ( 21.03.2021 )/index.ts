const chanel1: any[] = [];
const chanel2: any[] = [];
const chanel3: any[] = [];
const chanel4: any[] = [];

const boomAudio: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const hihatAudio: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
const kickAudio: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const openhatAudio: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const rideAudio: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const snareAudio: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const tinkAudio: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const tomAudio: HTMLAudioElement = document.querySelector('[data-sound="tom"]');

const playChanel1Btn: HTMLButtonElement = document.querySelector('#playChanel1');
const playChanel2Btn: HTMLButtonElement = document.querySelector('#playChanel2');
const playChanel3Btn: HTMLButtonElement = document.querySelector('#playChanel3');
const playChanel4Btn: HTMLButtonElement = document.querySelector('#playChanel4');

const recordChanel1Btn: HTMLButtonElement = document.querySelector('#recordChanel1');
const recordChanel2Btn: HTMLButtonElement = document.querySelector('#recordChanel2');
const recordChanel3Btn: HTMLButtonElement = document.querySelector('#recordChanel3');
const recordChanel4Btn: HTMLButtonElement = document.querySelector('#recordChanel4');

document.body.addEventListener('keypress',(ev) => onKeyDown(ev, null));
playChanel1Btn.addEventListener('click', (ev) => playChanel(ev, playChanel1Btn, chanel1));
playChanel2Btn.addEventListener('click', (ev) => playChanel(ev, playChanel2Btn, chanel2));
playChanel3Btn.addEventListener('click', (ev) => playChanel(ev, playChanel3Btn, chanel3));
playChanel4Btn.addEventListener('click', (ev) => playChanel(ev, playChanel4Btn, chanel4));

recordChanel1Btn.addEventListener('click',(ev) => recordChanel(ev, recordChanel1Btn, chanel1));
recordChanel2Btn.addEventListener('click',(ev) => recordChanel(ev, recordChanel2Btn, chanel2));
recordChanel3Btn.addEventListener('click',(ev) => recordChanel(ev, recordChanel3Btn, chanel3));
recordChanel4Btn.addEventListener('click',(ev) => recordChanel(ev, recordChanel4Btn, chanel4));



function onKeyDown(ev: KeyboardEvent, chanelTab: any): void {
    const key = ev.key;
    const time = ev.timeStamp;
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
        key,
        time
      });
      console.log(chanelTab)
      console.log('--------------')
      console.log(chanel1)
      console.log(chanel2)
      console.log(chanel3)
      console.log('--------------')

}


function playSound(instrument : HTMLAudioElement){
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
function recordChanel(ev: any, chanelNumber:any, tab:any): void {
  if (chanelNumber.style.color !== 'red'){
    chanelNumber.style.color ='red'
  }else{
    chanelNumber.style.color = 'black'
  }

  document.body.addEventListener('keypress',(ev) => onKeyDown(ev, tab));

}

function playChanel(event: any, chanelNumber: any, chanelTab: any) {
  if (chanelNumber.innerHTML !== '||'){
    chanelNumber.innerHTML ='||'
  }else{
    chanelNumber.innerHTML = '►'
  }
  onPlayChannel(chanelTab, event.target.id);
}

function onPlayChannel(chanel:any, event:any) {
  let prevTime = 0;
  chanel.forEach(sound => {
      const timeout = sound.time - prevTime;
      setTimeout(() => {
        console.log(chanel)
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
          console.log(sound.key)
   
      },timeout)
      
  })
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
function changeStyle(element : HTMLElement){
  if (element.parentElement.className === 'buttonEach' ){
    element.parentElement.className = 'buttonOnclick'
    setTimeout(() => {
      element.parentElement.className = 'buttonEach'
    }, 300);
  }
  else{
    element.parentElement.className = 'buttonEach'

  }
}