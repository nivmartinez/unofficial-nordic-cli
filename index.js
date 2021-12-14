#!/usr/bin/env node
import clear from 'clear'
import figlet from 'figlet'
import { Command, Argument } from 'commander'
import { showLog } from './lib/swing.js'
import commands from './lib/commands.js'

clear()

showLog(
  figlet.textSync('nordic/cli', { horizontalLayout: 'full' })
)

const cli = new Command()
cli.version('0.0.1', '-v, --version', 'output the current version')

cli.command('generate')
  .alias('g')
  .addArgument(new Argument('<schematic>', 'schematic to generate').choices(['page', 'component']))
  .argument('[name]', 'schematic name (optional)')
  .option('-sc, --skip-client', 'Skip generate client file')
  .option('-st, --skip-tests', 'Skip generate test file')
  .option('-si, --skip-import', 'Skip generate test file')
  .description('generates and/or modifies files based on schematic')
  .action((schematic, name, options) => {
    commands.generate(schematic, name, options)
  })

cli.parse(process.argv)
