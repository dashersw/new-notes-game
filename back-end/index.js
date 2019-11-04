const User = require('./user')
//const PlanckJS = require('planck-js')
const Database = require('./database')
const Game = require('./game')
const notesGame = new Game('notes-game', [])
//const Staff = require('./staff')
const StuffToDoAfterLoadingTheDatabase = (err, loadedFile) => {
    if (err) {
        console.log('Hey, an error occured', err)
        return
    }
    console.log('hello there', loadedFile)
    const notesGame = Game.create({ name: 'notesGame', users: [] }) 
    console.log(notesGame.name)
}

Database.load('game.json', StuffToDoAfterLoadingTheDatabase)

//const kirsi = new User('Kirsi', 'level4')
//const omur = new User('Omur', '')
//const armagan = new User('Armagan', '')
//const mert = new User('Mert', '')
const kerstin = new User('Kerstin', '')

//const level1 = new Staff("level1", "trebleClef")
//const level2 = new Staff("level2", "bassClef")

//kirsi.play(notesGame)
//omur.play(notesGame)
//armagan.play(notesGame)
//mert.play(notesGame)
kerstin.play(notesGame)

notesGame.printUserNames()

//Database.save('game.json', notesGame)
//Database.save('user.json', kirsi)
//Database.save('staff.json', [level1, level2])


//const loadedUsers = Database.load('user.json')
//const loadedStaffs = Database.load('staff.json')
    
//console.log(loadedFile)
//console.log(loadedUsers)
//console.log(loadedStaffs)



