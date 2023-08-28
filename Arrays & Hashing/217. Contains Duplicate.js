/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let maps = {};
  let hasDuplicate = false;
  nums.forEach((num, index) => {
    if (!hasDuplicate) {
      if (!maps[num]) maps[num] = 1;
      else {
        hasDuplicate = true;
        maps[num] += 1;
      }
    }
  });
  return hasDuplicate;
};
