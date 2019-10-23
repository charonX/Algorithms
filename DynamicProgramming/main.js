function knapsack2(items,w){
    console.log('=========================')
    console.log(items,w)
    let states = new Array(w+1).fill(false)
    states[0] = true
    if(items[0] <= w){
        states[items[0]] = true
    }

    for (let i = 1; i < items.length; i+=1) {
        console.log('------------------------')
        for(let j = w - items[i];j>=0;j--){
            console.log(j)
            if(states[j] == true){
                states[j+items[i]] = true
            }
        }
    }
    console.log(states)
    for(let i = w;i>=0;i--){
        if(states[i] == true) return i
    }

    return 0
}


// 路径问题
let matrix = [[1, 3, 5, 9], [2, 1, 3, 4], [5, 2, 6, 7], [6, 8, 4, 3]];
let states = new Array(4).fill(0).map((a)=>{
    return new Array(4).fill(0)
})
function minDist(n,m){
    // let n = matrix.length
    // let m = matrix[0].length
    if (n == 0 && m == 0) {
        return matrix[0][0];
    }

    if (states[n][m] > 0){
        console.log('return:states',n,m,states[n][m])
        return states[n][m]
    }
    let minLeft = Number.MAX_VALUE
    if(m-1>=0){
        minLeft = minDist(n,m-1)
    }

    let minUp = Number.MAX_VALUE;
    if(n-1>=0 ){
        minUp = minDist(n-1,m)
    }
    console.log(n,m,matrix[n][m])
    console.log(minLeft, minUp)
    let currMinDist = matrix[n][m] + Math.min(minLeft, minUp);

    states[n][m] = currMinDist
    console.log("return(currMinDist):",currMinDist)
    return currMinDist
}


/**
 * 硬币找到零问题.假设我们有多种不同币值的硬币v1，v2，……，vn（单位是元）。
 * 如果我们要支付w元，求最少需要几个个硬币。例如，我们有3种不同的硬币，1元，3元，5元，我们要支付9元，最少需要3个硬币（3个3元的硬币）。
 */

function minCoin(coins, amount){
    let len = amount
    let states = new Array(len).fill(0)
    for(let i = 0; i < coins.length; i++){
        states[coins[i]] = 1
    }
    for (let i = 1; i < len; i++) {
        let array = []
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if(i-coin==0){
                array.push(1)
            }else if(i-coin > 0){
                array.push(states[i-coin])

            }
        }
        states[i] = Math.min(...array) + 1
    }
    return states[len - 1]
}

let obj = {
    a:{
        b:{
            c:1
        }
    }
}

function find(obj,str){
    let arr = str.split('.')

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(obj[item]){
            if(i == arr.length - 1){
                return obj[item]
            }
            obj = obj[item]
            continue
        }else{
            return undefined
        }
    }
}
// console.log(find(obj,'a.d.c'))


class Task{
    constructor(){
        this.list = []
        this.isRun = false;
    }

    add(fn,context,...args){
        let a = function(){return new Promise((resolve, reject)=>{
            if(!fn) reject(new Error('请传入方法'))
            fn(resolve,context,...args)
        })}
        this.list.push(a)
        return this
    }
    run(){
        this.isRun = true
        let a = this.list[0]
        if(!a) return
        a().then(()=>{
            this.list.splice(0,1)
            if(this.isRun){
                this.run()
            }
        })
    }
    stop(){
        this.isRun = false
    }
}


function task1(next){
    setTimeout(()=>{
        console.log(1)
        next()
    },1000)
}


function task2(next,b){
    setTimeout(()=>{
        console.log(b)
        next()
    },1000)
}

let task = new Task()
task.add(task1).add(task2,null,3)
task.run()

setTimeout(()=>{
    task.stop()
},500)