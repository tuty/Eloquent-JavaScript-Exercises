var BouncingCritter = (function () {

    var directionNames = "n ne e se s sw w nw".split(" ");

    function randomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function BouncingCritter() {
        this.direction = randomElement(directionNames);
    };

    BouncingCritter.prototype.act = function(view) {
        if (view.look(this.direction) != " ")
            this.direction = view.find(" ") || "s";
        return {type: "move", direction: this.direction};
    };

    return BouncingCritter;
})();