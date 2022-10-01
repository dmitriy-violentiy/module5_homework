let map = new Map([
   ["audi", "white"],
   ["bmw", "black"],
   ["kia", "red"]
])

for (let auto of map.entries()) {
   console.log(`Ключ - ${auto[0]}, значение - ${auto[1]}`);
}