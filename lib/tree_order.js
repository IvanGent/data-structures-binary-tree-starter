function inOrderArray(root) {
  // if the root is null, return an empty array
  if(root === null) return [];
  let nodes = [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  function traverse(node) {
    if(node.left) traverse(node.left);
    nodes.push(node.val);
    if(node.right) traverse(node.right);
  }
  traverse(root);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return nodes;
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if(root === null) return [];
  let nodes = [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  function traverse(node) {
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    nodes.push(node.val);
  }
  traverse(root);
  // return the left array concatenated with the right array
  //   concatenated with the root value
  return nodes;
}


module.exports = {
  inOrderArray,
  postOrderArray
};
