function repainting(input) {

    let predpazenNailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hoursMaistori = Number(input[3]);

    let nailonCena = (predpazenNailon + 2) * 1.50;
    let paintCena = (paint + paint * 10 / 100) * 14.50;
    let razreditelCena = razreditel * 5.00;

    let sum = nailonCena + paintCena + razreditelCena + 0.40;
    let maistoriCena = (sum * 30 / 100) * hoursMaistori;
    let totalSum = sum + maistoriCena;
    console.log(totalSum)
}
repainting(["10", "11", "4", "8"])