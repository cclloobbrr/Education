function bubbleSort (arr){
    for (let i = 0; i < arr.length; i++){
        for (let j =0; j < arr.length - 1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90, 53, 7, 19, 88, 41, 3, 95, 28, 77, 60, 2, 45, 82];
console.log(arr);

let newArr = bubbleSort(arr);
console.log(newArr);
