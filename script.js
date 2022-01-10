function calcular(valor) {
    var res$ = document.getElementById('res')
    if (valor == 'c') {
        res$.innerHTML = '0'
    } else if (valor == '=') {
        res$.innerHTML = eval(res$.innerHTML)
        console.log(res$)
    } else if (valor == '<') {
        res$.innerHTML = res$.innerHTML.substring(0, res$.innerHTML.length - 1)
        if (res$.innerHTML.length == 0) {
            res$.innerHTML = 0
        }
    } else if (res$.innerHTML.length == 13) {
        return
    } else {
        var lastcaracter = res$.innerHTML[res$.innerHTML.length - 1]
        if (res$.innerHTML == '') {
            return
        } else {
            if ('/*-+'.includes(lastcaracter) && '/*-+'.includes(valor)) { //confere se o ultimo item do placeholder é numero
                return
            } else {
                if (res$.innerHTML == '0') {
                    res$.innerHTML = valor
                } else {
                    res$.innerHTML += valor
                }
            }
        }
    }
}