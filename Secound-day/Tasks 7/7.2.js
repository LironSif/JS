const string = "The more you know, the more you know that you don't know";
let index = -1;
let offset = 0;

while(string.indexOf("you", offset) !== -1) {
    index = string.indexOf("you", offset);
    offset = index + 1;
}

console.log(index); 
