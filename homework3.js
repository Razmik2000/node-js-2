const os = require("os");
const fs = require('fs');
const random = require('random');
let name = '';
for (let i = 0; i < 8; i++) {
    let a = random.int(0, 9);
    name = name + a.toString();

}
const cups = os.cpus();
let i = 0;
for (let a in cups) {
    i++;
}

fs.writeFileSync(name + '.txt', i.toString() + ' CPUs');