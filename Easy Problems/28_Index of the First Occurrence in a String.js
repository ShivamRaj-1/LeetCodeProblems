var strStr = function(haystack, needle) {

    if(haystack.includes(needle) === true)
         return haystack.indexOf(needle) 

     return -1
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));