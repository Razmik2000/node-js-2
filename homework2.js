// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի
// ամիս, օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):
const fs = require('fs').promises;
const d = new Date()
const newName =`${d.getMonth()}_${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}.json`;
async function rename(){

    await fs.rename('user.json',newName );
}
rename().then().catch((err)=>{
    console.log(err.message);

});

