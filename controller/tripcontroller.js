const {trips}=require('../models/tripmodel');
const db_access = require('../db.js');



const retrievalltrips=(req,res)=>{
    const query = `SELECT * FROM trips`

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error retrieving trips:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(rows);
    });
};

const createTrip=(req,res)=>{
const {
destination,
duration,
price,
language,
description,
flightcost,
accommodation,
accommodationcost,
mealcost,
transportationcost,
activitiescost,
currency}=req.body;

if (!destination || !duration || !price || !language || !description || !flightcost || !accommodation || !accommodationcost || !mealcost || !transportationcost || !activitiescost || !currency) {
    return res.status(400).json({ error: 'All fields are required' });
}

query = `INSERT INTO trips (DESTINATION, DURATION, PRICE, LANGUAGE, DESCRIPTION, FLIGHTCOST, ACCOMMODATION, ACCOMMODATIONCOST, MEALCOST, TRANSPORTATIONCOST, ACTIVITIESCOST, CURRENCY)
VALUES ('${destination}', ${duration}, ${price}, '${language}', '${description}', ${flightcost}, '${accommodation}', ${accommodationcost}, ${mealcost}, ${transportationcost}, ${activitiescost}, '${currency}')`;

db.run(query, function(err) {
    if (err) {
        console.error('Error creating trip:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Trip created successfully', tripId: this.lastID });
});

}




module.exports={
    retrievalltrips,
    createTrip
};