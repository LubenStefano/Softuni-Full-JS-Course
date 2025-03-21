function areaOfFigures(input){
    let form = input[0];

    if(form === "square"){
      let a = Number(input[1]);
       area = a * a;
    } 
    
    else if(form === "rectangle"){
      let a = Number(input[1]);
      let b = Number(input[2]);
       area = a * b;
    } 
    
    else if(form === "circle"){
      let R = Number(input[1]);
       area = Math.PI * Math.pow(R, 2);
    } 
     
    else if(form === "triangle"){
      let a = Number(input[1]);
      let h = Number(input[2]);
     area = (a * h)/ 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["circle", "15"])