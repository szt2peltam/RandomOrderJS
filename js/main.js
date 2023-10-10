

function getRandomOrder(array){
    let randomizedArray =[]
    let randomIndex;

    while (array.length != 0) {
        
        randomIndex = getRandomInt(array.length);
        randomizedArray.push(array[randomIndex])
        DeleteFromListAtIndex(array,randomIndex)

    }
    return randomizedArray
}


 // 0-max-1  -ig
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let napok = ["hetfo","kedd","szerda","csutortok","pentek","szombat","vasarnap"];



console.log(napok)
napok = getRandomOrder(napok)
console.log(napok);

function DeleteFromListFromValue(array,value){
    const index = array.indexOf(value)
    if (index > -1) {
        array.splice(index, 1);
      }
}
function DeleteFromListAtIndex(array,index){
    if (index > -1) {
        array.splice(index, 1);
      }
}