// Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ:
// Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը: Ստեղծել readStream և highWaterMark:1
// նշելով բոլոր սիմվոլների վրայով անցնել:Ծրագիրը աշխատացնել homework4Eng.txt համար:
const fs = require('fs');
const fs1 = require('fs/promises');
const readable = fs.createReadStream('homework4Eng.txt', {
    highWaterMark: 1
});
readable.on('data', function (chunk) {

    fs1.readFile('./translate.json').then((configBuffer) => {
        const config = JSON.parse(configBuffer.toString());
        for(let eng in config){
            if(chunk.toString()===eng){
            console.log(config[eng]);
            }
        }
    });

});
