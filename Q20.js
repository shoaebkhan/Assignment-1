//Task 20
var listOfRivers = ["Indus", "Chenab", "Sutlej", "Bias", "Ravi"];
// Create an array of heterogeneous elements
var entities = [
    { type: "mountain", name: "Mount Everest", elevation: 8848 },
    { type: "river", name: "Nile", length: 6650 },
    { type: "country", name: "USA", population: 331002651 },
    { type: "city", name: "Tokyo", population: 37797531 },
    { type: "language", name: "English", speakers: 1130000000 },
    // Add more elements as needed
];
// Print the heterogeneous list
entities.forEach(function (entity) {
    switch (entity.type) {
        case "mountain":
            console.log("".concat(entity.name, " (Mountain) - Elevation: ").concat(entity.elevation, " meters"));
            break;
        case "river":
            console.log("".concat(entity.name, " (River) - Length: ").concat(entity.length, " kilometers"));
            break;
        case "country":
            console.log("".concat(entity.name, " (Country) - Population: ").concat(entity.population));
            break;
        case "city":
            console.log("".concat(entity.name, " (City) - Population: ").concat(entity.population));
            break;
        case "language":
            console.log("".concat(entity.name, " (Language) - Speakers: ").concat(entity.speakers));
            break;
        default:
            console.log("Unknown entity type");
    }
});
