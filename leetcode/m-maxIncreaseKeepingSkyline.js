"https://leetcode.com/problems/max-increase-to-keep-city-skyline/"

var maxIncreaseKeepingSkyline = function(grid) {
    let topBottomSkyline = [],
      counter = 0,

      // return max heights of each row
      leftRightSkyline = grid.reduce( (skyline, heights) => {
        skyline.push(Math.max(...heights));
        return skyline;
      }, []);

    // return max heights of each column
    for (let i = 0; i < grid[0].length; i++) {
      let maxHeight = 0;
      for (let j = 0; j < grid.length; j++) {
        if (maxHeight <= grid[j][i]) {
            maxHeight = grid[j][i];
        }
      }
      topBottomSkyline.push(maxHeight);
    }

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid.length; col++) {
        if (grid[row][col] <= leftRightSkyline[row] && grid[row][col] <= topBottomSkyline[col]
          && leftRightSkyline[row] < topBottomSkyline[col]) {
          counter += leftRightSkyline[row] - grid[row][col];
          grid[row][col] = leftRightSkyline[row];
        } else {
          counter += topBottomSkyline[col] - grid[row][col];
          grid[row][col] = topBottomSkyline[col];
        }
      }
    }
    return counter;
};

maxIncreaseKeepingSkyline([
  [52,49,25],
  [100,56,51],
  [62,55,80]
])
