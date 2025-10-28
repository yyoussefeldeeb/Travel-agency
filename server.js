const { app } = require('./index');
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

const db_access = require('./db.js');
const db = db_access.db;
db.serialize(() => {
    db.run(db_access.createTriptable , (err) => {
        if (err) {
            console.error('Error creating trips table', err.message);
        }});
    });
