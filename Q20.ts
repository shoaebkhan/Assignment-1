//Task 20

let listOfRivers=["Indus","Chenab","Sutlej","Bias","Ravi"];
// Define types for different entities
type Mountain = {
    type: "mountain";
    name: string;
    elevation: number;
  };
  
  type River = {
    type: "river";
    name: string;
    length: number;
  };
  
  type Country = {
    type: "country";
    name: string;
    population: number;
  };
  
  type City = {
    type: "city";
    name: string;
    population: number;
  };
  
  type Language = {
    type: "language";
    name: string;
    speakers: number;
  };

  // Define a union type for the heterogeneous list
  type Entity = Mountain | River | Country | City | Language;
  
  // Create an array of heterogeneous elements
  const entities: Entity[] = [
    { type: "mountain", name: "Mount Everest", elevation: 8848 },
    { type: "river", name: "Nile", length: 6650 },
    { type: "country", name: "USA", population: 331002651 },
    { type: "city", name: "Tokyo", population: 37797531 },
    { type: "language", name: "English", speakers: 1130000000 },
    // Add more elements as needed
  ];
  
  // Print the heterogeneous list
  entities.forEach(entity => {
    switch (entity.type) {
      case "mountain":
        console.log(`${entity.name} (Mountain) - Elevation: ${entity.elevation} meters`);
        break;
      case "river":
        console.log(`${entity.name} (River) - Length: ${entity.length} kilometers`);
        break;
      case "country":
        console.log(`${entity.name} (Country) - Population: ${entity.population}`);
        break;
      case "city":
        console.log(`${entity.name} (City) - Population: ${entity.population}`);
        break;
      case "language":
        console.log(`${entity.name} (Language) - Speakers: ${entity.speakers}`);
        break;
      default:
        console.log("Unknown entity type");
    }
  });
  