// import server
import express from 'express'
import * as snacks from './data/snacks.js'
// create server
const app = express()
// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes
app.get('/home', function (req, res) {
	res.render('home', {
    myString: 'This is my string',
    myItems:[1, 2, 3, 4, 5]
  })
})

app.get('/snacks', function (req, res) {
	snacks.find({}, function (error, snacks) {
		res.render('snacks/index', {
			snacks: snacks,
			error: error,
		})
	})
})

app.get('/', function(req, res) {
  res.redirect('/snacks')
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
