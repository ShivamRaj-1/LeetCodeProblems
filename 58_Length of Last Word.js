var lengthOfLastWord = function (s) {

    let arr = s.split(" ").filter((e) => {
        if (e != "") {
            return e
        }
    })

    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));