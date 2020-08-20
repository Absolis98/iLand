const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let iLands = [
	{
		name: 'Salmon Creek',
		image:
			'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: 'Granite Hill',
		image:
			'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: "Mountain Goat's Rest",
		image:
			'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: 'Salmon Creek',
		image:
			'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: 'Granite Hill',
		image:
			'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: "Mountain Goat's Rest",
		image:
			'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: 'Salmon Creek',
		image:
			'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: 'Granite Hill',
		image:
			'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	},
	{
		name: "Mountain Goat's Rest",
		image:
			'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
	}
];

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/iLands', function(req, res) {
	res.render('iLands', { iLands: iLands });
});

app.post('/campgrounds', function(req, res) {
	//get data from form and add to campgrounds array
	let name = req.body.name;
	let image = req.body.image;
	let newiLand = { name: name, image: image };
	iLands.push(newiLand);
	//redirect back to campgrounds page
	res.redirect('/iLands');
});

app.get('/iLands/new', function(req, res) {
	res.render('new');
});

app.listen(PORT, function() {
	console.log(`The iLand Server Has Started on PORT ${PORT}`);
});
