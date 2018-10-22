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
