const trips = [
{
    id: 1,
    destination: 'Paris',
    duration: 7,
    price: 1200,
    language: 'French',
    description: 'Explore the city of lights with its rich history and culture.',
    flightcost : 400,
    accommodation : 'Hotel',
    accommodationcost : 600,
    mealcost : 200,
    transportationcost : 100,
    activitiescost : 100,
    currency : 'EUR',
},
{
    id: 2,
    destination: 'Tokyo',
    duration: 10,
    price: 2000,
    language: 'Japanese',
    description: 'Experience the vibrant blend of modern life and ancient traditions in Tokyo.',
    flightcost: 700,
    accommodation: 'Hotel',
    accommodationcost: 800,
    mealcost: 300,
    transportationcost: 100,
    activitiescost: 100,
    currency: 'JPY'
  },
  {
    id: 3,
    destination: 'Cairo',
    duration: 5,
    price: 900,
    language: 'Arabic',
    description: 'Discover the pyramids, ancient temples, and the magic of the Nile River.',
    flightcost: 200,
    accommodation: 'Hotel',
    accommodationcost: 400,
    mealcost: 150,
    transportationcost: 50,
    activitiescost: 100,
    currency: 'EGP'
  },
  {
    id: 4,
    destination: 'New York',
    duration: 6,
    price: 1500,
    language: 'English',
    description: 'Enjoy the city that never sleeps with iconic landmarks and endless entertainment.',
    flightcost: 500,
    accommodation: 'Hotel',
    accommodationcost: 700,
    mealcost: 200,
    transportationcost: 50,
    activitiescost: 50,
    currency: 'USD'
  },
  {
    id: 5,
    destination: 'Rome',
    duration: 7,
    price: 1100,
    language: 'Italian',
    description: 'Walk through history in the Eternal City filled with art, architecture, and cuisine.',
    flightcost: 300,
    accommodation: 'Hotel',
    accommodationcost: 500,
    mealcost: 150,
    transportationcost: 50,
    activitiescost: 100,
    currency: 'EUR'
  },
  {
    id: 6,
    destination: 'Bangkok',
    duration: 8,
    price: 950,
    language: 'Thai',
    description: 'Dive into the colorful markets, temples, and nightlife of Bangkok.',
    flightcost: 400,
    accommodation: 'Hotel',
    accommodationcost: 350,
    mealcost: 100,
    transportationcost: 50,
    activitiescost: 50,
    currency: 'THB'
  },
  {
    id: 7,
    destination: 'Sydney',
    duration: 9,
    price: 1800,
    language: 'English',
    description: 'Enjoy Australia’s coastal beauty and vibrant urban life in Sydney.',
    flightcost: 800,
    accommodation: 'Hotel',
    accommodationcost: 700,
    mealcost: 200,
    transportationcost: 50,
    activitiescost: 50,
    currency: 'AUD'
  },
  {
    id: 8,
    destination: 'Dubai',
    duration: 6,
    price: 1300,
    language: 'Arabic',
    description: 'Experience luxury shopping, futuristic architecture, and desert adventures.',
    flightcost: 300,
    accommodation: 'Hotel',
    accommodationcost: 600,
    mealcost: 200,
    transportationcost: 100,
    activitiescost: 100,
    currency: 'AED'
  },
  {
    id: 9,
    destination: 'London',
    duration: 7,
    price: 1400,
    language: 'English',
    description: 'Visit historical sites and experience British culture in this global capital.',
    flightcost: 400,
    accommodation: 'Hotel',
    accommodationcost: 700,
    mealcost: 200,
    transportationcost: 50,
    activitiescost: 50,
    currency: 'GBP'
  },
  {
    id: 10,
    destination: 'Istanbul',
    duration: 6,
    price: 1000,
    language: 'Turkish',
    description: 'Explore the crossroads of Europe and Asia with stunning mosques and bazaars.',
    flightcost: 250,
    accommodation: 'Hotel',
    accommodationcost: 500,
    mealcost: 150,
    transportationcost: 50,
    activitiescost: 50,
    currency: 'TRY'
  }
];  

function getTripswithdailycost() {
    for (let i = 0; i < trips.length; i++) {
        const t = trips[i];
        t.dailycost =
            t.flightcost +
            t.accommodationcost +
            t.mealcost +
            t.transportationcost +
            t.activitiescost;
    }
    return trips;
}
    module.exports = {
        trips,
        
    };


    














