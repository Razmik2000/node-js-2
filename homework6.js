// Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին:
// _transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//  Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:
const {Transform} = require('stream');
class RemoveSpecialChars extends Transform{

    constructor(string) {
        super();
        this.string = string
    }
    _transform() {


    }


}
