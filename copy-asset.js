const args = {};
process.argv
    .slice(2, process.argv.length) // first 2 items in process.argv related to nodejs environment so i remove it's out!
    .forEach(arg => {
        // expected the input should --targetENV=production
        const exactedArg = arg.split('=');
        let flag = exactedArg[0];
        if (flag.startsWith('--')) {
            flag = exactedArg[0].slice(2, exactedArg[0].length); // remove double dash (--)
        }
        args[flag] = exactedArg.length > 1 ? exactedArg[1] : true;
    });
console.log("-----------")
console.log('args', args);
