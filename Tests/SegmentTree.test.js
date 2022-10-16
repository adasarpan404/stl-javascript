const { SegmentTree } = require("../AdvancedDs/SegmentTree");
const arr = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]

test("Updation testing", () => {
    let segTree = new SegmentTree(arr)
    segTree.update(3, 100)
    expect(segTree.query(3, 3)).toBe(100)
})

test("Query testing", () => {
    let segTree = new SegmentTree(arr)
    expect(segTree.query(0, arr.length - 1)).toBe(150)
    expect(segTree.query(1, 3)).toBe(42)
    segTree.update(2, 100)
    expect(segTree.query(1, 3)).toBe(132)
    segTree.update(0, 25)
    expect(segTree.query(0, 1)).toBe(50)
    expect(segTree.query(0, 0)).toBe(25)
})