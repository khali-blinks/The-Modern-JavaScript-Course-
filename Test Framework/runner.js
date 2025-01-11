const fs = require('fs');
const path = require('path')
const render = require('./render');

const forbiddenDirs = ['node_modules'];

class Runner {
    constructor(){
        this.testfiles = [];
    }

    async runTest(){
        for (let file of this.testfiles){
            console.log(`----${file.shortName}`);
            const beforeEaches = [];
            global.render = render;
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            }
            global.it = async(desc, fn) => {
                beforeEaches.forEach(func => func());
                try{
                    await fn();
                    console.log(`\tOK - ${desc}`);
                } catch (err){
                    const message = err.message.replace(/\n/g, '\n\t\t')
                    console.log(`\tX - ${desc}`);
                    console.log('\t', message);
                }
                
            };
            try {
                require(file.name);
            } catch (err){
                console.log(err);
            }
           
        }
    }
    async collectFiles(targetPath){
        const files = await fs.promises.readdir(targetPath);
        
        for (let file of files){
            const filepath = path.join(targetPath,file);
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.includes('.test.js')){
                this.testfiles.push({name : filepath ,shortName : file});

            } else if (stats.isDirectory() && !forbiddenDirs.includes(file)){
                const childFiles = await fs.promises.readdir(filepath);
                
                //While file and f are indeed strings representing directory and file names, 
                // //the path.join function intelligently constructs a path that reflects //
                // the hierarchical relationship between them. This is crucial for accurately locating files within nested directories.
                files.push(...childFiles.map(f => path.join(file, f)));
            }
        }

    }

}
module.exports = Runner