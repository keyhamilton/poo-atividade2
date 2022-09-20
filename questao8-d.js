"use strict";
// Typescript program
var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        if (this.volume <= 10) {
            this.volume += 1;
        }
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        if (this.volume > 0) {
            this.volume -= 1;
        }
    };
    ControleDeAudio.prototype.getVolume = function () {
        return this.volume;
    };
    return ControleDeAudio;
}());
var audio = new ControleDeAudio();
console.log(audio.getVolume());
while (audio.volume < 10) {
    audio.aumentarVolume();
}
console.log(audio.getVolume());
while (audio.volume > 0) {
    audio.diminuirVolume();
}
console.log(audio.getVolume());
