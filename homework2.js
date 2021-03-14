const os = require("os");
const interfaces = os.networkInterfaces();
for (let a in interfaces) {

    for (let i in interfaces[a]) {

        if (interfaces[a][i].family === 'IPv4') {
            console.log(interfaces[a][i].address);
        }
    }
}


