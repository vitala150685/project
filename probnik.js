/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('property' + key + ' have' + options[key]);
}

console.log(Object.keys(options).length); */

/*  

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr.forEach(function(item, i, mass) {
console.log(i + ': ' + item + "(arr:" + mass + ')');
});
console.log(arr); */

let ans = prompt("", "");
arr = [];

arr = ans.split(',');
console.log(arr);

let arr = ["asdf", 'qwdf', 'sdf', '1', '2563', '223'],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);