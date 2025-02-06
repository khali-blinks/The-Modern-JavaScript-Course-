function hex(r,g,b){
    return '#' + ((1 << 24) +(r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r},${g},${b})`
}

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.hex = function (){
        const {r,g,b} = this;
        return ('#' + ((1 << 24) +(r << 16) + (g << 8) + b).toString(16).slice(1));
    };
    color.rgb = function (){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
    }
    return color;
}

// Constructor Functions
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
}
Color.prototype.hex = function(){
    const {r,g,b} = this;
    return ('#' + ((1 << 24) +(r << 16) + (g << 8) + b).toString(16).slice(1));
}

const color1 = new Color(50,50,65)

// Creating Classes
class Color {
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    rgb(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
    }
    hex(){
        const {r,g,b} = this;
        return ('#' + ((1 << 24) +(r << 16) + (g << 8) + b).toString(16).slice(1));
    }
}

const red = new Color (100,241,254);