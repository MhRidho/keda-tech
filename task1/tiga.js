// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

const palindrom = (param) => {
    const strParam = param.toString()
    const balikParam = strParam.split('').reverse().join('')

    if(strParam === balikParam){
        console.log(true);
    }else{
        console.log(false);
    }
}

palindrom('halolah')