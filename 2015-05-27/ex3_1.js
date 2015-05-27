/**
   Implement Math.min by our own.
 */

function min(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    a = Number(a);
    b = Number(b);
    if (a <= b) {
        return a;
    } else if (a > b) {
        return b;
    }
}
