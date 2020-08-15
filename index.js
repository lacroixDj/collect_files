// Require filesystem utils
const fs = require('fs');
const path = require('path');

// Root path string
let root = './foo';

/**
 * Takes a string path as input
 * and returns a list of lists where each inner list
 * contains absolute paths to files within the input path  
 *  
 * @param {String} dir String path to the root folder we want to walk in
 * @param {Array} files Cumulative array with lists of files 
 * @author <lacroix@dj> 
 */

const collectFiles = (dir, files) => {
    
    // This is the cumulative filelist array
    files = files || [];
    
    // first we read the dir input to get it's childs
    children = fs.readdirSync(dir);
    
    // Iterating dir children (if any)
    children.forEach( file => {
        
        // Ask if child is dir, if so it call this function recursively 
        if (fs.statSync(path.join(dir, file)).isDirectory())  files = collectFiles(path.join(dir, file), files);
        
        // if child is a file then push it to the array
        else if(fs.statSync(path.join(dir, file)).isFile())  files.push([path.join(dir, file)]);
    
    });
    
    return files;
};

// The array result
let array_files = [];

// let's call our magic function 
array_files = collectFiles(root, []);

// Print to the console
console.table(array_files);