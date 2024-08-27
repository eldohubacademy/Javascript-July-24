const gospel = ["yesu nikumbuke", "shusha nyavu", "nyosha mkoni"]

const reggae = ["zion lion", "prisoner"]

function mergeArrays(arr1,arr2){
    const newArr = arr1

    arr2.forEach(song=>{
        newArr.push(song)
    })

    return newArr.sort()
}

console.log( mergeArrays(reggae,gospel) );
