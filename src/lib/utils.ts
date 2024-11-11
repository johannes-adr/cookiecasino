export let sleep = (s: number)=>new Promise(r=>setTimeout(r,s*1000));


export function sames(arr: number[]){
    let count = new Set();
    for(let num of arr){
        count.add(num)
    };
    return 4 - [...count.entries()].length;
}