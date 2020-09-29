// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


// function buildTree(preorder, inorder) {
//     let rootVal = preorder.shift();
//     let rootIndex = inorder.indexOf(rootVal);
//     const root = new TreeNode(rootVal);

//     let left = inorder.slice(0, rootIndex);
//     let right = inorder.slice(rootIndex + 1);

//     function build(curr, prev) {
//         if(!preorder.length) return;
//         let currVal = preorder.shift();
//         let split = inorder.indexOf(curr.val);
//         console.log(split)
//         let currIndex = inorder.indexOf(currVal);
//         const newNode = new TreeNode(currVal);

//         let newLeft = inorder.slice(0, split)
//         let newRight= inorder.slice(split + 1);

//         if(newLeft.includes(currVal)) {
//             while(curr) {
//                 if(!curr.left) {
//                     curr.left = newNode

//                     return build(curr);
//                 }
//                 curr = curr.left;
//             }
//         } else if(newRight.includes(currVal)) {
//             while(curr) {
//                 if(!curr.right) {
//                     curr.right = newNode
//                     return build(curr);
//                 }
//                 curr = curr.right;
//             }
//         }


//     }
//     build(root);

//     return root;
// }

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

// function DFSPreOrder() {
//     let data = [];
//     let current = this.root;
//     function traverse(node) {
//         data.push(node.value);
//         if(node.left) traverse(node.left);
//         if(node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
// }

function buildTree(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let rootIndex = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);

    let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);

    root.left = leftTree;
    root.right = rightTree;

    return root;

}
