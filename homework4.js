// 4.Ունենք const web=['html','css','js','txt'] զանգվածԳրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
// Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և
// վերջավորությունն էլ նույնը լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:
const fs = require('fs').promises;
const web = ['html', 'css', 'js', 'txt'];

async function file() {
    await fs.mkdir('./web',);
    for (let i = 0; i < 4; i++) {
        await fs.writeFile('./web/' + web[i] + '.' + web[i], web[i]);
    }
}

file().then().catch((err) => {
    console.log(err);
});
