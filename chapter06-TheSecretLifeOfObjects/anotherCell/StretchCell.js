var StretchCell = (function () {

    function StretchCell(inner, width, height) {
        var width = inner.minWidth() > width ? inner.minWidth() : width;
        var height = inner.minHeight() > height ? inner.minHeight() : height;

        TextCell.call(this, inner.draw(width, height).join('\n'));
    }

    StretchCell.prototype = Object.create(TextCell.prototype);
    StretchCell.prototype.constructor = StretchCell;

    return StretchCell;
})();