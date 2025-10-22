const {trips}=require('../models/tripmodel');

const retrievalltrips=(req,res)=>{
    const alltrips=trips;
    res.status(200).json({
        message:'Trips retrieved successfully',
        trips:alltrips.length,
        data:alltrips,
    });
}

const createTrip=(req,res)=>{
const {destinationName,
destination,
duration,
language,
description,
accommodation,
currency,}=req.body;

const newTrip={
    id :trips.length +1,
    destination,
    duration,
    language,
    description,
    accommodation,
    currency,

}

trips.push(newTrip); 

}
module.exports={
    retrievalltrips,
    createTrip
};