const { exec } = require('child_process');
const os = require('os');

function handleError(err, stdout, stderr) {
    if (err) {
        console.error(err);
    } else {
        console.log({stdout, stderr})
    }
}

console.log(os.type());

if (os.type() === 'Windows_NT') {
    exec("win.bat", handleError);
}