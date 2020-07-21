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

    console.log(verifyBST(newTree));
    console.log('----------------');
    console.log(thirdLargest(newTree, []));




    // console.log(createBalanced([1, 3, 5, 7, 9, 11]));

    console.log(isEqual([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]))
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
        if (!tree) {
            return;
        }

        if (tree.left && tree.left.key > tree.key) {
            return false;
        }

        if (tree.right && tree.right.key < tree.key) {
            return false;
        }

        verifyBST(tree.left);
        verifyBST(tree.right);

        return true;
    }

    function thirdLargest(tree, store) {
        if (!tree) {
            return;
        }

        thirdLargest(tree.right, store);
    }

    function isEqual(arr1, arr2) {
        if (arr1[0] !== arr2[0] || arr1.length !== arr2.length) {
            return false;
        }

        let root = arr1[0];
        let nextLowestOne;
        let nextHighestOne;
        let nextLowestTwo;
        let nextHighestTwo;
        let i = 1;

        // iterate through first array
        // find index of number in second array (indexOf)
        // use find in a slice from current index to end (of both)
        // use find to check next lowest and next highest
        // compare
        // splice out nextLowest and nextHighest from each array
        // i++

        while (arr1.length > 2) {
            let tempRoot = arr1[i];
            let indexTwo = arr2.indexOf(tempRoot);

            if (tempRoot > root) {
                nextLowestOne = arr1.slice(i).find(num => num < tempRoot && num > root);
                nextHighestOne = arr1.slice(i).find(num => num > tempRoot);

                nextLowestTwo = arr2.slice(indexTwo).find(num => num < tempRoot && num > root);
                nextHighestTwo = arr2.slice(indexTwo).find(num => num > tempRoot);
            } else if (tempRoot < root) {
                nextLowestOne = arr1.slice(i).find(num => num < tempRoot);
                nextHighestOne = arr1.slice(i).find(num => num > tempRoot && num < root);

                nextLowestTwo = arr2.slice(indexTwo).find(num => num < tempRoot);
                nextHighestTwo = arr2.slice(indexTwo).find(num => num > tempRoot && num < root);
            }
            // find next number > root, find next number < root

            console.log('arr1 :', arr1);
            console.log('arr2 :', arr2);
            console.log('current num :', arr1[i]);
            console.log('next lowest 1: ', nextLowestOne);
            console.log('next lowest 2: ', nextLowestTwo);
            console.log('next highest 1: ', nextHighestOne);
            console.log('next highest 2: ', nextHighestTwo);
            console.log('-------------------');

            if (nextLowestOne !== nextLowestTwo || nextHighestOne !== nextHighestTwo) {
                return false;
            }

            arr1.splice(arr1.indexOf(tempRoot), 1);
            arr1.splice(arr1.indexOf(nextLowestOne), 1);
            arr1.splice(arr1.indexOf(nextHighestOne), 1);

            arr2.splice(arr2.indexOf(tempRoot), 1);
            arr2.splice(arr2.indexOf(nextLowestTwo), 1);
            arr2.splice(arr2.indexOf(nextHighestTwo), 1);
        }

        return true;
    }



    function balanced(tree) {
        if (!tree) {
            return 0;
        }

        const highSide = findHeight(tree);
        const lowSide = findShort(tree);

        if (highSide - lowSide > 1) {
            return false
        } else {
            return true
        }

    }

    function createBalanced(arr) {
        if (!arr.length) {
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

    main();
