// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում ,
// եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։
const random = require('random');
function check (){
    return new Promise(function (resolve, reject) {
        let rand = random.int(0, 10);
        if (rand > 4) {
            resolve(rand);
        }else {
            reject(new Error('Error'));
        }
    });
}
check().then(function (data) {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
});
