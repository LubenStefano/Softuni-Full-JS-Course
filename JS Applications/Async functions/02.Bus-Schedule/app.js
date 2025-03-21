function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoSpan = document.querySelector("span");

  let currentBus = "depot";
  async function getBuses(id) {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${id}`
      );
      const data = await response.json();
      return data;
    } catch {
      infoSpan.textContent = `Error`;
      return;
    }
  }
  async function depart() {
    const bus = await getBuses(currentBus);
    infoSpan.textContent = `Next stop ${bus.name}`;

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  async function arrive() {
    const bus = await getBuses(currentBus);
    infoSpan.textContent = `Arriving at ${bus.name}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
    currentBus = bus.next;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
