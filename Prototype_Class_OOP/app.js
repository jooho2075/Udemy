// 303.Prototype
String.prototype.yell = function() {
    return `${this.toUpperCase()}`
};

Array.prototype.pop = function() {
    return "sorry I want that element, I will never pop it up";
}