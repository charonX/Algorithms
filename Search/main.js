function search(array,value){
    let low = 0;
    let high = array.length - 1;
    
    while(low <= high){
        let mid = low + ((high - low) >> 1);
        if(value == array[low]) return low;
        if(value == array[high]) return high;
        if(value == array[mid]) return mid;

        if(value > array[mid] && value > array[high] && array[mid] < array[low]){
            high = mid - 1;
        }else if(value < array[mid] && value < array[low] && array[mid] < array[low]){
            high = mid - 1;
        }else if(value < array[mid] && value > array[low]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return -1
}
