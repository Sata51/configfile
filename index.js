#!/usr/bin/env node

const program = require('commander')

const { initCommand, runCommand, deployCommand } = require('./lib/index')

const { ConfigService } = require('./lib/services/config.service')
const { FileService } = require('./lib/services/file.service')

const optionsFilePath = `${process.env.HOME}/.configfiles`

const configService = new ConfigService(optionsFilePath)
const fileService = new FileService(configService)

program
  .version('1.0.0')
  .description('Config files manager')

program
  .command('init')
  .alias('i')
  .description('activate configfiles on user session.')
  .option('-f, --force', 'force parameters file overwrite.')
  .action(initCommand(configService))

program
  .command('run <name>')
  .alias('r')
  .description('run custom configuration scripts.')
  .action(runCommand(configService))

program
  .command('deploy [modules...]')
  .alias('d')
  .description('deploy configuration files.')
  .action(deployCommand(optionsFilePath))


program.parse(process.argv)
