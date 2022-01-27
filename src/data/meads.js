import gallonMead from './../assets/WCC-Gallon.png';

const meads = [
    {
        id: 0,
        image: gallonMead,
        info: {
            name: 'White Caramel Mead',
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
        image: gallonMead,
        info: {
            name: 'Value Apple Bochet',
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
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 4,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 5,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 6,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 7,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 8,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 9,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

    {
        id: 10,
        image: gallonMead,
        info: {
            name: '',
            size: 0,
            honey: [],
            yeast: '',
            status: 'ongoing',
            ABV: '~14%',
            description: ''
        },
        primary:    {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        secondary: {
            start: '',
            end: '',
            gravityStart: 0,
            gravityEnd: 0,
            ingredients: [],
            details: ''
        },
        aging: {
            bottle: '',
            date: '',
            age: '',
            thoughts: ''
        }
    },

];

export default meads;