"use strict";
var Hero = (function () {
    function Hero(id, name, power, alertEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alertEgo = alertEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
