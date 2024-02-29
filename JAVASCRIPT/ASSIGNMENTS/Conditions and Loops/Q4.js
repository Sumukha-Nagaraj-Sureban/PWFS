const res = [];
const start = 10;
const end = 20;

if(start >= end){
    console.log("first")
} else {
    for(let i = start;i <= end;i++){
        res.push(i);
    }
}

console.log(`Numbers between ${start} and ${end} is ${res}`);
