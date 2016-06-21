var SmartPlantEater = (function () {
    function SmartPlantEater() {
        PlantEater.call(this);
        this.counterEating = 0;
    }
    SmartPlantEater.prototype.act = function(view) {
        var space = view.find(" ");
        if (this.energy > 120 && space)
            return {type: "reproduce", direction: space};
        var plant = view.find("*");
        if (plant && this.energy < 125)
            if(this.counterEating === 0) {
                this.counterEating = 1;
                return {type: "eat", direction: plant};
            } else {
                this.counterEating = 0;
            }

        if (space)
            return {type: "move", direction: space};
    };

    return SmartPlantEater;
})();