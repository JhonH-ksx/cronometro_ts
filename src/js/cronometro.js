"use strict";
class Cronometro {
    constructor() {
        this.initialTime = 0;
        this.currentTime = 0;
        this.isRunning = false;
    }
    start() {
        this.isRunning = true;
    }
    stop() {
        this.isRunning = false;
    }
    reset() {
        this.currentTime = this.initialTime;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    configTime() {
        this.currentTime++;
    }
    getIsRunning() {
        return this.isRunning;
    }
    formatedTime() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime - minutes * 60;
        return `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
    }
}
