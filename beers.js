const beers = [
  {
    brewery_id: '1',
    beer: 'Fat Tire',
    style: 'Amber Ale',
    abv: '5.2',
    ibu: '22'
  },
  {
    brewery_id: '1',
    beer: 'Tripple',
    style: 'Belgian Style Ale',
    abv: '8.5',
    ibu: '43'
  },
  {
    brewery_id: '1',
    beer: 'The Hemperor',
    style: 'HPA - Hemp Pale Ale',
    abv: '7.0',
    ibu: '55'
  },
  {
    brewery_id: '1',
    beer: 'Mountain Time',
    style: 'Lager',
    abv: '4.4',
    ibu: null
  },
  {
    brewery_id: '1',
    beer: 'Voodoo Ranger Juicy Haze',
    style: 'IPA',
    abv: '7.5',
    ibu: '42'
  },
  {
    brewery_id: '2',
    beer: 'Rose for Days',
    style: 'Rose-Style Ale',
    abv: '6.0',
    ibu: null
  },
  {
    brewery_id: '2',
    beer: 'G\'Night',
    style: 'American Imperial Red Ale',
    abv: '8.7',
    ibu: '60'
  },
  {
    brewery_id: '2',
    beer: 'Mama\'s Little Yella Pils',
    style: 'German-Style Pilsner',
    abv: '4.7',
    ibu: '33'
  },
  {
    brewery_id: '3',
    beer: 'Da Shootz',
    style: 'American Pilsner',
    abv: '4.0',
    ibu: '25'
  },
  {
    brewery_id: '3',
    beer: 'Wowza!',
    style: 'Lo-Cal Hazy Pale Ale',
    abv: '4.0',
    ibu: null
  },
  {
    brewery_id: '3',
    beer: 'Inversion',
    style: 'IPA',
    abv: '6.8',
    ibu: '65'
  },
  {
    brewery_id: '4',
    beer: 'Rocky Mountain Oyster Stout',
    style: 'Stout',
    abv: '7.2',
    ibu: '52'
  },
  {
    brewery_id: '4',
    beer: 'Nug Life',
    style: 'Dry-Hopped American IPA',
    abv: '6.6',
    ibu: '47'
  },
  {
    brewery_id: '4',
    beer: 'Monk-y Business',
    style: 'Belgian Tripel Pilsner',
    abv: '10.0',
    ibu: '35'
  },
  {
    brewery_id: '4',
    beer: 'Wixa Weiss',
    style: 'Bavarian Wheat',
    abv: '5.3',
    ibu: '12'
  },
  {
    brewery_id: '5',
    beer: 'Hatch Green Chili Ale',
    style: 'Blone Chili Ale'
    abv: '5.3',
    ibu: null
  },
  {
    brewery_id: '5',
    beer: 'Dam Hazey IPA',
    style: 'New England Style Hybrid IPA',
    abv: '6.2',
    ibu: null
  },
  {
    brewery_id: '5',
    beer: 'Paradise Pilsner',
    style: 'German Lager',
    abv: '5.0',
    ibu: null
  },
  {
    brewery_id: '5',
    beer: 'Farmhouse Blond',
    style: 'Blond Belgian Ale',
    abv: '5.4',
    ibu: null
  },
  {
    brewery_id: '6',
    beer: 'Agave Wheat',
    style: 'Unfiltered Wheat Ale',
    abv: '4.4',
    ibu: '13'
  },
  {
    brewery_id: '6',
    beer: 'Avalanche Ale',
    style: 'Amber Ale',
    abv: '5.0',
    ibu: '19'
  },
  {
    brewery_id: '6',
    beer: 'Lucky U',
    style: 'IPA',
    abv: '5.7',
    ibu: '68'
  },
  {
    brewery_id: '6',
    beer: 'Mango Mosaic',
    style: 'Pale Ale',
    abv: '5.5',
    ibu: '29'
  },
  {
    brewery_id: '6',
    beer: 'Nitro Vanilla Porter',
    style: 'Nitrogenated Vanilla Porter'
    abv: '5.4',
    ibu: '16'
  },
  {
    brewery_id: '6',
    beer: 'Snow Glare Hoppy Wheat',
    style: 'Wheat Ale',
    abv: '6.0',
    ibu: '23'
  },
  {
    brewery_id: 7,
    beer: 'Belgian White',
    style: 'Belgian-Style Wheat Ale',
    abv: 5.4,
    ibu: 9
  },
  {
    brewery_id: 7,
    beer: 'Iced Coffee Blonde',
    style: 'Blond-Colored Wheat Ale',
    abv: 5.4,
    ibu: 12
  },
  {
    brewery_id: 7,
    beer: 'Mango Wheat',
    style: 'Fruited Wheat',
    abv: 5.4,
    ibu: 19
  },
  {
    brewery_id: 7,
    beer: 'Summer Honey Wheat',
    style: 'Honey Wheat',
    abv: 5.2,
    ibu: 15
  },
  {
    brewery_id: 8,
    beer: 'Denver Pale Ale',
    style: 'American Pale Ale',
    abv: 5.0,
    ibu: null
  },
  {
    brewery_id: '8',
    beer: 'Velvet Yeti',
    style: 'Nitro Stout',
    abv: 5.0,
    ibu: null
  },
  {
    brewery_id: 8,
    beer: 'Samurai',
    style: 'Rice Ale',
    abv: 5.5,
    ibu: null
  },
  {
    brewery_id: 8,
    beer: 'Claymore',
    style: 'Scotch Ale',
    abv: 7.7,
    ibu: null
  },
  {
    brewery_id: 9,
    beer: 'Colorado Wheat',
    style: 'Wheat Ale',
    abv: 5.1,
    ibu: null
  },
  {
    brewery_id: 9,
    beer: 'Four Corners Pale Ale',
    style: 'Pale Ale',
    abv: 6.0,
    ibu: null
  },
  {
    brewery_id: 10,
    beer: 'Whiskey Widow',
    style: 'Imperial Porter',
    abv: 7.7,
    ibu: 28
  },
  {
    brewery_id: 10,
    beer: 'Trifecta Berry Sour',
    style: 'Sour Ale',
    abv: 6,
    ibu: 4
  },
  {
    brewery_id: 10,
    beer: 'White Tiger',
    style: 'IPA',
    abv: 6.6,
    ibu: 35
  },
  {
    brewery_id: 10,
    beer: 'Purple Rain Boysenberry Wheat',
    style: 'Fruited Wheat',
    abv: 4.8,
    ibu: 15
  },
  {
    brewery_id: 11,
    beer: 'Pink Vapor Stew',
    style: 'Sour',
    abv: 5.1,
    ibu: 20
  },
  {
    brewery_id: 11,
    beer: 'Steel Toe Stout',
    style: 'English Cream Stout',
    abv: 5.5,
    ibu: 16
  },
  {
    brewery_id: 12,
    beer: 'Colorado Kolsch',
    style: 'German Kolsch',
    abv: 4.8,
    ibu: 16
  },
  {
    brewery_id: 12,
    beer: 'One Wit Wonder',
    style: 'Belgian White Ale',
    abv: 4.8,
    ibu: 11
  },
  {
    brewery_id: 12,
    beer: 'Lizard Head Red',
    style: 'Medium-Bodied Brew',
    abv: 5.6,
    ibu: 26
  },
  {
    brewery_id: 12,
    beer: 'Third Eye P.A.',
    style: 'Pale Ale',
    abv: 6.0,
    ibu: 65.1
  },
  {
    brewery_id: 12,
    beer: 'Prescribed Burn',
    style: 'German Ale with Habanero, Poplano, and Hatch Green Chilies',
    abv: 4.7,
    ibu: 24
  },
  {
    brewery_id: 13,
    beer: 'Drop Top',
    style: 'Amber Ale',
    abv: 5.3,
    ibu: 18
  },
  {
    brewery_id: 13,
    beer: 'Juicy Sunrise IPA',
    style: 'IPA',
    abv: 6.8,
    ibu: 73
  },
  {
    brewery_id: 13,
    beer: 'Hefe',
    style: 'American-Style Hefeweizen',
    abv: 4.9,
    ibu: 26 
  },
  {
    brewery_id: 14,
    beer: 'Drumroll APA',
    style: 'American Pale Ale',
    abv: 5.3,
    ibu: 42
  },
  {
    brewery_id: 14,
    beer: 'Sippin\' Pretty',
    style: 'Fruited Sour',
    abv: 4.5,
    ibu: null
  },
  {
    brewery_id: 14,
    beer: '90 Shilling',
    style: 'Amber Ale',
    abv: 5.3,
    ibu: 32
  },
  {
    brewery_id: 15,
    beer: 'Big Wave',
    style: 'Golden Ale',
    abv: 4.4,
    ibu: 21
  },
  {
    brewery_id: 15,
    beer: 'Gold Cliff IPA',
    style: 'IPA',
    abv: 7.2,
    ibu: 50
  },
  {
    brewery_id: 15,
    beer: 'Kanaha Blonde Ale',
    style: 'Blond Ale',
    abv: 4.2,
    ibu: 18
  },
  {
    brewery_id: 16,
    beer: 'White Rascal',
    style: 'Belgian Style White Ale',
    abv: 5.6,
    ibu: null
  },
  {
    brewery_id: 16,
    beer: 'The Reverend',
    style: 'Belgian-Style Quadrupel Ale',
    abv: 10.0,
    ibu: null
  },
  {
    brewery_id: 16,
    beer: 'Old Jubilation Ale',
    style: 'English Strong Ale',
    abv: 8.3,
    ibu: null
  },
  {
    brewery_id: 17,
    beer: 'Redacted',
    style: 'Rye IPA',
    abv: 7.0,
    ibu: 60
  },
  {
    brewery_id: 17,
    beer: 'Free to Roam',
    style: 'APA',
    abv: 5.4,
    ibu: 47
  },
  {
    brewery_id: 17,
    beer: 'Blood Moon Ryesin',
    style: 'Imperial Red Ale with Blood Orange',
    abv: 7.5,
    ibu: 65
  },
  {
    brewery_id: 17,
    beer: 'Endpoint',
    style: 'Triple IPA',
    abv: 11.0,
    ibu: 100
  },
  {
    brewery_id: 17,
    beer: 'Evolet',
    style: 'Beer/Wine Hybrid',
    abv: 7.6,
    ibu: 20
  },
  {
    brewery_id: 17,
    beer: 'Strawberry Cream Ale',
    style: 'Cream Ale',
    abv: 5.4,
    ibu: 18
  },
  {
    brewery_id: 18,
    beer: 'Seven Doors',
    style: 'Grisette',
    abv: 6.1,
    ibu: null
  },
  {
    brewery_id: 18,
    beer: 'Scorn',
    style: 'Pale Ale',
    abv: 5.3,
    ibu: null
  },
  {
    brewery_id: 19,
    beer: 'Princess Yum Yum Raspberry Kolsch',
    style: 'Fruited Kolsch',
    abv: 4.8,
    ibu: null
  },
  {
    brewery_id: 19,
    beer: 'Juicy Freak',
    style: 'IPA',
    abv: 6.5,
    ibu: null
  },
  {
    brewery_id: 20,
    beer: 'Dunkel',
    style: 'German-Style Dark Lager',
    abv: 5.6,
    ibu: 24
  },
  {
    brewery_id: 20,
    beer: 'Weissbier',
    style: 'Bavarian-Style Wheat Ale',
    abv: 5.0,
    ibu: 12
  },
  {
    brewery_id: 20,
    beer: 'Maibock',
    style: 'Bock-Style Lager',
    abv: 6.8,
    ibu: 31
  },
  {
    brewery_id: 20,
    beer: 'Altbier',
    style: 'German-Style Amber Ale',
    abv: 5.1,
    ibu: 37
  },
  {
    brewery_id: 21,
    beer: 'Torpedo',
    style: 'Extra IPA',
    abv: 7.2,
    ibu: 65
  },
  {
    brewery_id: 21,
    beer: 'Narwhal',
    style: 'Imperial Stout',
    abv: 10.2,
    ibu: 60
  },
  {
    brewery_id: 21,
    beer: 'Old Chico',
    style: 'Crystal Wheat',
    abv: 4.8,
    ibu: 26
  },
  {
    brewery_id: 22,
    beer: 'SMaSH Galaxy',
    style: 'American Double IPA',
    abv: 8.5,
    ibu: 86
  },
  {
    brewery_id: 22,
    beer: 'Free Ride Pale Ale',
    style: 'American Pale Ale',
    abv: 5.3,
    ibu: 40
  },
  {
    brewery_id: 22,
    beer: 'Hopothermia',
    style: 'American Double IPA',
    abv: 8.5,
    ibu: 70
  },
  {
    brewery_id: 23,
    beer: 'Milk Stout',
    style: 'Sweet Stout',
    abv: 6.0,
    ibu: 25
  },
  {
    brewery_id: 23,
    beer: 'Flamingo Dreams Nitro',
    style: 'Blond Ale',
    abv: 4.7,
    ibu: 11
  },
  {
    brewery_id: 23,
    beer: 'Wheels Gose \'Round',
    style: 'Lemon and Raspberry Gose',
    abv: 4.4,
    ibu: 14
  },
  {
    brewery_id: 24,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 24,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  {
    brewery_id: 21,
    beer: '',
    style: '',
    abv: ,
    ibu: 
  },
  
]