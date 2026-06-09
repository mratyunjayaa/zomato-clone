const restaurants= [
  {
    "image": "tenth",
    "name": "Aura Kitchen & Bar",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 1816,
    "location": "Chandigarh",
    "distance_from_customer_house": "9.5",
    "offers": 16,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "sixth",
    "name": "Spice Symphony",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": 121,
    "location": "Ambala",
    "distance_from_customer_house": "7.4",
    "offers": 1,
    "alcohal": false,
    "restaurent_open_time": 23,
    "restaurent_close_time": 11
  },
  {
    "image": "sixth",
    "name": "Saffron & Sage",
    "rating": 5,
    "food_type": "Mexican",
    "price_for_two": 2071,
    "location": "Zirakpur",
    "distance_from_customer_house": "11.0",
    "offers": 14,
    "alcohal": true,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "first",
    "name": "Olive & Ember",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 1727,
    "location": "Zirakpur",
    "distance_from_customer_house": "7.9",
    "offers": 2,
    "alcohal": false,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "seventh",
    "name": "Aura Kitchen & Bar",
    "rating": 1,
    "food_type": "Chinese",
    "price_for_two": 1334,
    "location": "Kharar",
    "distance_from_customer_house": "6.4",
    "offers": 10,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "second",
    "name": "Azure Bistro",
    "rating": 2,
    "food_type": "Punjabi",
    "price_for_two": 254,
    "location": "Dera Bassi",
    "distance_from_customer_house": "8.6",
    "offers": 13,
    "alcohal": false,
    "restaurent_open_time": 4,
    "restaurent_close_time": 16
  },
  {
    "image": "first",
    "name": "The Rustic Table",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 1465,
    "location": "Ropar",
    "distance_from_customer_house": "4.0",
    "offers": 3,
    "alcohal": true,
    "restaurent_open_time": 11,
    "restaurent_close_time": 23
  },
  {
    "image": "seventh",
    "name": "The Rustic Table",
    "rating": 3,
    "food_type": "South Indian",
    "price_for_two": 1103,
    "location": "Ambala",
    "distance_from_customer_house": "5.7",
    "offers": 23,
    "alcohal": false,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "ninth",
    "name": "Spice Symphony",
    "rating": 4,
    "food_type": "South Indian",
    "price_for_two": 2372,
    "location": "Mohali",
    "distance_from_customer_house": "10.3",
    "offers": 1,
    "alcohal": false,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "eighth",
    "name": "The Golden Spoon",
    "rating": 5,
    "food_type": "Korean",
    "price_for_two": 2365,
    "location": "Kurali",
    "distance_from_customer_house": "4.1",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 11,
    "restaurent_close_time": 23
  },
  {
    "image": "eighth",
    "name": "The Hungry Peacock",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 1414,
    "location": "Ambala",
    "distance_from_customer_house": "9.2",
    "offers": 5,
    "alcohal": false,
    "restaurent_open_time": 22,
    "restaurent_close_time": 10
  },
  {
    "image": "ninth",
    "name": "The Hungry Peacock",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 1741,
    "location": "Kurali",
    "distance_from_customer_house": "6.1",
    "offers": 18,
    "alcohal": true,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "seventh",
    "name": "The Artisan Plate",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 868,
    "location": "Kurali",
    "distance_from_customer_house": "8.6",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 23,
    "restaurent_close_time": 11
  },
  {
    "image": "tenth",
    "name": "Copper Leaf",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 2483,
    "location": "Mohali",
    "distance_from_customer_house": "1.2",
    "offers": 16,
    "alcohal": false,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "tenth",
    "name": "Azure Bistro",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 586,
    "location": "Ambala",
    "distance_from_customer_house": "10.1",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "fourth",
    "name": "The Rustic Table",
    "rating": 1,
    "food_type": "South Indian",
    "price_for_two": 1051,
    "location": "Ropar",
    "distance_from_customer_house": "3.9",
    "offers": 29,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "seventh",
    "name": "Royal Platter",
    "rating": 1,
    "food_type": "Indian",
    "price_for_two": 819,
    "location": "Dera Bassi",
    "distance_from_customer_house": "9.8",
    "offers": 7,
    "alcohal": false,
    "restaurent_open_time": 15,
    "restaurent_close_time": 3
  },
  {
    "image": "sixth",
    "name": "The Velvet Fork",
    "rating": 4,
    "food_type": "Korean",
    "price_for_two": 936,
    "location": "Ropar",
    "distance_from_customer_house": "1.9",
    "offers": 16,
    "alcohal": false,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "third",
    "name": "Urban Tandoor",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 2287,
    "location": "Ropar",
    "distance_from_customer_house": "5.3",
    "offers": 26,
    "alcohal": true,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "second",
    "name": "The Artisan Plate",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 2024,
    "location": "Mohali",
    "distance_from_customer_house": "10.6",
    "offers": 16,
    "alcohal": false,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "seventh",
    "name": "Noir Lounge",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 171,
    "location": "Ropar",
    "distance_from_customer_house": "2.4",
    "offers": 13,
    "alcohal": false,
    "restaurent_open_time": 18,
    "restaurent_close_time": 6
  },
  {
    "image": "fourth",
    "name": "Urban Tandoor",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 1410,
    "location": "Dera Bassi",
    "distance_from_customer_house": "1.8",
    "offers": 11,
    "alcohal": false,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "second",
    "name": "Olive & Ember",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": 1095,
    "location": "Zirakpur",
    "distance_from_customer_house": "10.0",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "seventh",
    "name": "The Golden Spoon",
    "rating": 2,
    "food_type": "South Indian",
    "price_for_two": 1332,
    "location": "Mohali",
    "distance_from_customer_house": "1.6",
    "offers": 20,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "tenth",
    "name": "Noir Lounge",
    "rating": 5,
    "food_type": "Continental",
    "price_for_two": 782,
    "location": "Chandigarh",
    "distance_from_customer_house": "1.5",
    "offers": 13,
    "alcohal": false,
    "restaurent_open_time": 3,
    "restaurent_close_time": 15
  },
  {
    "image": "second",
    "name": "Noir Lounge",
    "rating": 2,
    "food_type": "Punjabi",
    "price_for_two": 302,
    "location": "Zirakpur",
    "distance_from_customer_house": "3.2",
    "offers": 28,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "fifth",
    "name": "Copper Leaf",
    "rating": 3,
    "food_type": "Korean",
    "price_for_two": 1668,
    "location": "Zirakpur",
    "distance_from_customer_house": "5.0",
    "offers": 6,
    "alcohal": false,
    "restaurent_open_time": 8,
    "restaurent_close_time": 20
  },
  {
    "image": "tenth",
    "name": "Olive & Ember",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 1470,
    "location": "Mohali",
    "distance_from_customer_house": "7.4",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 10,
    "restaurent_close_time": 22
  },
  {
    "image": "tenth",
    "name": "Midnight Basil",
    "rating": 4,
    "food_type": "Korean",
    "price_for_two": 1244,
    "location": "Rajpura",
    "distance_from_customer_house": "10.7",
    "offers": 20,
    "alcohal": false,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "fifth",
    "name": "The Hungry Peacock",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 2471,
    "location": "Panchkula",
    "distance_from_customer_house": "8.6",
    "offers": 25,
    "alcohal": false,
    "restaurent_open_time": 22,
    "restaurent_close_time": 10
  },
  {
    "image": "first",
    "name": "The Velvet Fork",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 815,
    "location": "Rajpura",
    "distance_from_customer_house": "9.0",
    "offers": 18,
    "alcohal": true,
    "restaurent_open_time": 2,
    "restaurent_close_time": 14
  },
  {
    "image": "fifth",
    "name": "Olive & Ember",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 2415,
    "location": "Ropar",
    "distance_from_customer_house": "3.0",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 15,
    "restaurent_close_time": 3
  },
  {
    "image": "second",
    "name": "Velvet Flame",
    "rating": 3,
    "food_type": "Japanese",
    "price_for_two": 1668,
    "location": "Panchkula",
    "distance_from_customer_house": "7.5",
    "offers": 6,
    "alcohal": false,
    "restaurent_open_time": 10,
    "restaurent_close_time": 22
  },
  {
    "image": "eighth",
    "name": "Aura Kitchen & Bar",
    "rating": 5,
    "food_type": "Mexican",
    "price_for_two": 880,
    "location": "Ropar",
    "distance_from_customer_house": "6.8",
    "offers": 12,
    "alcohal": false,
    "restaurent_open_time": 2,
    "restaurent_close_time": 14
  },
  {
    "image": "tenth",
    "name": "Lotus & Lime",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 1401,
    "location": "Mohali",
    "distance_from_customer_house": "4.6",
    "offers": 15,
    "alcohal": true,
    "restaurent_open_time": 19,
    "restaurent_close_time": 7
  },
  {
    "image": "sixth",
    "name": "The Grand Feast",
    "rating": 5,
    "food_type": "Korean",
    "price_for_two": 2414,
    "location": "Chandigarh",
    "distance_from_customer_house": "7.5",
    "offers": 3,
    "alcohal": true,
    "restaurent_open_time": 2,
    "restaurent_close_time": 14
  },
  {
    "image": "fourth",
    "name": "Crimson Kitchen",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 269,
    "location": "Rajpura",
    "distance_from_customer_house": "10.2",
    "offers": 19,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "third",
    "name": "Mosaic Dining",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 2082,
    "location": "Chandigarh",
    "distance_from_customer_house": "10.7",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 13,
    "restaurent_close_time": 1
  },
  {
    "image": "fifth",
    "name": "Saffron & Sage",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 870,
    "location": "Dera Bassi",
    "distance_from_customer_house": "8.9",
    "offers": 14,
    "alcohal": false,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "sixth",
    "name": "Mosaic Dining",
    "rating": 3,
    "food_type": "South Indian",
    "price_for_two": 2282,
    "location": "Mohali",
    "distance_from_customer_house": "9.2",
    "offers": 20,
    "alcohal": false,
    "restaurent_open_time": 6,
    "restaurent_close_time": 18
  },
  {
    "image": "second",
    "name": "Lotus & Lime",
    "rating": 2,
    "food_type": "Punjabi",
    "price_for_two": 1405,
    "location": "Kurali",
    "distance_from_customer_house": "4.6",
    "offers": 2,
    "alcohal": false,
    "restaurent_open_time": 8,
    "restaurent_close_time": 20
  },
  {
    "image": "third",
    "name": "Mosaic Dining",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 675,
    "location": "Dera Bassi",
    "distance_from_customer_house": "3.2",
    "offers": 12,
    "alcohal": false,
    "restaurent_open_time": 0,
    "restaurent_close_time": 12
  },
  {
    "image": "fifth",
    "name": "The Velvet Fork",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": 1410,
    "location": "Rajpura",
    "distance_from_customer_house": "1.8",
    "offers": 10,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "third",
    "name": "The Velvet Fork",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 2147,
    "location": "Kurali",
    "distance_from_customer_house": "3.1",
    "offers": 26,
    "alcohal": true,
    "restaurent_open_time": 15,
    "restaurent_close_time": 3
  },
  {
    "image": "seventh",
    "name": "Noir Lounge",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 2050,
    "location": "Rajpura",
    "distance_from_customer_house": "1.4",
    "offers": 21,
    "alcohal": true,
    "restaurent_open_time": 15,
    "restaurent_close_time": 3
  },
  {
    "image": "fifth",
    "name": "Spice Symphony",
    "rating": 3,
    "food_type": "Punjabi",
    "price_for_two": 1728,
    "location": "Kurali",
    "distance_from_customer_house": "8.3",
    "offers": 2,
    "alcohal": false,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "fifth",
    "name": "The Rustic Table",
    "rating": 4,
    "food_type": "Continental",
    "price_for_two": 2182,
    "location": "Ambala",
    "distance_from_customer_house": "10.2",
    "offers": 6,
    "alcohal": false,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "first",
    "name": "The Artisan Plate",
    "rating": 3,
    "food_type": "South Indian",
    "price_for_two": 1675,
    "location": "Rajpura",
    "distance_from_customer_house": "8.2",
    "offers": 10,
    "alcohal": false,
    "restaurent_open_time": 6,
    "restaurent_close_time": 18
  },
  {
    "image": "tenth",
    "name": "The Rustic Table",
    "rating": 5,
    "food_type": "Punjabi",
    "price_for_two": 1346,
    "location": "Panchkula",
    "distance_from_customer_house": "6.8",
    "offers": 22,
    "alcohal": true,
    "restaurent_open_time": 5,
    "restaurent_close_time": 17
  },
  {
    "image": "tenth",
    "name": "Crimson Kitchen",
    "rating": 1,
    "food_type": "South Indian",
    "price_for_two": 1507,
    "location": "Zirakpur",
    "distance_from_customer_house": "7.1",
    "offers": 3,
    "alcohal": false,
    "restaurent_open_time": 4,
    "restaurent_close_time": 16
  },
  {
    "image": "first",
    "name": "Noir Lounge",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": 403,
    "location": "Ambala",
    "distance_from_customer_house": "8.8",
    "offers": 6,
    "alcohal": true,
    "restaurent_open_time": 0,
    "restaurent_close_time": 12
  },
  {
    "image": "fourth",
    "name": "Saffron & Sage",
    "rating": 4,
    "food_type": "Continental",
    "price_for_two": 2340,
    "location": "Dera Bassi",
    "distance_from_customer_house": "9.4",
    "offers": 29,
    "alcohal": false,
    "restaurent_open_time": 3,
    "restaurent_close_time": 15
  },
  {
    "image": "sixth",
    "name": "Azure Bistro",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 442,
    "location": "Dera Bassi",
    "distance_from_customer_house": "5.1",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "second",
    "name": "Olive & Ember",
    "rating": 3,
    "food_type": "Korean",
    "price_for_two": 1682,
    "location": "Chandigarh",
    "distance_from_customer_house": "6.2",
    "offers": 23,
    "alcohal": true,
    "restaurent_open_time": 23,
    "restaurent_close_time": 11
  },
  {
    "image": "sixth",
    "name": "The Artisan Plate",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 777,
    "location": "Zirakpur",
    "distance_from_customer_house": "2.4",
    "offers": 1,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "ninth",
    "name": "The Hungry Peacock",
    "rating": 2,
    "food_type": "Continental",
    "price_for_two": 683,
    "location": "Dera Bassi",
    "distance_from_customer_house": "5.0",
    "offers": 22,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "eighth",
    "name": "Royal Platter",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 1462,
    "location": "Ambala",
    "distance_from_customer_house": "2.3",
    "offers": 8,
    "alcohal": false,
    "restaurent_open_time": 11,
    "restaurent_close_time": 23
  },
  {
    "image": "seventh",
    "name": "Mosaic Dining",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 1467,
    "location": "Ambala",
    "distance_from_customer_house": "6.3",
    "offers": 21,
    "alcohal": false,
    "restaurent_open_time": 5,
    "restaurent_close_time": 17
  },
  {
    "image": "ninth",
    "name": "Copper Leaf",
    "rating": 5,
    "food_type": "South Indian",
    "price_for_two": 576,
    "location": "Kharar",
    "distance_from_customer_house": "10.9",
    "offers": 23,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "sixth",
    "name": "Midnight Basil",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 1571,
    "location": "Kharar",
    "distance_from_customer_house": "9.5",
    "offers": 25,
    "alcohal": false,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "fifth",
    "name": "The Grand Feast",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 345,
    "location": "Kharar",
    "distance_from_customer_house": "7.5",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 0,
    "restaurent_close_time": 12
  },
  {
    "image": "second",
    "name": "Saffron & Sage",
    "rating": 3,
    "food_type": "Continental",
    "price_for_two": 571,
    "location": "Rajpura",
    "distance_from_customer_house": "4.6",
    "offers": 18,
    "alcohal": false,
    "restaurent_open_time": 23,
    "restaurent_close_time": 11
  },
  {
    "image": "third",
    "name": "The Hungry Peacock",
    "rating": 3,
    "food_type": "South Indian",
    "price_for_two": 160,
    "location": "Mohali",
    "distance_from_customer_house": "5.2",
    "offers": 2,
    "alcohal": false,
    "restaurent_open_time": 21,
    "restaurent_close_time": 9
  },
  {
    "image": "fourth",
    "name": "Midnight Basil",
    "rating": 4,
    "food_type": "Punjabi",
    "price_for_two": 1933,
    "location": "Rajpura",
    "distance_from_customer_house": "10.5",
    "offers": 19,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "second",
    "name": "Lotus & Lime",
    "rating": 1,
    "food_type": "Punjabi",
    "price_for_two": 1445,
    "location": "Rajpura",
    "distance_from_customer_house": "3.4",
    "offers": 29,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "fifth",
    "name": "Midnight Basil",
    "rating": 5,
    "food_type": "South Indian",
    "price_for_two": 2106,
    "location": "Zirakpur",
    "distance_from_customer_house": "10.0",
    "offers": 28,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "tenth",
    "name": "Mosaic Dining",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 2387,
    "location": "Kurali",
    "distance_from_customer_house": "8.0",
    "offers": 16,
    "alcohal": false,
    "restaurent_open_time": 3,
    "restaurent_close_time": 15
  },
  {
    "image": "eighth",
    "name": "Copper Leaf",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 742,
    "location": "Ambala",
    "distance_from_customer_house": "2.2",
    "offers": 25,
    "alcohal": true,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "third",
    "name": "Velvet Flame",
    "rating": 4,
    "food_type": "Continental",
    "price_for_two": 995,
    "location": "Chandigarh",
    "distance_from_customer_house": "9.0",
    "offers": 18,
    "alcohal": false,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "tenth",
    "name": "Aura Kitchen & Bar",
    "rating": 2,
    "food_type": "Chinese",
    "price_for_two": 2115,
    "location": "Kharar",
    "distance_from_customer_house": "6.5",
    "offers": 25,
    "alcohal": false,
    "restaurent_open_time": 20,
    "restaurent_close_time": 8
  },
  {
    "image": "sixth",
    "name": "The Grand Feast",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 1027,
    "location": "Ropar",
    "distance_from_customer_house": "9.4",
    "offers": 6,
    "alcohal": false,
    "restaurent_open_time": 18,
    "restaurent_close_time": 6
  },
  {
    "image": "first",
    "name": "Velvet Flame",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 1537,
    "location": "Zirakpur",
    "distance_from_customer_house": "1.7",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 2,
    "restaurent_close_time": 14
  },
  {
    "image": "seventh",
    "name": "Copper Leaf",
    "rating": 2,
    "food_type": "Punjabi",
    "price_for_two": 667,
    "location": "Zirakpur",
    "distance_from_customer_house": "7.1",
    "offers": 14,
    "alcohal": false,
    "restaurent_open_time": 8,
    "restaurent_close_time": 20
  },
  {
    "image": "seventh",
    "name": "Midnight Basil",
    "rating": 5,
    "food_type": "Mexican",
    "price_for_two": 959,
    "location": "Ambala",
    "distance_from_customer_house": "1.5",
    "offers": 17,
    "alcohal": false,
    "restaurent_open_time": 5,
    "restaurent_close_time": 17
  },
  {
    "image": "seventh",
    "name": "Azure Bistro",
    "rating": 5,
    "food_type": "Punjabi",
    "price_for_two": 984,
    "location": "Mohali",
    "distance_from_customer_house": "6.4",
    "offers": 12,
    "alcohal": false,
    "restaurent_open_time": 9,
    "restaurent_close_time": 21
  },
  {
    "image": "eighth",
    "name": "Aura Kitchen & Bar",
    "rating": 5,
    "food_type": "South Indian",
    "price_for_two": 2407,
    "location": "Kharar",
    "distance_from_customer_house": "6.7",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 4,
    "restaurent_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Lotus & Lime",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 1758,
    "location": "Kharar",
    "distance_from_customer_house": "4.1",
    "offers": 29,
    "alcohal": true,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "tenth",
    "name": "Saffron & Sage",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 1194,
    "location": "Panchkula",
    "distance_from_customer_house": "4.2",
    "offers": 27,
    "alcohal": false,
    "restaurent_open_time": 23,
    "restaurent_close_time": 11
  },
  {
    "image": "tenth",
    "name": "The Velvet Fork",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 2420,
    "location": "Ropar",
    "distance_from_customer_house": "7.0",
    "offers": 24,
    "alcohal": true,
    "restaurent_open_time": 5,
    "restaurent_close_time": 17
  },
  {
    "image": "second",
    "name": "Mosaic Dining",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 675,
    "location": "Rajpura",
    "distance_from_customer_house": "7.4",
    "offers": 0,
    "alcohal": false,
    "restaurent_open_time": 16,
    "restaurent_close_time": 4
  },
  {
    "image": "seventh",
    "name": "The Artisan Plate",
    "rating": 2,
    "food_type": "Italian",
    "price_for_two": 2497,
    "location": "Ropar",
    "distance_from_customer_house": "9.7",
    "offers": 22,
    "alcohal": false,
    "restaurent_open_time": 0,
    "restaurent_close_time": 12
  },
  {
    "image": "fifth",
    "name": "Crimson Kitchen",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": 225,
    "location": "Kharar",
    "distance_from_customer_house": "10.0",
    "offers": 21,
    "alcohal": true,
    "restaurent_open_time": 10,
    "restaurent_close_time": 22
  },
  {
    "image": "eighth",
    "name": "Royal Platter",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 2134,
    "location": "Ambala",
    "distance_from_customer_house": "5.4",
    "offers": 3,
    "alcohal": true,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "seventh",
    "name": "The Golden Spoon",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 1302,
    "location": "Mohali",
    "distance_from_customer_house": "1.8",
    "offers": 4,
    "alcohal": true,
    "restaurent_open_time": 4,
    "restaurent_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Saffron & Sage",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 176,
    "location": "Kurali",
    "distance_from_customer_house": "2.4",
    "offers": 23,
    "alcohal": true,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "ninth",
    "name": "Urban Tandoor",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 1347,
    "location": "Mohali",
    "distance_from_customer_house": "7.8",
    "offers": 9,
    "alcohal": true,
    "restaurent_open_time": 0,
    "restaurent_close_time": 12
  },
  {
    "image": "second",
    "name": "Aura Kitchen & Bar",
    "rating": 5,
    "food_type": "Continental",
    "price_for_two": 898,
    "location": "Panchkula",
    "distance_from_customer_house": "7.6",
    "offers": 15,
    "alcohal": false,
    "restaurent_open_time": 19,
    "restaurent_close_time": 7
  },
  {
    "image": "fourth",
    "name": "Spice Symphony",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 1208,
    "location": "Ropar",
    "distance_from_customer_house": "10.6",
    "offers": 20,
    "alcohal": true,
    "restaurent_open_time": 17,
    "restaurent_close_time": 5
  },
  {
    "image": "fourth",
    "name": "Copper Leaf",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 1056,
    "location": "Mohali",
    "distance_from_customer_house": "2.2",
    "offers": 21,
    "alcohal": true,
    "restaurent_open_time": 6,
    "restaurent_close_time": 18
  },
  {
    "image": "fifth",
    "name": "Mosaic Dining",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 1867,
    "location": "Kurali",
    "distance_from_customer_house": "1.1",
    "offers": 0,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "eighth",
    "name": "Azure Bistro",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 473,
    "location": "Kurali",
    "distance_from_customer_house": "10.2",
    "offers": 19,
    "alcohal": false,
    "restaurent_open_time": 9,
    "restaurent_close_time": 21
  },
  {
    "image": "first",
    "name": "The Artisan Plate",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 331,
    "location": "Rajpura",
    "distance_from_customer_house": "8.6",
    "offers": 29,
    "alcohal": false,
    "restaurent_open_time": 7,
    "restaurent_close_time": 19
  },
  {
    "image": "fourth",
    "name": "The Artisan Plate",
    "rating": 2,
    "food_type": "Continental",
    "price_for_two": 1145,
    "location": "Chandigarh",
    "distance_from_customer_house": "9.1",
    "offers": 26,
    "alcohal": false,
    "restaurent_open_time": 15,
    "restaurent_close_time": 3
  },
  {
    "image": "ninth",
    "name": "The Artisan Plate",
    "rating": 4,
    "food_type": "Continental",
    "price_for_two": 351,
    "location": "Chandigarh",
    "distance_from_customer_house": "1.3",
    "offers": 11,
    "alcohal": false,
    "restaurent_open_time": 1,
    "restaurent_close_time": 13
  },
  {
    "image": "fourth",
    "name": "Spice Symphony",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 2251,
    "location": "Kharar",
    "distance_from_customer_house": "3.9",
    "offers": 6,
    "alcohal": false,
    "restaurent_open_time": 10,
    "restaurent_close_time": 22
  },
  {
    "image": "seventh",
    "name": "Midnight Basil",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": 1722,
    "location": "Mohali",
    "distance_from_customer_house": "9.8",
    "offers": 14,
    "alcohal": false,
    "restaurent_open_time": 12,
    "restaurent_close_time": 0
  },
  {
    "image": "eighth",
    "name": "Royal Platter",
    "rating": 3,
    "food_type": "Korean",
    "price_for_two": 805,
    "location": "Rajpura",
    "distance_from_customer_house": "4.8",
    "offers": 29,
    "alcohal": false,
    "restaurent_open_time": 4,
    "restaurent_close_time": 16
  },
  {
    "image": "second",
    "name": "Crimson Kitchen",
    "rating": 1,
    "food_type": "South Indian",
    "price_for_two": 1478,
    "location": "Ambala",
    "distance_from_customer_house": "6.9",
    "offers": 0,
    "alcohal": false,
    "restaurent_open_time": 14,
    "restaurent_close_time": 2
  },
  {
    "image": "sixth",
    "name": "Noir Lounge",
    "rating": 3,
    "food_type": "Continental",
    "price_for_two": 535,
    "location": "Ambala",
    "distance_from_customer_house": "1.2",
    "offers": 23,
    "alcohal": true,
    "restaurent_open_time": 19,
    "restaurent_close_time": 7
  },
  {
    "image": "fifth",
    "name": "Azure Bistro",
    "rating": 3,
    "food_type": "Punjabi",
    "price_for_two": 1798,
    "location": "Ropar",
    "distance_from_customer_house": "7.2",
    "offers": 12,
    "alcohal": true,
    "restaurent_open_time": 11,
    "restaurent_close_time": 23
  }
]

function getrestaurent(restaurants) {

    const root = document.getElementById("root");

    if (!root) {
        console.error("Root element not found");
        return;
    }

    root.innerHTML = "";

    restaurants.forEach((element) => {

        const card = document.createElement("div");
        card.className = "card";

        // IMAGE
        const image = document.createElement("img");
        image.src = image.src = `images/${element.image}.jpg`;
        image.alt = element.name;

        image.onerror = () => {
            image.src = "images/default.jpg";
        };

        // CONTENT
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        // HEADER
        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";

        const h3 = document.createElement("h3");
        h3.textContent = element.name;

        const rating = document.createElement("span");
        rating.className = "rating";
        rating.textContent = `⭐ ${element.rating}`;

        cardHeader.append(h3, rating);

        // FOOTER
        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";

        const foodType = document.createElement("span");
        foodType.textContent = element.food_type;

        const price = document.createElement("span");
        price.textContent = `₹${element.price_for_two} for two`;

        cardFooter.append(foodType, price);

        // LOCATION
        const cardLocation = document.createElement("div");
        cardLocation.className = "card-location";

        const location = document.createElement("span");
        location.textContent = element.location;

        const distance = document.createElement("span");
        distance.textContent = `${element.distance_from_customer_house} km`;

        cardLocation.append(location, distance);

        // APPEND
        cardContent.append(
            cardHeader,
            cardFooter,
            cardLocation
        );

        card.append(
            image,
            cardContent
        );

        root.appendChild(card);
    });
}
getrestaurent(restaurants);


document.getElementById("Alcohol").addEventListener('click',()=>{
 
    const result=restaurants.filter((obj)=>obj.alcohal);  
     document.getElementById('root').innerHTML ="";
     getrestaurent(result);
})

document.getElementById("Rating").addEventListener('click',()=>{
 
    const result=restaurants.filter((obj)=>obj.rating > 4.5);  
     document.getElementById('root').innerHTML ="";
     getrestaurent(result);
})


const filterBtn = document.getElementById("Filters");
const popup = document.getElementById("filterPopup");

filterBtn.addEventListener("click", () => {
    popup.classList.toggle("hidden");
});

const applyFilter = document.getElementById("applyFilter");

applyFilter.addEventListener("click", () => {

    const selected = document.querySelector(
        'input[name="filterOption"]:checked'
    );

    if (!selected) {
        alert("Please select a filter");
        return;
    }

    let filteredRestaurants = [...restaurants];

    switch (selected.value) {

        case "rating":
            filteredRestaurants.sort(
                (a, b) => b.rating - a.rating
            );
            break;

        case "highToLow":
            filteredRestaurants.sort(
                (a, b) => b.price_for_two - a.price_for_two
            );
            break;

        case "lowToHigh":
            filteredRestaurants.sort(
                (a, b) => a.price_for_two - b.price_for_two
            );
            break;

        case "distance":
            filteredRestaurants.sort(
                (a, b) =>
                    parseFloat(a.distance_from_customer_house) -
                    parseFloat(b.distance_from_customer_house)
            );
            break;

        case "offers":
            filteredRestaurants.sort(
                (a, b) => b.offers - a.offers
            );
            break;
    }

    getrestaurent(filteredRestaurants);

    document
        .getElementById("filterPopup")
        .classList.add("hidden");
});


document.getElementById("Open")
.addEventListener("click", () => {

    const currentHour = new Date().getHours();

    const filtered = restaurants.filter(rest => {

        if(rest.restaurent_open_time < rest.restaurent_close_time){

            return currentHour >= rest.restaurent_open_time &&
                   currentHour < rest.restaurent_close_time;
        }

        return currentHour >= rest.restaurent_open_time ||
               currentHour < rest.restaurent_close_time;
    });

    getrestaurent(filtered);
});



document.getElementById("Offers")
.addEventListener("click", () => {

    const filtered = restaurants.filter(
        rest => rest.offers > 0
    );

    getrestaurent(filtered);
});


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", searchRestaurant);

function searchRestaurant(){

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    if(keyword === ""){
        getrestaurent(restaurants);
        return;
    }

    const filtered = restaurants.filter(rest =>

        rest.name.toLowerCase().includes(keyword) ||

        rest.location.toLowerCase().includes(keyword)

    );

    getrestaurent(filtered);
}

searchInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){
        searchRestaurant();
    }

});

const filtered = restaurants.filter(rest =>

    rest.name.toLowerCase().includes(keyword) ||

    rest.location.toLowerCase().includes(keyword) ||

    rest.food_type.toLowerCase().includes(keyword)

);
