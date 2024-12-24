// 303.Prototype
/*
String.prototype.yell = function() {
    return `${this.toUpperCase()}`
};

Array.prototype.pop = function() {
    return "sorry I want that element, I will never pop it up";
}
*/

// 305.Factory function
/*
function hex(r,g,b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`;
}

function makeColor(r,g,b) { // 이 함수가 객체를 만들어 주는 역할 
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150);
//hex(255, 100, 25); // 16진수 색상을 다시 가져올 것
*/

// 306.생성자 함수(Constructor function)
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}

Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b} ${a})`;
}

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);