function getInfo() {
fetchInfo();
  async function fetchInfo() {
    const stopId = document.getElementById("stopId").value;
    const stopNameDiv = document.getElementById("stopName");
    const buses = document.getElementById("buses");

    try {
      const url = `http://localhost:3030/jsonstore/bus/businfo/` + stopId;
      const response = await fetch(url);
      const data = await response.json();
      clear();
      render(data);
    } catch {
      clear();
      stopNameDiv.textContent = "Error";
    }
    function clear() {
      buses.textContent = "";
    }
    function render(data) {
      stopNameDiv.textContent = data.name;

      const busesInfo = Object.entries(data.buses);
      for (const [bus, minutes] of busesInfo) {
        const li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
        buses.append(li);
      }
    }
  }
}
