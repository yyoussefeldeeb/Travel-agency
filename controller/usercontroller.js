
const { db } = require('../db.js');


const retrieveAllUsers = (req, res) => {
	const query = `SELECT id, name, email, role FROM users`;

	db.all(query, [], (err, rows) => {
		if (err) {
			console.error('Error retrieving users:', err.message);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
		res.status(200).json(rows);
	});
};

const createUser = (req, res) => {
	const { name, email, password, role = 'user' } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ error: 'name, email and password are required' });
	}

	const query = `INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)`;

	db.run(query, [name, email, password, role], function(err) {
		if (err) {
			
			if (err.message && err.message.includes('UNIQUE')) {
				return res.status(409).json({ error: 'Email already exists' });
			}
			console.error('Error creating user:', err.message);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
		res.status(201).json({ message: 'User created successfully', userId: this.lastID });
	});
};

module.exports = {
	retrieveAllUsers,
	createUser
};

