const {Command, flags} = require('@oclif/command')
const {Todo} = require('../db')

class DoneCommand extends Command {
  async run() {
    const {flags: {id}} = this.parse(DoneCommand)
    const res = await Todo.find({id: parseInt(id, 10)})
    .assign({done: true})
    .write()
    this.log(res)
  }
}

DoneCommand.description = `Marks a task as done
...
Marks a task as done`

DoneCommand.flags = {
  id: flags.string(({char: 'n', description: 'task id'})),
}

module.exports = {
  DoneCommand,
}
