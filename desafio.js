function SolutionArray(array) {

    let arr = array
    let a = 0
    let b = 'procura'

    for (let i = 0; i <= arr.length - 1; i++) {
        a = arr[i]

        if (typeof (arr[i]) !== 'string') {

            for (let j = i + 1; j <= arr.length - 1; j++) {

                if (a === arr[j]) {

                    b = arr[j]
                    arr[j] = 'ok'
                    arr[i] = 'ok'

                    break
                }
            }
            if (b === 0) {
                return `aqui tem a resposta ${a}`
            }
            b = 0

        }
    }
}

// var array = [1,0,1]
// var teste = Solution(array)
// console.log(teste)



function SolutionDistinct(arr) {

    var new_arr = [...new Set(arr)]
    var quantidade = new_arr.length
    return quantidade

}
// var arr = [1,1,2,4,3,2]
// var teste2 = SolutionDistinct(arr)

// console.log(teste2)

function SolutionEuclieden(n,m) { 
 
    let resto = 0
    let quantidade = 1

    while(true) { 

        resto = (resto+m) % n
        //console.log(resto)
        if( resto == 0){
            break
        }    
        else{
            quantidade += 1
        }     
    }        
    return quantidade
}  

var n = 8
var m = 3

var teste3 = SolutionEuclieden(n, m)
console.log(teste3)