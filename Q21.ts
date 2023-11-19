type Mountains = {
    type: "mountain";
    name: string;
    elevation: number;
  };
  
  type Rivers = {
    type: "river";
    name: string;
    length: number;
  };
  
  type Countries = {
    type: "country";
    name: string;
    population: number;
  };
  
  type Cities = {
    type: "city";
    name: string;
    population: number;
  };
let things ={
    mountains:  { type: "mountain", name: "Mount Everest", elevation: 8848 },
    rivers:  { type: "river", name: "Nile", length: 6650 },
    countries:{ type: "country", name: "USA", population: 331002651 },
    cities:{ type: "city", name: "Tokyo", population: 37797531 }
};
console.log(things.mountains.name);
console.log(things.mountains.type);