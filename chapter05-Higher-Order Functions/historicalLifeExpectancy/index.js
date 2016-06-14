/**
 * Historical life expectancy
 When we looked up all the people in our data set that lived more than
 90 years, only the latest generation in the data came out. Let’s take a
 closer look at that phenomenon.
 Compute and output the average age of the people in the ancestry data
 set per century. A person is assigned to a century by taking their year
 of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
 died / 100).
 For bonus points, write a function groupBy that abstracts the grouping
 operation. It should accept as arguments an array and a function that
 computes the group for an element in the array and returns an object
 that maps group names to arrays of group members.
 */
(function () {
    var ancestry = JSON.parse(ANCESTRY_FILE);
    var ancestryByCenturies = {};

    ancestry.forEach(function(person){
        var century = Math.ceil(person.died / 100);
        if(!ancestryByCenturies.hasOwnProperty(String(century))) {
            ancestryByCenturies[century] = [];
        }
        ancestryByCenturies[century].push(person);
    });

    for(var century in ancestryByCenturies) {
        ancestryByCenturies[century] = ancestryByCenturies[century].reduce(function(res, person){
            return res + (person.died - person.born);
        }, 0) / ancestryByCenturies[century].length;
    }

    console.log(ancestryByCenturies);
})();