// 1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:
const fs = require('fs').promises;
const os = require('os');
async function userInfo(){
    await fs.writeFile('user.json',JSON.stringify(os.userInfo()));
}
userInfo().then().catch((err)=>{
    console.log(err.message);

});
