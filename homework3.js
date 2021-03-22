// 3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը,
// տեքստից կհեռացնի  ստորակետները  և կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:
const fs = require('fs').promises;

async function replace(){
    const txt = await fs.readFile('homework3.txt');
    await fs.writeFile('replace.txt',txt.toString().split(',').join(' '));
    await fs.unlink('homework3.txt');


}
replace().then().catch((err)=>{
    console.log(err.message);

});