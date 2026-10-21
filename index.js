const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["cow", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["bass", "tuna"],
    },
  },
];
function gatAllName(data) {
  return data.map((names) => {
    return names.name;
  });
}
function getAllDate(data) {
  return data.map((date) => {
    let dateBorn = Number(date.birthday.slice(-4));

    if (dateBorn < 1990) {
      return date;
    }
  });
}

function getAllFoods(data){
    data.forEach(item,index => {
        let food_meat=item.favoriteFoods.meats
        let food_fish=item.favoriteFoods.fish
        
        let cnt_fish=0
        let cnt_meat=0
        let arrFood=[]
        for (let i = 0; i < food_fish.length; i++) {
            if(food_fish[i])
            
        }
    });
}

const dateBorn2 = getAllDate(data);
// console.log(dateBorn2);

const arr = gatAllName(data);
// console.log(arr)
