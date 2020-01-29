// Given a binary tree, return the inorder traversal of its nodes' values.
// Inorder traversal is traversing a tree from left node to root to right node.

// Definition for a binary tree node:
//    function TreeNode(val) {
//       this.val = val;
//       this.left = this.right = null;
//     }

// Example:
// Input:
//    1
//     \
//      2
//     /
//    3
// Output: [1,3,2]

var inorderTraversal = function(root) {
  let order = []
  if (!root) return []

  return checkNode(root)

  function checkNode(node) {
    if (node !== null) {
      // check left node first
      if (node.left !== null) {
        checkNode(node.left)
      }
      // then check root value
      order.push(node.val)

      // lastly, check right node
      if (node.right !== null) {
        checkNode(node.right)
      }
    }
    return order
  }
};
