module.exports = function(a, b) {
    var x = a.x - b.x, y = a.y - b.y;
    return Math.sqrt((x * x) + (y * y));
};
