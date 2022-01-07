interface IEstadisticas {
  estadisticas: string[];

  add(time: string): void;
  reset(): void;
}

class Estadisticas implements IEstadisticas{
  estadisticas: string[];

  constructor () {
    this.estadisticas = [];
  }

  add(time: string): void {
    this.estadisticas.push(time);
  }

  reset(): void {
    this.estadisticas = [];
  }
}