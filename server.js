const express = require('express'),
	  app     = express();

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
	res.json({ msg: "Welcome to the contact keeper api" });
});

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});