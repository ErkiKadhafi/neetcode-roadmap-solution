/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    /*  
        
    */
    const ans = [], map = {};
    strs.forEach((str, index)=> {
        const key = str.split("").sort().join();
        if(map.hasOwnProperty(key)){
            ans[map[key]].push(str);
        }else {
            ans.push([str]);
            map[key] = ans.length-1;
        }
    });

    return ans;
};