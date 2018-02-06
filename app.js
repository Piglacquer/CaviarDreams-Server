const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.get('/users', (request, response) => {
	queries
		.listUsers()
		.then(users => {
			response.json({ users })
		})
		.catch(console.error)
})

app.get('/stocks', (request, response) => {
	queries
		.listStocks()
		.then(stocks => {
			response.json({ stocks })
		})
		.catch(console.error)
})

app.get('/stocks/:id', (request, response) => {
	queries
		.listStocksByUser(request.params.id)
		.then(stocks => {
			response.json({ stocks })
		})
		.catch(console.error)
})

app.post('/users', (request, response) => {
	queries
		.createUser(request.body)
		.then(user => {
			response.status(201).json({ user })
		})
		.catch(console.error)
})

app.post('/stocks', (request, response) => {
	queries
		.createStock(request.body)
		.then(stock => {
			response.status(201).json({ stock })
		})
		.catch(console.error)
})
// app.get('/coffees/:id', (request, response) => {
// 	queries
// 		.read(request.params.id)
// 		.then(coffee => {
// 			coffee ? response.json({ coffee }) : response.sendStatus(404)
// 		})
// 		.catch(console.error)
// })
//
// app.post('/coffees', (request, response) => {
// 	queries
// 		.create(request.body)
// 		.then(coffee => {
// 			response.status(201).json({ coffee })
// 		})
// 		.catch(console.error)
// })
//
// app.delete('/coffees/:id', (request, response) => {
// 	queries
// 		.delete(request.params.id)
// 		.then(() => {
// 			response.sendStatus(204)
// 		})
// 		.catch(console.error)
// })
//
// app.put('/coffees/:id', (request, response) => {
// 	queries
// 		.update(request.params.id, request.body)
// 		.then(coffee => {
// 			response.json({ coffee })
// 		})
// 		.catch(console.error)
// })
//
app.use((request, response) => {
	response.send(404)
})

module.exports = app
