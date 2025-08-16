const { SegmentTree } = require("../nonLinear/segmentTree");
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

test('single element tree works for query and update', () => {
    const st = new SegmentTree([7])
    expect(st.query(0, 0)).toBe(7)
    st.update(0, 3)
    expect(st.query(0, 0)).toBe(3)
})

test('handles negative and mixed values correctly', () => {
    const st = new SegmentTree([-1, -2, 5])
    expect(st.query(0, 2)).toBe(2) // -1 + -2 + 5
    expect(st.query(0, 1)).toBe(-3)
})

test('query with start > end returns 0 (out of range)', () => {
    const st = new SegmentTree([1, 2, 3])
    expect(st.query(2, 1)).toBe(0)
})

test('constructor clones input array (mutating original does not affect tree)', () => {
    const input = [1, 2, 3]
    const st = new SegmentTree(input)
    input[0] = 100
    expect(st.query(0, 2)).toBe(6)
})