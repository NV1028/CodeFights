function adjacentElementsProduct(inputArray) {
    let prodArray = [];
    let prod
    for(let i=0; i < inputArray.length; i++){
        for(let j=1; j< inputArray.length; j++){      
            if(j - i === 1){
            prod = inputArray[i] * inputArray[j]
            prodArray[prodArray.length] = prod
            console.log('inArri', inputArray[i])
            console.log('inArrj', inputArray[j])
            console.log('prod', prod)
            console.log('prodArray', prodArray)
            }
        }
    }
return Math.max(...prodArray)
}