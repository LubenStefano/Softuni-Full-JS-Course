function sortByTwoCriteria(arr) {
    let sorted = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sorted.join("\n"));
}
sortByTwoCriteria(["alpha", "beta", "gamma"]);
