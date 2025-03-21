function modernTimesOfHashtag(string) {
  string
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1)
    .forEach((element) => {
      element = element.slice(1);
      let pattern = /^[A-Za-z]+$/
      if(pattern.test(element)){
       console.log(element);  
      }
    });
}
modernTimesOfHashtag(
  "Nowadays everyone uses # to tag a #special word in #social1Media"
);