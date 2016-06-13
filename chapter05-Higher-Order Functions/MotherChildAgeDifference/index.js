/**
 * Mother-child age difference
 Using the example data set from this chapter, compute the average age
 difference between mothers and children (the age of the mother when
 the child is born). You can use the average function defined earlier in
 this chapter.
 Note that not all the mothers mentioned in the data are themselves
 present in the array. The byName object, which makes it easy to find a
 person’s object from their name, might be useful here.
 */

// → 31.2

(function () {
    var ancestry = JSON.parse(ANCESTRY_FILE);

    function findMotherAge(person, mother) {
        return person.born - mother.born;
    }

    function findAllWomen(array) {
        var women = {};
        array.forEach(function (person) {
            if(person.sex === 'f') {
                women[person.name] = person;
            }
        });
        return women;
    };

    function averageAgeMothers(array, women) {
        var length = array.length;
        var sumAge = array.reduce(function (res, person) {

            if(women.hasOwnProperty(person.mother)) {
                return res + findMotherAge(person, women[person.mother]);
            }

            length -= 1;
            return res;
        }, 0);

        return sumAge / length;
    };

    function age(obj) {
        return obj.died - obj.born;
    }

    console.log(averageAgeMothers(ancestry, findAllWomen(ancestry)));
})();