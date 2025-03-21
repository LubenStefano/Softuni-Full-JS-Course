function bombNumbers(arr, bomb) {
    let specNum = bomb[0];
    let radius = bomb[1];
    let sum = 0;
    let i = arr.indexOf(specNum);

    while (i > -1) {
        if (arr[i] === specNum) {
            let start = i - radius;
            let toDelete = radius * 2 + 1;

            if (start < 0) {
                start = 0;
                toDelete =  radius + i + 1;
            }

            let newArr = arr.splice(start, toDelete);
            i = arr.indexOf(specNum);
        }
    }

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }

    console.log(sum);
}