const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r')*2* Math.PI;
circle.setAttribute('stroke-dasharray',perimeter); 
let duration ;
const timer1 = new Timer(durationInput,startButton,pauseButton,{
    onStart(totalDuration){
        console.log('Timer started');
        duration = totalDuration ; 
    },
    onTick(timeRemaining){
        // console.log('timer just ticked down')
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining/duration - perimeter
        );

        // currentOffset = currentOffset - 1;
    },
    onComplete(){
        console.log('timer is completed')
    }
});

