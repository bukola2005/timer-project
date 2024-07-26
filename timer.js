
class Timer{
    constructor(durationInput,startButton,pauseButton ,callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        // .bind(this) can point to an instance of the class 
      this.startButton.addEventListener('click',this.start);
      this.pauseButton.addEventListener('click',this.pause);
    }

    start = () =>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalID = setInterval(this.tick,20);
    };
    tick = () =>{
        // console.log('tick');
        // old way of wirting it
        // const timeRemaining = parseFloat(this.durationInput.value);
        // this.durationInput.value = timeRemainting - 1;
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete(); 
            }
        }else{
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    };
    get timeRemaining(){
        return  parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }

    pause = () =>{
        clearInterval(this.intervalID); 
    };
}
 