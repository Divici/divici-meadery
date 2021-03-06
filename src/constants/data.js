import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const meads = [
    {
        id: 9,
        image: images.meadBottle1,
        info: {
            name: 'Tupelo Woods',
            award: 3,
            competition: 'Mead Stampede 2022',
            compCategory: 'Semi-Sweet Traditionals',
            type: ['traditional'],
            size: '1 gallon',
            honey: ['Tupelo', 'Sourwood'],
            yeast: 'D-47',
            status: 'Aging',
            ABV: '14%',
            description: 'A lighter style mead with strong honey and floral aromas. It feels like sipping on honey and water with your back resting against a tree deep in the woods.'
        },
        primary:    {
            start: '09/05/2021',
            end: '09/17/2021',
            gravityStart: 1.105,
            gravityEnd: 1.000,
            ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
            details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
        },
        secondary: {
            start: '09/17/2021',
            end: '09/27/2021',
            gravityStart: 'Unknown',
            gravityEnd: 1.004,
            ingredients: ["12 oz Bocheted Pure Honey"],
            details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
        },
        aging: {
            bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
            date: '10/17/2021',
            age: 'Bulk Aging',
            thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
        }
    },

    {
      id: 0,
      image: images.meadBottle2,
      info: {
          name: 'White Caramel Mead',
          type: ['cocoa', 'metheglin'],
          size: '1 Gallon',
          honey: ['Clover Honey'],
          yeast: 'D-47',
          status: 'Ongoing',
          ABV: '~14%',
          description: 'This experimental mead came from my love for white chocolate. It is a mix of floral notes with a buttery caramel throughout, leaving a subtle hint of white chocolate behind.'
      },
      primary:    {
          start: '10/02/2021',
          end: '10/10/2021',
          gravityStart: 1.100,
          gravityEnd: 0.997,
          ingredients: ['32 oz Great Value Clover Honey', "12 oz Sam's Choice Yellow Sweet Clover Honey", "1.5g D-47 Lalvin Yeast"],
          details: 'Started fermentation with 1.5g of yeast, 1 tsp of yeast nutrient and 1/2 tsp of yeast energizer in a 1 gallon wide mouth glass fermenter.'
      },
      secondary: {
          start: '10/10/2021',
          end: 'Ongoing',
          gravityStart: 'Unknown',
          gravityEnd: 'TBD',
          ingredients: ["0.25 oz Nature Nate's Raw Honey", "1.5 oz White Chocolate Natural Extract"],
          details: 'Reracked mead into a 1 gallon glass carboy and then added more honey and white chocolate flavoring. After an hour or so, funneled out fat particles then left to sit.'
      },
      aging: {
          bottle: 'N/A',
          date: '10/10/2021',
          age: 'Aging in glass carboy',
          thoughts: 'Quite tasty despite the cheap ingredients but still young so has a bit of a harsh taste.'
      }
  },

  {
      id: 1,
      image: images.meadBottle6,
      info: {
          name: 'Value Apple Bochet',
          type: ['bochet', 'metheglin', 'cyser'],
          size: '5 gallons',
          honey: ['Bocheted Pure Honey'],
          yeast: 'D-47',
          status: 'Aging',
          ABV: '14%',
          description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
      },
      primary:    {
          start: '09/08/2021',
          end: '09/17/2021',
          gravityStart: 1.105,
          gravityEnd: 1.000,
          ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
          details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
      },
      secondary: {
          start: '09/17/2021',
          end: '09/27/2021',
          gravityStart: 'Unknown',
          gravityEnd: 1.004,
          ingredients: ["12 oz Bocheted Pure Honey"],
          details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
      },
      aging: {
          bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
          date: '09/27/2021',
          age: 'Bulk Aging',
          thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
      }
  },
  {
    id: 2,
    image: images.meadBottle2,
    info: {
        name: 'Dose of Maple',
        type: ['metheglin', 'acerglyn'],
        size: '1 gallon',
        honey: ['Kirkland Signature Raw Honey', 'Pure Maple'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'Some pure maple syrup. Some pure delicious honey. A bit of spices. And you get a well balanced, semi-sweet acerglyn, good for dessert.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.096,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },

  {
    id: 3,
    image: images.meadBottle5,
    info: {
        name: 'Maple POG',
        type: ['metheglin', 'acerglyn', 'melomel'],
        size: '1 gallon',
        honey: ['Kirkland Signature Raw Honey', 'Pure Maple'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },
  {
    id: 4,
    image: images.meadBottle4,
    info: {
        name: 'Berry Sweet',
        type: ['pyment', 'sack', 'melomel'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },
  {
    id: 5,
    image: images.meadBottle5,
    info: {
        name: 'Cyser Crumble',
        type: ['metheglin', 'cyser'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },
  {
    id: 6,
    image: images.meadBottle6,
    info: {
        name: 'Blood of my Orange',
        type: ['melomel', 'metheglin'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },
  {
    id: 7,
    image: images.meadBottle6,
    info: {
        name: 'In POG We Trust',
        type: ['melomel'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },

  {
    id: 8,
    image: images.meadBottle2,
    info: {
        name: 'Where No Mango',
        type: ['melomel'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This Semi-Sweet, medium-bodied Mead has hints of mango and a smooth finish.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },

  {
    id: 10,
    image: images.meadBottle6,
    info: {
        name: 'Pr??me Boch??t',
        type: ['bochet', 'metheglin'],
        size: '1 gallon',
        honey: ['Bocheted Pure Honey'],
        yeast: 'D-47',
        status: 'Aging',
        ABV: '14%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.105,
        gravityEnd: 1.000,
        ingredients: ["10 lb Pure N Simple Honey (Bocheted)", "4.5 gallons Great Value Apple Juice", "0.35 oz Light Toast Oak Chips", '3 Cinnamon Sticks', "1 tsp Vanilla Extract", "10g D-47 Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["12 oz Bocheted Pure Honey"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },

  {
    id: 11,
    image: images.meadBottle4,
    info: {
        name: 'Berry Easy Day',
        type: ['session', 'metheglin'],
        size: '1 gallon',
        honey: ['Clover', 'Coffee Blossom'],
        yeast: '71-B',
        status: 'Brewing',
        ABV: '5%',
        description: 'This mead reminds you of a strong whiskey on a cold night topped off with a nice warm honey. Enjoy the subtle hints of vanilla in every sip.'
    },
    primary:    {
        start: '09/08/2021',
        end: '09/17/2021',
        gravityStart: 1.036,
        gravityEnd: 1.000,
        ingredients: ["16 oz Kirkland Signature Raw Honey", "3 Tea bags Wild Berry Zinger", "1/2 gram Wine Tannin", "1g 71-B Lalvin Yeast"],
        details: 'Began by boiling the honey in 2 batches till the honey reached a dark brown. Added some apple juice to the pot slowly, so that it could be mixed with the honey before it hardened. Added mix to the remainder of the apple juice in a 5 gallon plastic fermentation bucket. Threw in the cinnamon sticks, oak chips and vanilla extract and started fermentation with 10g of D-47 yeast placed on top of must. 1 tsp of yeast nutrient and 1 tsp of yeast energizer put in at start and stirred. Used a staggered approaching, adding 1 tsp of nutrients and 1/2 tsp of energizer every 2 days for 3 more doses.'
    },
    secondary: {
        start: '09/17/2021',
        end: '09/27/2021',
        gravityStart: 'Unknown',
        gravityEnd: 1.004,
        ingredients: ["1 oz Kirkland Signature Raw Honey", "32 oz Strawberries", "1 oz Amorreti Boysenberry"],
        details: 'Reracked into another 5 gallon bucket and removed oak chips and cinnamon sticks. Added 12 oz of bocheted honey and let continue fermentation. '
    },
    aging: {
        bottle: 'reracked and filtered into 5 separate 1 gallon glass carboys',
        date: '09/27/2021',
        age: 'Bulk Aging',
        thoughts: 'Very strong with a whiskey with honey taste. Good to sip on during a cold day. Should get better with age.'
    }
  },

];

export default { wines, meads, awards };
