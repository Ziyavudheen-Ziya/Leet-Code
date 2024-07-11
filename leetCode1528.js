var sortPeople = function (names, heights) {
  for (i = 0; i < heights.length; i++) {
    for (j = 0; j < heights.length; j++) {
      if (heights[i] > heights[j]) {
        let temp = heights[i];
        heights[i] = heights[j];
        heights[j] = temp;

        let tempr = names[i];
        names[i] = names[j];
        names[j] = tempr;
      }
    }
  }

  return names;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
