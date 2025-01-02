#!/usr/bin/env node

import fs from 'fs';
import chokidar from 'chokidar';
// A library for watching file system changes. It detects when files are added, modified, or deleted in a directory.
import debounce  from 'lodash.debounce';
// A utility function from the Lodash library that limits how frequently a function can be invoked, even if it is repeatedly triggered.
import program from 'caporal';
import { spawn } from 'child_process';
import chalk from 'chalk';

program
    .version('0.0.1')
    .argument('[filename]','Name of a file to execute')
    .action(async({filename})=> {
        const name = filename || 'index.js';

        try{
            await fs.promises.access(name); // checks whether a file exists on a users hard drive
        } catch (err){
            throw new Error (`Could not find the file ${name}`)
        }
        let proc;
        const start = debounce(()=>{
            if(proc){
                proc.kill();
            }
            console.log(chalk.yellow('>>>>>>>Starting process...'));
            proc = spawn('node',[name],{stdio : 'inherit'});
        },100)
        
        chokidar
            .watch('.')//Sets up a file watcher for the current directory.Returns a Watcher object, which you can use to attach event listeners.
            .on('add', start) // Triggered when a new file is added to the directory being watched.
            .on('change',start)
            .on('unlink',start);
        
    })
program.parse(process.argv);



