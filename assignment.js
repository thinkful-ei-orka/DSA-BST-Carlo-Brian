const BST = require('./BST')

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

main()
