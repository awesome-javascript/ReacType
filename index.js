#!/usr/bin/env node
const util = require('util');
const program = require('commander');
const execFile = util.promisify(require('child_process').execFile);
const { Spinner } = require('cli-spinner');

const spinner = new Spinner('running app... %s');
spinner.setSpinnerString('|/-\\');

program
  .version('1.0.0', '-v, --version, -V')
  .description('An application for prototyping React application.');

program
  .command('start')
  .description('Start-up reactype app')
  .action(() => {
    spinner.start();
    execFile('npm', ['start']).catch(err => console.log(err));
  });

program.parse(process.argv);
