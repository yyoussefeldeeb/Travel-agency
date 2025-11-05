const { app } = require('./index');
const db_access = require('./db.js');
const port=3000;

const db = db_access.db;
db.serialize(() => {
    db.run(db_access.createTriptable , (err) => {
        if (err) {
            console.error('Error creating trips table', err.message);
        }});
         db.run(db_access.createUserTable , (err) => {
        if (err) {
            console.error('Error creating users table', err.message);
        }});
    });
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});