interface ICronometro {
  currentTime: number;
  initialTime: number;
  isRunning: boolean;

  start(): void;
  stop(): void;
  reset(): void;
  getCurrentTime(): number;
  formatedTime(): string;
}

class Cronometro implements ICronometro {
  initialTime: number;
  currentTime: number;
  isRunning: boolean;

  constructor () {
    this.initialTime = 0;
    this.currentTime = 0;
    this.isRunning = false;
  }

  start(): void {
    this.isRunning = true;
  }

  stop(): void {
    this.isRunning = false;
  }

  reset(): void {
    this.currentTime = this.initialTime;
  }
  
  getCurrentTime(): number {
    return this.currentTime;
  }

  configTime(): void {
    this.currentTime++;
  }
 
  getIsRunning(): boolean {
    return this.isRunning;
  }

  formatedTime(): string {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    return `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0': '') + seconds}`;
  }
}