function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentTicket = 0;
  let standartTicket = 0;
  let kidTicket = 0;

  while (command !== "Finish") {
    let movieName = command;
    let freeSeats = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;
    let soldTickets = 0;

    while (ticketType !== "End") {
      switch (ticketType) {
        case "standard":
          standartTicket++;
          break;
        case "kid":
          kidTicket++;
          break;
        case "student":
          studentTicket++;
          break;
      }
      soldTickets++;

      if (soldTickets >= freeSeats) {
        break;
      }

      ticketType = input[index];
      index++;
    }
    let percentage = (soldTickets / freeSeats) * 100;
    console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }
  let totalTickets = kidTicket + standartTicket + studentTicket;
  console.log(`Total tickets: ${totalTickets}`);

  let studentPercentage = (studentTicket / totalTickets) * 100;
  console.log(`${studentPercentage.toFixed(2)}% student tickets.`);

  let standardPercentage = (standartTicket / totalTickets) * 100;
  console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);

  let kidPercantage = (kidTicket / totalTickets) * 100;
  console.log(`${kidPercantage.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
