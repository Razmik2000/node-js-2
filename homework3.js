const fs = require('fs/promises');

async function readInput() {
    const data = await fs.readFile('./input.txt', 'utf-8');
    await Promise.all([
        fs.writeFile('outputText1.txt', data.slice(0, data.length / 2)),
        fs.writeFile('outputText2.txt', data.slice(data.length / 2))
    ]);
}

readInput().then().catch((err)=>{
    console.log(err.message);
});