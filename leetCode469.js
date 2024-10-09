let nums1 = [1, 3, 5, 2, 4],
  nums2 = [6, 5, 4, 3, 2, 1, 7];
let result = [];

for (let i = 0; i < nums1.length; i++) {

    let found = false
  for (let j = 0; j < nums2.length; j++) {
    if (nums1[i] === nums2[j]) {
      for (let k = j + 1; k < nums2.length; k++) {
        if (nums2[k] > nums2[j]) {
          result.push(nums2[k]);

             found = true
             break;
        } 
      }
    }
  }

  if(!found){

      result.push(-1)
  }
}

console.log(result);
