const breweriesData = [
  {
    name: 'New Belgium Brewery',
    yearEst: 1991,
    numLocations: 2,
    beers: 
      [{
        beer: 'Fat Tire',
        style: 'Amber Ale',
        abv: 5.2,
        ibu: 22
      },
      {
        beer: 'Tripple',
        style: 'Belgian Style Ale',
        abv: 8.5,
        ibu: 43
      },
      {
        beer: 'The Hemperor',
        style: 'HPA - Hemp Pale Ale',
        abv: 7.0,
        ibu: 55
      },
      {
        beer: 'Mountain Time',
        style: 'Lager',
        abv: 4.4,
        ibu: null
      },
      {
        beer: 'Voodoo Ranger Juicy Haze',
        style: 'IPA',
        abv: 7.5,
        ibu: 42
      }]
  },
  {
    name: 'Oskar Blues Brewery',
    yearEst: 1997,
    numLocations: 5,
    beers: 
      [{
        beer: 'Rose for Days',
        style: 'Rose-Style Ale',
        abv: 6.0,
        ibu: null
      },
      {
        beer: 'G\'Night',
        style: 'American Imperial Red Ale',
        abv: 8.7,
        ibu: 60
      },
      {
        beer: 'Mama\'s Little Yella Pils',
        style: 'German-Style Pilsner',
        abv: 4.7,
        ibu: 33
      }]
  },
  {
    name: 'Deschutes Brewery',
    yearEst: 1988,
    numLocations: 5,
    beers: 
      [{
        beer: 'Da Shootz',
        style: 'American Pilsner',
        abv: 4.0,
        ibu: 25
      },
      {
        beer: 'Wowza!',
        style: 'Lo-Cal Hazy Pale Ale',
        abv: 4.0,
        ibu: null
      },
      {
        beer: 'Inversion',
        style: 'IPA',
        abv: 6.8,
        ibu: 65
      }]
  },
  {
    name: 'Wynkoop Brewing Company',
    yearEst: 1988,
    numLocations: 1,
    breweryId: 5,
    beers: 
      [{
        beer: 'Rocky Mountain Oyster Stout',
        style: 'Stout',
        abv: 7.2,
        ibu: 52
      },
      {
        beer: 'Nug Life',
        style: 'Dry-Hopped American IPA',
        abv: 6.6,
        ibu: 47
      },
      {
        beer: 'Monk-y Business',
        style: 'Belgian Tripel Pilsner',
        abv: 10.0,
        ibu: 35
      },
      {
        beer: 'Wixa Weiss',
        style: 'Bavarian Wheat',
        abv: 5.3,
        ibu: 12
      }]
  },
  {
    name: 'Dillon Dam Brewery',
    yearEst: 1997,
    numLocations: 1,
    beers: 
      [{
        beer: 'Hatch Green Chili Ale',
        style: 'Blone Chili Ale',
        abv: 5.3,
        ibu: null
      },
      {
        beer: 'Dam Hazey IPA',
        style: 'New England Style Hybrid IPA',
        abv: 6.2,
        ibu: null
      },
      {
        beer: 'Paradise Pilsner',
        style: 'German Lager',
        abv: 5.0,
        ibu: null
      },
      {
        beer: 'Farmhouse Blonde',
        style: 'Blonde Belgian Ale',
        abv: 5.4,
        ibu: null
      }]
  },
  {
    name: 'Breckenridge Brewery',
    yearEst: 1990,
    numLocations: 2,
    beers: 
      [{
        beer: 'Agave Wheat',
        style: 'Unfiltered Wheat Ale',
        abv: 4.4,
        ibu: 13
      },
      {
        beer: 'Avalanche Ale',
        style: 'Amber Ale',
        abv: 5.0,
        ibu: 19
      },
      {
        beer: 'Lucky U',
        style: 'IPA',
        abv: 5.7,
        ibu: 68
      },
      {
        beer: 'Mango Mosaic',
        style: 'Pale Ale',
        abv: 5.5,
        ibu: 29
      },
      {
        beer: 'Nitro Vanilla Porter',
        style: 'Nitrogenated Vanilla Porter',
        abv: 5.4,
        ibu: 16
      },
      {
        beer: 'Snow Glare Hoppy Wheat',
        style: 'Wheat Ale',
        abv: 6.0,
        ibu: 23
      }]
  },
  {
    name: 'Blue Moon Brewing Company',
    yearEst: 1995,
    numLocations: 1,
    beers: 
      [{
        beer: 'Belgian White',
        style: 'Belgian-Style Wheat Ale',
        abv: 5.4,
        ibu: 9
      },
      {
        beer: 'Iced Coffee Blonde',
        style: 'Blonde-Colored Wheat Ale',
        abv: 5.4,
        ibu: 12
      },
      {
        beer: 'Mango Wheat',
        style: 'Fruited Wheat',
        abv: 5.4,
        ibu: 19
      },
      {
        beer: 'Summer Honey Wheat',
        style: 'Honey Wheat',
        abv: 5.2,
        ibu: 15
      }]
  },
  {
    name: 'Great Divide Brewing Company',
    yearEst: 1994,
    numLocations: 3,
    beers: 
      [{
        beer: 'Denver Pale Ale',
        style: 'American Pale Ale',
        abv: 5.0,
        ibu: null
      },
      {
        beer: 'Velvet Yeti',
        style: 'Nitro Stout',
        abv: 5.0,
        ibu: null
      },
      {
        beer: 'Samurai',
        style: 'Rice Ale',
        abv: 5.5,
        ibu: null
      },
      {
        beer: 'Claymore',
        style: 'Scotch Ale',
        abv: 7.7,
        ibu: null
      }]
  },
  {
    name: 'Durango Brewing Company',
    yearEst: 1990,
    numLocations: 1,
    beers: 
      [{
        beer: 'Colorado Wheat',
        style: 'Wheat Ale',
        abv: 5.1,
        ibu: null
      },
      {
        beer: 'Four Corners Pale Ale',
        style: 'Pale Ale',
        abv: 6.0,
        ibu: null
      }]
  },
  {
    name: 'McMenamins',
    yearEst: 1983,
    numLocations: 62,
    beers:
      [{
        beer: 'Whiskey Widow',
        style: 'Imperial Porter',
        abv: 7.7,
        ibu: 28
      },
      {
        beer: 'Trifecta Berry Sour',
        style: 'Sour Ale',
        abv: 6,
        ibu: 4
      },
      {
        beer: 'White Tiger',
        style: 'IPA',
        abv: 6.6,
        ibu: 35
      },
      {
        beer: 'Purple Rain Boysenberry Wheat',
        style: 'Fruited Wheat',
        abv: 4.8,
        ibu: 15
      }]
  },
  {
    name: 'SKA Brewing',
    yearEst: 1995,
    numLocations: 1,
    beers: 
      [{
        beer: 'Pink Vapor Stew',
        style: 'Sour',
        abv: 5.1,
        ibu: 20
      },
      {
        beer: 'Steel Toe Stout',
        style: 'English Cream Stout',
        abv: 5.5,
        ibu: 16
      }]
  },
  {
    name: 'Steamworks Brewing Company',
    yearEst: 1996,
    numLocations: 1,
    beers: 
      [{
        beer: 'Colorado Kolsch',
        style: 'German Kolsch',
        abv: 4.8,
        ibu: 16
      },
      {
        beer: 'One Wit Wonder',
        style: 'Belgian White Ale',
        abv: 4.8,
        ibu: 11
      },
      {
        beer: 'Lizard Head Red',
        style: 'Medium-Bodied Brew',
        abv: 5.6,
        ibu: 26
      },
      {
        beer: 'Third Eye P.A.',
        style: 'Pale Ale',
        abv: 6.0,
        ibu: 65.1
      },
      {
        beer: 'Prescribed Burn',
        style: 'German Ale with Habanero, Poplano, and Hatch Green Chilies',
        abv: 4.7,
        ibu: 24
      }]
  },
  {
    name: 'Widmer Brothers Brewing',
    yearEst: 1984,
    numLocations: 1,
    beers: 
      [{
        beer: 'Drop Top',
        style: 'Amber Ale',
        abv: 5.3,
        ibu: 18
      },
      {
        beer: 'Juicy Sunrise IPA',
        style: 'IPA',
        abv: 6.8,
        ibu: 73
      },
      {
        beer: 'Hefe',
        style: 'American-Style Hefeweizen',
        abv: 4.9,
        ibu: 26 
      }]
  },
  {
    name: 'Odell Brewing Company',
    yearEst: 1989,
    numLocations: 2,
    beers: 
      [{
        beer: 'Drumroll APA',
        style: 'American Pale Ale',
        abv: 5.3,
        ibu: 42
      },
      {
        beer: 'Sippin\' Pretty',
        style: 'Fruited Sour',
        abv: 4.5,
        ibu: null
      },
      {
        beer: '90 Shilling',
        style: 'Amber Ale',
        abv: 5.3,
        ibu: 32
      }]
  },
  {
    name: 'Kona Brewing Company',
    yearEst: 1994,
    numLocations: 2,
    beers: 
      [{
        beer: 'Big Wave',
        style: 'Golden Ale',
        abv: 4.4,
        ibu: 21
      },
      {
        beer: 'Gold Cliff IPA',
        style: 'IPA',
        abv: 7.2,
        ibu: 50
      },
      {
        beer: 'Kanaha Blonde Ale',
        style: 'Blonde Ale',
        abv: 4.2,
        ibu: 18
      }]
  },
  {
    name: 'Avery Brewing Company',
    yearEst: 1993,
    numLocations: 1,
    beers:
      [{
        beer: 'White Rascal',
        style: 'Belgian Style White Ale',
        abv: 5.6,
        ibu: null
      },
      {
        beer: 'The Reverend',
        style: 'Belgian-Style Quadrupel Ale',
        abv: 10.0,
        ibu: null
      },
      {
        beer: 'Old Jubilation Ale',
        style: 'English Strong Ale',
        abv: 8.3,
        ibu: null
      }]
  },
  {
    name: 'Renegade Brewing Company',
    yearEst: 2005,
    numLocations: 1,
    beers:
      [{
        beer: 'Redacted',
        style: 'Rye IPA',
        abv: 7.0,
        ibu: 60
      },
      {
        beer: 'Free to Roam',
        style: 'APA',
        abv: 5.4,
        ibu: 47
      },
      {
        beer: 'Blood Moon Ryesin',
        style: 'Imperial Red Ale with Blood Orange',
        abv: 7.5,
        ibu: 65
      },
      {
        beer: 'Endpoint',
        style: 'Triple IPA',
        abv: 11.0,
        ibu: 100
      },
      {
        beer: 'Evolet',
        style: 'Beer/Wine Hybrid',
        abv: 7.6,
        ibu: 20
      },
      {
        beer: 'Strawberry Cream Ale',
        style: 'Cream Ale',
        abv: 5.4,
        ibu: 18
      }]
  },
  {
    name: 'TRVE Brewing Company',
    yearEst: 2012,
    numLocations: 1,
    beers:
      [{
        beer: 'Seven Doors',
        style: 'Grisette',
        abv: 6.1,
        ibu: null
      },
      {
        beer: 'Scorn',
        style: 'Pale Ale',
        abv: 5.3,
        ibu: null
      }]
  },
  {
    name: 'Denver Beer Company',
    yearEst: 2011,
    numLocations: 3,
    beers: 
      [{
        beer: 'Princess Yum Yum Raspberry Kolsch',
        style: 'Fruited Kolsch',
        abv: 4.8,
        ibu: null
      },
      {
        beer: 'Juicy Freak',
        style: 'IPA',
        abv: 6.5,
        ibu: null
      }]
  },
  {
    name: 'Prost Brewing Company',
    yearEst: 2012,
    numLocations: 2,
    beers:
      [{
        beer: 'Dunkel',
        style: 'German-Style Dark Lager',
        abv: 5.6,
        ibu: 24
      },
      {
        beer: 'Weissbier',
        style: 'Bavarian-Style Wheat Ale',
        abv: 5.0,
        ibu: 12
      },
      {
        beer: 'Maibock',
        style: 'Bock-Style Lager',
        abv: 6.8,
        ibu: 31
      },
      {
        beer: 'Altbier',
        style: 'German-Style Amber Ale',
        abv: 5.1,
        ibu: 37
      }]
  },
  {
    name: 'Sierra Nevada Brewing Company',
    yearEst: 1979,
    numLocations: 3,
    beers:
      [{
        beer: 'Torpedo',
        style: 'Extra IPA',
        abv: 7.2,
        ibu: 65
      },
      {
        beer: 'Narwhal',
        style: 'Imperial Stout',
        abv: 10.2,
        ibu: 60
      },
      {
        beer: 'Old Chico',
        style: 'Crystal Wheat',
        abv: 4.8,
        ibu: 26
      }]
  },
  {
    name: 'Alaskan Brewing Company',
    yearEst: 1986,
    numLocations: 1,
    beers:
      [{
        beer: 'SMaSH Galaxy',
        style: 'American Double IPA',
        abv: 8.5,
        ibu: 86
      },
      {
        beer: 'Free Ride Pale Ale',
        style: 'American Pale Ale',
        abv: 5.3,
        ibu: 40
      },
      {
        beer: 'Hopothermia',
        style: 'American Double IPA',
        abv: 8.5,
        ibu: 70
      }]
  },
  {
    name: 'Left Hand Brewing Company',
    yearEst: 1993,
    numLocations: 1,
    beers: 
      [{
        beer: 'Milk Stout',
        style: 'Sweet Stout',
        abv: 6.0,
        ibu: 25
      },
      {
        beer: 'Flamingo Dreams Nitro',
        style: 'Blonde Ale',
        abv: 4.7,
        ibu: 11
      },
      {
        beer: 'Wheels Gose \'Round',
        style: 'Lemon and Raspberry Gose',
        abv: 4.4,
        ibu: 14
      }]
  },
  {
    name: 'Animas Brewing Company',
    yearEst: 2014,
    numLocations: 1,
    beers:
      [{
        beer: 'Fisherman\'s Brown',
        style: 'Brown Ale',
        abv: 4.8,
        ibu: 22
      },
      {
        beer: 'Riverside Kolsch',
        style: 'Kolsch',
        abv: 5.2,
        ibu: 20
      },
      {
        beer: 'Boxcar Red',
        style: 'Amber Ale',
        abv: 6.1,
        ibu: 37
      }]
  },
  {
    name: 'Broken Compass Brewing Company',
    yearEst: 2014,
    numLocations: 1,
    beers:
      [{
        beer: 'Ginger Pale Ale',
        style: 'Light Ale',
        abv: 5.9,
        ibu: 20
      },
      {
        beer: 'Impeachpricot Blonde',
        style: 'American Blonde',
        abv: 5.4,
        ibu: 15
      },
      {
        beer: 'Coconut Porter',
        style: 'Robust Porter',
        abv: 5.9,
        ibu: 28
      },
      {
        beer: 'Snow Blind',
        style: 'Double IPA',
        abv: 8.3,
        ibu: 95
      }]
  },
  {
    name: 'Pug Ryan\'s Brewing Company',
    yearEst: 1975,
    numLocations: 1,
    beers:
      [{
        beer: 'Deadwood Dunkel',
        style: 'Munich Dunkel Lager',
        abv: 6.0,
        ibu: 15
      },
      {
        beer: 'PugWeizer',
        style: 'American Light Lager',
        abv: 4.4,
        ibu: 9
      },
      {
        beer: 'Peacemaker Pilsner',
        style: 'Bohenian Pilsner',
        abv: 5.8,
        ibu: 21
      }]
  },
  {
    name: 'Highside Brewing Company',
    yearEst: 2014,
    numLocations: 1,
    beers: 
      [{
        beer: 'Cucumber IPA',
        style: 'American IPA',
        abv: 4.8,
        ibu: 50
      },
      {
        beer: '4 Pepper Pilsner',
        style: 'German Pilsner',
        abv: 5.5,
        ibu: 32
      },
      {
        beer: 'Get Some Freshies',
        style: 'Belgian Blonde',
        abv: 5.7,
        ibu: 27
      },
      {
        beer: 'Get To the Choppa!',
        style: 'Vienna Lager',
        abv: 6.3,
        ibu: 25
      }]
  },
  {
    name: 'Outer Range Brewing Company',
    yearEst: 2016,
    numLocations: 1,
    beers:
      [{
        beer: 'Fade Out',
        style: 'Saison Farmhouse Ale',
        abv: 6.5,
        ibu: null
      },
      {
        beer: 'The Heebeegeebees',
        style: 'American IPA',
        abv: 6.9,
        ibu: null
      }]
  },
  {
    name: 'Rock Bottom Brewery',
    yearEst: 2010,
    numLocations: 27,
    beers: 
      [{
        beer: 'El Burro',
        style: 'Vienna Style Lager',
        abv: 5.2,
        ibu: 22
      },
      {
        beer: 'Slow Ride',
        style: 'Hazy IPA',
        abv: 5.9,
        ibu: 13
      },
      {
        beer: 'Fools Gold',
        style: 'Belgian Pale Ale',
        abv: 5.9,
        ibu: 26
      }]
  },
  {
    name: 'The Great Northern Brewing Company',
    yearEst: 1995,
    numLocations: 1,
    beers:
      [{
        beer: 'Wild Huckleberry',
        style: 'Lager',
        abv: 4.5,
        ibu: 11
      },
      {
        beer: 'Big Mountain',
        style: 'Pale Ale',
        abv: 5.2,
        ibu: 45
      },
      {
        beer: 'Going to the Sun',
        style: 'IPA',
        abv: 5.7,
        ibu: 51
      }]
  }];

module.exports = breweriesData;