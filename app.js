const fs = require('fs');
const manifest = require('./manifest.json');
const concat = require('concat-files');

const dir = './deploy';
let cau, files;

// creates a deploy directory if there isn't one
try {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
} catch (err) {
    console.error(err)
}

// maps the file paths per configuration
cau = manifest.cau.map((cau) => {
    files = cau.blobs.map((file) => manifest.filePaths[file]);
    return {
        "pageType": cau.pageType,
        "filePaths": files
    };
});

// generate script files based on config
cau.forEach( (el, i, obj) => {
    if (obj) console.log("generated:", obj[i].pageType);
    concat(el.filePaths, "./deploy/"+el.pageType+".js");
});