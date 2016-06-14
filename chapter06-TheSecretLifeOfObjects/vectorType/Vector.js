var Vector = (function () {

    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }

    Vector.prototype.plus = function (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    };

    Vector.prototype.minus = function (vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    };

    Vector.prototype.length = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    return Vector;
})();
