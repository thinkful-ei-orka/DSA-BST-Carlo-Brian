const BST = require('./BST');
const BinarySearchTree = require('./BST');

// Question 4
// Sum of tree

function main() {
    const newTree = new BST();
    newTree.insert(3)
    newTree.insert(1)
    newTree.insert(4)
    newTree.insert(6)
    newTree.insert(9)
    newTree.insert(2)
    newTree.insert(5)
    newTree.insert(7)

    // newTree.insert('E')
    // newTree.insert('A')
    // newTree.insert('S')
    // newTree.insert('Y')
    // newTree.insert('Q')
    // newTree.insert('U')
    // newTree.insert('E')
    // newTree.insert('S')
    // newTree.insert('T')
    // newTree.insert('I')
    // newTree.insert('O')
    // newTree.insert('N')

    // console.log(newTree)

    console.log(findHeight(newTree));
    // console.log(verifyBST(newTree));
    // console.log('----------------');
    //console.log(thirdLargest(newTree, []));

    // console.log(thirdLargest(newTree, newTree.key));
    console.log(findShort(newTree));
    console.log(balanced(newTree));
    // console.log(createBalanced([1, 3, 5, 7, 9, 11]));
}

function findHeight(tree) {
    if (!tree) {
        return 0;
    }

    let leftDepth = findHeight(tree.left);
    let rightDepth = findHeight(tree.right);

    if (leftDepth > rightDepth) {
        return leftDepth + 1;
    } else {
        return rightDepth + 1;
    }
}

function findShort(tree) {
    if (!tree) {
        return 0;
    }

    let leftDepth = findHeight(tree.left);
    let rightDepth = findHeight(tree.right);

    if (leftDepth < rightDepth) {
        return leftDepth + 1;
    } else {
        return rightDepth + 1;
    }
}

function verifyBST(tree) {
    if(!tree) {
        return;
    }

    if(tree.left && tree.left.key > tree.key) {
        return false;
    }

    if(tree.right && tree.right.key < tree.key) {
        return false;
    }

    verifyBST(tree.left);
    verifyBST(tree.right);

    return true;
}

function thirdLargest(tree, store) {
    if(!tree) {
        return;
    }

    thirdLargest(tree.right, store);

    store.push(tree.key);

    thirdLargest(tree.left, store);

    return store[2];
}



function balanced(tree){
    if (!tree) {
        return 0;
    }

    const highSide = findHeight(tree);
    const lowSide = findShort(tree);

    if (highSide - lowSide > 1 ) {
        return false
    } else {
        return true
    }
    
}

function createBalanced(arr) {
    if(!arr.length) {
        return null;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const middleValue = arr[middleIndex];
    const node = new BinarySearchTree(middleValue);

    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex + 1);

    const leftSub = createBalanced(left);
    const rightSub = createBalanced(right);

    node.left = leftSub;
    node.right = rightSub;

    return node;
}

// // Better performance
// function createBalanced(arr, start=0, end=arr.length-1) {
//     if(start > end) {
//         return null;
//     }

//     const middleIndex = Math.floor(end + start / 2);
//     const middleValue = arr[middleIndex];
//     const node = new BinarySearchTree(middleValue);

//     const leftSub = createBalanced(arr, start, middleIndex-1);
//     const rightSub = createBalanced(arr, middleIndex+1, end);

//     node.left = leftSub;
//     node.right = rightSub;

//     return node;
// }

main()
