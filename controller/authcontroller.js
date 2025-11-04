const bcrypt = require('bcryptjs');
const { db } = require('../db.js');

// original-style signup (simple)
const signup = (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const role = 'user';

	if (!name || !email || !password) {
		return res.status(400).json({ error: 'Name, email, and password are required' });
	}

	bcrypt.hash(password, 10, (err, hashedPassword) => {
		if (err) {
			console.log(err);
			return res.status(500).json({ error: 'hashing error' });
		}

		const query = `INSERT INTO users (NAME, EMAIL, PASSWORD, ROLE) VALUES ('${name}', '${email}', '${hashedPassword}', '${role}')`;

		db.run(query, (err) => {
			if (err) {
				console.error(err.message);
				if (err.message.includes('UNIQUE constraint ')) {
					return res.status(400).json({ error: 'Email already exists' });
				}
				return res.status(500).json({ error: 'Database Error' });
			}
			res.status(201).json({ message: 'User registered successfully' });
		}); 
	});
};

// simple compare function: checks provided password against stored hash
const compareUser = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(400).json({ error: 'Email and password are required' });
	}

	const query = `SELECT password FROM users WHERE email = ?`;
	db.get(query, [email], (err, row) => {
		if (err) {
			console.error('Error retrieving user:', err.message);
			return res.status(500).json({ error: 'Database Error' });
		}

		if (!row) {
			return res.status(401).json({ error: 'Invalid email or password' });
		}

		bcrypt.compare(password, row.password, (err, match) => {
			if (err) {
				console.error('Compare error:', err);
				return res.status(500).json({ error: 'Compare Error' });
			}

			if (!match) {
				return res.status(401).json({ error: 'Invalid email or password' });
			}

			return res.status(200).json({ message: 'Password matches' });
		});
	});
};

module.exports = {
	signup,
	compareUser
};