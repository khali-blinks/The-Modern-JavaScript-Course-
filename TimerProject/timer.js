class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);

    }
    start = () => {
        if (this.onStart){
            this.onStart();
        }
        this.tick();
        // this.interval is an instance property that stores the interval ID.
        // It ensures that the ID is accessible across all methods in the same instance of the Timer class.
        // Using const or let would restrict the scope of the interval ID to the start method, breaking the functionality of the pause method.
        this.interval = setInterval(this.tick,1000);       
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        if (this.timeRemaining <= 0){
            this.pause();
            if (this.onComplete){
                this.onComplete();
            }
        } else{
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick){
                this.onTick();
            }
        }       
    }
    // Getters and Setters can have the same name
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    // The setter function must accept an argument because it's responsible for updating a value.
    // The time argument represents the new value you want to set for this.timeRemaining.
    set timeRemaining(time){
        this.durationInput.value = time;
    }
}




