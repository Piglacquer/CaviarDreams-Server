const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

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

app.delete('/stocks/:id', (request, response) => {
	queries
		.deleteStock(request.body.ticker, request.params.id)
		.then(() => {
			response.sendStatus(200)
		})
		.catch(console.error)
})

app.delete('/users', (request, response) => {
	queries
		.deleteUser(request.body.userId)
		.then(() => {
			response.sendStatus(200)
		})
		.catch(console.error)
})

app.delete('/stocks', (request, response) => {
	queries
		.deleteUserFromStocks(request.body.userId)
		.then(() => {
			response.sendStatus(200)
		})
		.catch(console.error)
})

app.put('/users', (request, response) => {
	queries
		.updateUser(request.body.userId, request.body.name)
		.then(user => {
			response.json({ user })
		})
		.catch(console.error)
})
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
