class Validator{
    isEmail(str){
        if (str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return true
        }else return false
    }

    isDomain(str){
        if (str.match(/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/)){
            return true
        }else return false
    }

    isDate(str){
        if (str.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
            return true
        }else return false
    }

    isPhone(str){
        if (str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)){
            return true
        }else return false
    }
}

let validate = new Validator();

console.log(validate.isEmail('test_test.ru'));
console.log(validate.isDomain('tes-test.ru'));
console.log(validate.isDate('13/12/2022'));
console.log(validate.isPhone('+79255678198'));

class SValidator{
    static isEmail(str){
        if (str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return true
        }else return false
    }

    static isDomain(str){
        if (str.match(/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/)){
            return true
        }else return false
    }

    static isDate(str){
        if (str.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
            return true
        }else return false
    }

    static isPhone(str){
        if (str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)){
            return true
        }else return false
    }
}

console.log(SValidator.isEmail('test@test.ru'));
console.log(SValidator.isDomain('tes-test.ru'));
console.log(SValidator.isDate('13/12/aass'));
console.log(SValidator.isPhone('+7925678198'));