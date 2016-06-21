/**
* Artificial stupidity
Having the inhabitants of our world go extinct after a few minutes is
kind of depressing. To deal with this, we could try to create a smarter
plant eater.
There are several obvious problems with our herbivores. First, they
are terribly greedy, stuffing themselves with every plant they see until
they have wiped out the local plant life. Second, their randomized movement
(recall that the view.find method returns a random direction when
multiple directions match) causes them to stumble around ineffectively
and starve if there don’t happen to be any plants nearby. And finally,
they breed very fast, which makes the cycles between abundance and
famine quite intense.
Write a new critter type that tries to address one or more of these
points and substitute it for the old PlantEater type in the valley world.
See how it fares. Tweak it some more if necessary.
*/


var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var directions = {
    "n":  new Vector( 0, -1),
    "ne": new Vector( 1, -1),
    "e":  new Vector( 1,  0),
    "se": new Vector( 1,  1),
    "s":  new Vector( 0,  1),
    "sw": new Vector(-1,  1),
    "w":  new Vector(-1,  0),
    "nw": new Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function charFromElement(element) {
    if (element == null)
        return " ";
    else
        return element.originChar;
}

function elementFromChar(legend, ch) {
    if (ch == " ")
        return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function  Wall(){};

var world = new World(plan, {"#": Wall,
    "o": BouncingCritter});
console.log(world.toString());

function dirPlus(dir, n) {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
}



var valley = new LifelikeWorld(
    ["############################",
        "#####                 ######",
        "##   ***                **##",
        "#   *##**         **  O  *##",
        "#    ***     O    ##**    *#",
        "#       O         ##***    #",
        "#                 ##**     #",
        "#   O       #*             #",
        "#*          #**       O    #",
        "#***        ##**    O    **#",
        "##****     ###***       *###",
        "############################"],
    {"#": Wall,
        "O": PlantEater,
        "*": Plant}
);



