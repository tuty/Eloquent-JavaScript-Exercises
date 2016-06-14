/**
 * Every and then some
 Arrays also come with the standard methods every and some. Both take a
 predicate function that, when called with an array element as argument,
 returns true or false. Just like && returns a true value only when the
 expressions on both sides are true, every returns true only when the
 predicate returns true for all elements of the array. Similarly, some returns
 true as soon as the predicate returns true for any of the elements. They
 do not process more elements than necessary—for example, if some finds
 that the predicate holds for the first element of the array, it will not look
 at the values after that.
 Write two functions, every and some, that behave like these methods,
 except that they take the array as their first argument rather than being
 a method.
 */
(function () {

    console.log(every([NaN, NaN, NaN], isNaN));
// → true
    console.log(every([NaN, NaN, 4], isNaN));
// → false
    console.log(some([NaN, 3, 4], isNaN));
// → true
    console.log(some([2, 3, 4], isNaN));
// → false

    function every(array, func) {

        var result = true;

        array.forEach(function (element) {
            if(!func(element)) {
             result = false;
            };
        });

        return result;
    }

    function some(array, func) {
        var result = false;

        array.forEach(function (element) {
            if(func(element)) {
                result = true;
            };
        });

        return result;
    }
})();