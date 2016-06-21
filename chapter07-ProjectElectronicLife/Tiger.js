var Tiger = (function () {
    function Tiger() {
        this.energy = 120;
        this.counterEating = 0;
    }
    Tiger.prototype.act = function(view) {
        var space = view.find(" ");
        var plant = view.find('*');
        var victim = view.find("O");

        if (this.energy > 240 && space)
            return {type: "reproduce", direction: space};

        if (victim && this.energy < 250)
            if(this.counterEating === 0) {
                this.counterEating = 1;
                return {type: "eat", direction: victim};
            } else {
                this.counterEating = 0;
            }

        if (space)
            return {type: "move", direction: space};


    };

    return Tiger;
})();