function carFctory(order) {
  let result = {
    model: order.model,
    engine: undefined,
    carriage: undefined,
    wheels: undefined,
  };
  let engines = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 },
  };
  if (order.power <= 90) {
    result.engine = engines.smallEngine;
  } else if (order.power <= 120) {
    result.engine = engines.normalEngine;
  } else {
    result.engine = engines.monsterEngine;
  }
  if (order.carriage === "hatchback") {
    result.carriage = { type: "hatchback", color: order.color };
  } else {
    result.carriage = { type: "coupe", color: order.color };
  }
  if (order.wheelsize % 2 === 0) {
    order.wheelsize--;
  }
  result.wheels = Array(4).fill(order.wheelsize);
  return result
}
carFctory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
