// 插入排序
function insert_sort(array, func){
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if(sortBool(array[i-1], item)){
            insertItem(item, search(item,i), i);
        }
    }

    // 查找数组
    function search(val,index){
        for (let i = 0; i < index; i++) {
            if(sortBool(array[i],val)){
                return i
            }
        }
        return array.length-1;
    }
    // 插入数据
    function insertItem(val,index,len){
        let nextItem = val;
        for (let i = index; i <= len; i++) {
            let curItem = array[i]
            array[i] = nextItem;
            nextItem = curItem;
        }

    }

    // 排序规则
    function sortBool(val1,val2){
        if(func){
            return func(val1,val2)
        }
        return val1>val2;
    }
}

// 冒泡排序
function bubble_sort(array,func){
    let return_bol = true;
    while(return_bol){
        return_bol = false;
        for (let i = 0; i < array.length - 1; i++) {
            const item = array[i];
            const item1 = array[i+1];
            if(func){
                if(func(item,item1)){
                    array[i] = item1;
                    array[i+1] = item;
                    return_bol = true;
                }
            }else{
                if(item > item1){
                    array[i] = item1;
                    array[i+1] = item;
                    return_bol = true;
                }
            }
        }
    }
}

// 选择排序
function selection_sort(array,func){

    for (let i = 0; i < array.length; i++) {
        var index = search(i);
        transItem(array[index], i, index);
    }

    // 查找数组
    function search(index){
        let result = array[index],
            resultIndex = index;
        for (let i = index+1; i < array.length; i++) {
            if(sortBool(result,array[i])){
                resultIndex = i
            }
        }
        return resultIndex;
    }

    // 排序规则
    function sortBool(val1,val2){
        if(func){
            return func(val1,val2)
        }
        return val1>val2;
    }


    // 插入数据
    function transItem(val,index,targetIndex){
        let target = array[index];
        array[index] = val;
        array[targetIndex] = target;
    }
}

// 归并排序
function merge_sort(array){
    merge_sort_c(array)
}

function merge_sort_c(array){
    function merge(array,array1,array2){
        let result = [];
        let index1 = 0,index2 = 0;
        array1.push(Number.MAX_VALUE);
        array2.push(Number.MAX_VALUE);
        while(index1 != array1.length - 1 || index2 != array2.length - 1){
            if(array1[index1]>array2[index2]){
                result.push(array2[index2])
                index2 += 1;
            }else{
                result.push(array1[index1])
                index1 += 1;
            }
        }

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            array[i] = result[i]
        }
    }

    let length = array.length;
    let middle = Math.floor(length / 2);
    if(length==1) return array;

    let arr1 = merge_sort_c(array.slice(0,middle));
    let arr2 = merge_sort_c(array.slice(middle,length));

    merge(array,arr1, arr2)
    return array;
}


function quick_sort(array){
    quick_sort_c(array,0,array.length-1)
}

function quick_sort_c(array,start,end){
    function partition(array){
        let pivot = array[end],
            curIndex = start;
        for (let i = start; i <= end; i++) {
            const item = array[i];
            if(item <= pivot){
                array[i] = array[curIndex];
                array[curIndex] = item;
                curIndex += 1;
            }
        }
        return curIndex-1;
    }

    let pivot = partition(array);
    if(start >= end) return;
    quick_sort_c(array,start,pivot-1)
    quick_sort_c(array,pivot+1,end)
}