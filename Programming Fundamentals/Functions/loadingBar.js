function loadingBar(num) {
  let loading = "";
  for (let i = 0; i < num; i += 10) {
    loading += "%";
  }
  for (let j = 100; j > num; j -= 10) {
    loading += ".";
  }
  if (num !== 100) {
    console.log(`${num}% [${loading}]`);
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(`[${loading}]`);
  }
}
loadingBar(96);
