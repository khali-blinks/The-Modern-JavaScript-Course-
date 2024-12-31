#!/usr/bin/env node

// const fs = require('fs');
// const util = require('util');
import fs from 'fs';
import util from 'util';
import chalk from 'chalk';
import path from 'path';


// // Method 2
//const lstat = util.promisify(fs.lstat);

// Method 3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir,async (err,filenames)=>{
    if (err){
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir,filename));
    })

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats){
        const index = allStats.indexOf(stats);

        if (stats.isFile()){
            console.log(filenames[index]);
        } else {
            console.log(chalk.green.bold(filenames[index]))
        }
    }

    
})



// fs.lstat is asynchronous , check doc in node folder for more info
// Solutions
// 1. Maintain an array of the results from each lstat. As each callback is invoked, add the stats object to this array. When array is full, log everything in it.

// fs.readdir(process.cwd(),(err,filenames)=>{
//     if (err){
//         console.log(err);
//     }
    
//     const allStats = Array(filenames.length).fill(null);

//     for (let filename of filenames){
//         const index = filenames.indexOf(filename);
//         fs.lstat(filename,(err,stats)=>{
//             if (err){
//                 console.log(err);
//             }
//             allStats[index] = stats;

//             const ready = allStats.every(stats => {
//                 return stats;
//             })
//             if(ready){
//                 allStats.forEach((stats,index)=>{
//                     console.log(filenames[index],stats.isFile());
//                 })
//             }
//         })
//     }
// })

// 2. Wrap the lstat call with a promise, use asyn/await syntax to process lstat call one at a time.
// Method 1
// const lstat = filename => {
//     return new Promise ((resolve,reject)=>{
//         fs.lstat(filename,(err,stats)=>{
//             if (err){
//                 reject(err)
//             }
//             resolve(stats);
//         })
//     })
// }

// // Method 2
//const lstat = util.promisify(fs.lstat);

// Method 3
// const { lstat } = fs.promises;
// NB: One issue about this method is that, it calls one lstat at a time and if there are several lstat which needs to be called , it will take alot of time.


// 3. Wrap the lstat call with a promise, use async/await + the Promise.all helper method to process lstat calls all at once.