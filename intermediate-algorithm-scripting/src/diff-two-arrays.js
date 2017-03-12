function diffArray(arr1, arr2) {
    var newArr = [];
    var found;

    for (var x = 0; x <= arr2.length; x++){
        found = false;
        for (var y = 0; y <= arr1.length; y++){
            if(arr2[x] == arr1[y]){
                found = true;
                break;
            }
        }
        if(found == false){
            newArr.push(arr2[x]);
        }
    }

    for (var x = 0; x <= arr1.length; x++){
        found = false;
        for (var y = 0; y <= arr2.length; y++){
            if(arr1[x] == arr2[y]){
                found = true;
                break;
            }
        }
        if(found == false){
            newArr.push(arr1[x]);
        }
    }

    for(var x = 0; x <= newArr.length; x++){
        if(arr1.indexOf(newArr[x]) < arr2.indexOf(newArr[x])){
            arr1.splice()
        }
    }

    return newArr;
}

//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
