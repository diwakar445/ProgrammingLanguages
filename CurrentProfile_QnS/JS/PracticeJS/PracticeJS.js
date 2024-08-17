console.log("Move Zeros to end of the list: ");

let arr = [1,0,2,0,0,1];

function moveZeros(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++){
        if(arr[i] === 0){
            delete(arr[i]);
            arr.push(0);
        }
    }
    console.log(arr);
}

function moveZerosTwo(arr){
    let n = arr.length;
    let l = 0; 
    let r = n-1;
    while(l<r){
        if(arr[l] === 0){
            while(r >= l){
                if(arr[r] === 0){
                    r--;
                }else{
                    break;
                }
            }
            if(arr[r] !== 0 & r>l){
                let x = arr[l];
                arr[l] = arr[r];
                arr[r] = x;
                console.log('swap', arr)
            }
        }
        l++;
    }
    console.log(arr);
}

// moveZeros(arr);
moveZerosTwo(arr);
