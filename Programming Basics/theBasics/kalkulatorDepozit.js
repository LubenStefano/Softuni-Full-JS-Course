function depozit(input){
depoziranaSuma = Number(input[0]);
srokNaDepozit = Number(input[1]);
godishenLihvenProcent = Number(input[2]) /100;
sum = depoziranaSuma + srokNaDepozit * ((depoziranaSuma * godishenLihvenProcent) / 12 ) ;
console.log(sum)
}
depozit(["200 ", "3 ", "5.7 "])