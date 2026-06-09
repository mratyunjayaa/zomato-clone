const restaurent = [];
const images = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
const rest_name = [
  "The Velvet Fork",
  "Saffron & Sage",
  "Midnight Basil",
  "Urban Tandoor",
  "The Golden Spoon",
  "Spice Symphony",
  "Olive & Ember",
  "Royal Platter",
  "The Hungry Peacock",
  "Crimson Kitchen",
  "Azure Bistro",
  "The Rustic Table",
  "Noir Lounge",
  "Copper Leaf",
  "The Grand Feast",
  "Lotus & Lime",
  "Mosaic Dining",
  "Velvet Flame",
  "The Artisan Plate",
  "Aura Kitchen & Bar"
];
const foodTypes = ["Indian", "Punjabi", "South Indian", "Chinese", "Italian", "Mexican", "Thai", "Japanese", "Korean", "Continental"];
const locations = [
  "Chandigarh",
  "Mohali",
  "Panchkula",
  "Kharar",
  "Zirakpur",
  "Dera Bassi",
  "Kurali",
  "Ropar",
  "Rajpura",
  "Ambala"
];


for (let i = 0 ; i< 100 ; i++)
{
    const obj = {};
    obj["image"]= images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj['rating']= Math.floor(Math.random()*5+1);
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"]= (Math.floor(Math.random()*2401+100));
    obj["location"] = locations[Math.floor(Math.random()*10)];
    obj["distance_from_customer_house"]= (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcohal"] = Math.random() > 0.7;
    obj["restaurent_open_time"]= Math.floor(Math.random()*24);
    obj["restaurent_close_time"]= (obj["restaurent_open_time"]+12)%24;

    restaurent.push(obj);
}

const fs = require("fs");
const jsonData = JSON.stringify(restaurent,null,2);

fs.writeFileSync("arraydata.json", jsonData);

console.log("JSON file created successfully!");