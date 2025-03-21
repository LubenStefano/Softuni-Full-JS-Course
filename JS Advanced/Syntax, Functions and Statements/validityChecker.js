function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x, y) {
        return Math.sqrt(x * x + y * y);
    }

    function isDistanceValid(x, y) {
        return Number.isInteger(calculateDistance(x, y));
    }

    function formatPoint(x, y) {
        return `{${x}, ${y}}`;
    }

    const point1 = formatPoint(x1, y1);
    const point2 = formatPoint(x2, y2);

    const distance1 = isDistanceValid(x1, y1) ? 'valid' : 'invalid';
    const distance2 = isDistanceValid(x2, y2) ? 'valid' : 'invalid';
    const distance3 = isDistanceValid(x1 - x2, y1 - y2) ? 'valid' : 'invalid';

    console.log(`${point1} to {0, 0} is ${distance1}`);
    console.log(`${point2} to {0, 0} is ${distance2}`);
    console.log(`${point1} to ${point2} is ${distance3}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);