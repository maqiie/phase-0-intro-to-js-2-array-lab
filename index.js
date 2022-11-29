let cats = ["Milo","Otis","Garfield"]
cats;
function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}



function destructivelyRemoveLastCat(){
cats.pop("Milo")
}

function destructivelyRemoveFirstCat(){

    cats.shift("Ralph")
}
 function  appendCat(name){
   return [...cats, `${name}`]
}

 function prependCat(name){
     return [`${name}`,...cats]
 }

 function  removeLastCat(){
    return cats.slice(0, cats.length -1);
 }

 function removeFirstCat(){

    return cats.slice(1);
    
 }