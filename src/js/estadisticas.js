"use strict";
class Estadisticas {
    constructor() {
        this.estadisticas = [];
    }
    add(time) {
        this.estadisticas.push(time);
    }
    reset() {
        this.estadisticas = [];
    }
}
