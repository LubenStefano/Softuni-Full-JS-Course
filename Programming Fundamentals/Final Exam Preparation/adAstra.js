function adAstra(string){
    let pattern = /(\|{1}|#{1})(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let products = [];
    let calories = 0
    let match = pattern.exec(string);
    while(match){
        let item = match.groups.item;
        let date = match.groups.date;
        let kcal = match.groups.kcal;

        calories+= Number(kcal)

        let data = `Item: ${item}, Best before: ${date}, Nutrition: ${kcal}`;
        products.push(data);

        match = pattern.exec(string);
    }
    console.log(`You have food to last you for: ${Math.floor((calories/2000))} days!`);
    console.log(products.join(" \n"));
}
adAstra("#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|");
