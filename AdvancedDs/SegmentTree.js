class SegmentTree {
    constructor(arr) {
        this.arr = arr.slice(0)
        this.n = arr.length
        this.segTree = new Array(4*this.n).fill(0)
        this.#buildTree(0, this.n - 1, 0)
    }

    update(i, val) {
        this.#update(0, this.n - 1, 0, i, val)
    }

    query(start, end) {
        return this.#query(0,  this.n - 1, 0, start, end)
    }

    #buildTree(l, r, ind) {
        if(l==r) {
            this.segTree[ind] = this.arr[l]
            return
        }
        let mid = l + Math.floor((r - l)/2)
        this.#buildTree(l, mid, 2*ind + 1)
        this.#buildTree(mid + 1, r, 2*ind + 2)
        this.segTree[ind] = this.segTree[2*ind + 1] + this.segTree[2*ind + 2]
    }

    #update(l, r, ind, i, val) {
        if(l==r) {
            this.segTree[ind] = val
            this.arr[i] = val
            return
        }
        let mid = l + Math.floor((r - l)/2)
        if(i <= mid) {
            this.#update(l, mid, 2*ind + 1, i, val)
        }
        else {
            this.#update(mid + 1, r, 2*ind + 2, i, val)
        }
        this.segTree[ind] = this.segTree[2*ind + 1] + this.segTree[2*ind + 2]
    }

    #query(l, r, ind, start, end) {
        if(l > end || r < start) return 0
        if(l >= start && r <= end) return this.segTree[ind]
        let mid = l + Math.floor((r - l)/2)
        return this.#query(l, mid, 2*ind + 1, start, end) + this.#query(mid + 1, r, 2*ind + 2, start, end)
    }
}

module.exports = {SegmentTree}