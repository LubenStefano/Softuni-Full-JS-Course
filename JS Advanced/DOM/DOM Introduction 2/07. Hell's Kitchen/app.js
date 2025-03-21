function solve() {
   const input = document.getElementById('input').value;
   const restaurants = JSON.parse(input);

   const restaurantData = {};

   for (let i = 0; i < restaurants.length; i++) {
      const restaurantInfo = restaurants[i].split(' - ');
      const restaurantName = restaurantInfo[0];
      const workersData = restaurantInfo[1].split(', ');

      if (!restaurantData.hasOwnProperty(restaurantName)) {
         restaurantData[restaurantName] = {
            workers: [],
            avgSalary: 0,
            bestSalary: 0
         };
      }

      for (let j = 0; j < workersData.length; j++) {
         const workerInfo = workersData[j].split(' ');
         const workerName = workerInfo[0];
         const workerSalary = Number(workerInfo[1]);

         restaurantData[restaurantName].workers.push({ name: workerName, salary: workerSalary });

         if (workerSalary > restaurantData[restaurantName].bestSalary) {
            restaurantData[restaurantName].bestSalary = workerSalary;
         }

         restaurantData[restaurantName].avgSalary += workerSalary;
      }
   }

   let bestRestaurantName = '';
   let bestRestaurantAvgSalary = 0;
   let bestRestaurantBestSalary = 0;

   for (const restaurantName in restaurantData) {
      const avgSalary = restaurantData[restaurantName].avgSalary / restaurantData[restaurantName].workers.length;

      if (avgSalary > bestRestaurantAvgSalary) {
         bestRestaurantName = restaurantName;
         bestRestaurantAvgSalary = avgSalary;
         bestRestaurantBestSalary = restaurantData[restaurantName].bestSalary;
      }
   }

   const bestRestaurant = restaurantData[bestRestaurantName];
   const sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

   const outputElement = document.getElementById('bestRestaurant');
   outputElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantBestSalary.toFixed(2)}`;

   const workersElement = document.getElementById('workers');
   workersElement.textContent = sortedWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
}