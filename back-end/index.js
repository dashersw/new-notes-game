const express = require('express')
const bodyParser = require('body-parser')

const GameService = require('./services/game-service')
const UserService = require('./services/user-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game/all', async (req, res) => {
  const games = await GameService.findAll()
  res.render('game', { games: games })
})

app.get('/game/:id', async (req, res) => {
  const game = await GameService.find(req.params.id)
  res.send(game)
})

app.post('/game', async (req, res) => {
  const game = await GameService.add(req.body)
  res.send(game)
})

app.delete('/game/:id', async (req, res) => {
  await GameService.del(req.params.id)
  res.send('ok')
})

app.get('/user/all', async (req, res) => {
  const players = await UserService.findAll()
  res.render('user', { players })
})

app.get('/user/:id', async (req, res) => {
  const player = await UserService.find(req.params.id)
  res.send(player)
})

app.post('/user', async (req, res) => {
  const player = await UserService.add(req.body)
  res.send(player)
})

app.delete('/user/:id', async (req, res) => {
  await PersonService.del(req.params.id)
  res.send('ok')
})

//user plays game
app.post('/user/:id/play/:gameId', async (req, res) => {
  const games = await GameService.findAll(req.params.game)
  const players = await UserService.findAll(req.params.user)
  const player = players.find(p => p.id == req.params.id)
  const game = games.find(p => p.id == req.params.id)
  game.id = gameId
  player.play(game)
  await GameService.saveAll(games)
  await UserService.saveAll(players)
  res.render('user', { game })
  res.send('The player plays')
})

app.listen(3000, () => {
  console.log('Server listening')
})