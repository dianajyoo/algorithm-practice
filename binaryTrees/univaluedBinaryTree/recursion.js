/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const isUnivalTree = (root) => {
  if (root === null) {
    return true;
  }

  if (root.left !== null) {
    if (root.val !== root.left.val) {
      return false;
    }
  }

  if (root.right !== null) {
    if (root.val !== root.right.val) {
      return false;
    }
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};
