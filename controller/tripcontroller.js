const {trips}=require('../models/tripmodel');

const retrievalltrips=(req,res)=>{
    const alltrips=trips;
    res.status(200).json({
        message:'Trips retrieved successfully',
        trips:alltrips.length,
        data:alltrips,
    });
}