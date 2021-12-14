import inquirer from 'inquirer'
import chalk from 'chalk'
const log = console.log
const logTypes = {
  success: 'greenBright',
  error: 'redBright',
  white: 'white',
  warning: 'yellowBright'
}

export const askSchematicName = () => {
  const questions = [
    {
      name: 'name',
      type: 'input',
      message: 'Please type the name',
      validate: function (value) {
        if (value.length) {
          return true
        } else {
          return 'Please type the name'
        }
      }
    }
  ]
  return inquirer.prompt(questions)
}

export const askOverwrite = () => {
  const questions = [
    {
      name: 'overwrite',
      type: 'confirm',
      message: 'Do you want to overwrite it?',
      default: false
    }
  ]
  return inquirer.prompt(questions)
}

export const showLog = (message, type = 'success') => {
  log(
    chalk[logTypes[type]](message)
  )
}
