const CircularQueue = function (k) {
   this.size = k
   this.queue = []
   this.start1 = 0
   this.end1 = 0
   this.start2 = 0
   this.end2 = 0
}

CircularQueue.prototype.isFull = function () {
   if (this.end2 - this.start2 + this.end1 - this.start1 >= this.size) {
      return true
   }
   return false
}

CircularQueue.prototype.isEmpty = function () {
   if (this.end2 - this.start2 + this.end1 - this.start1 <= 0) {
      return true
   }
   return false
}
CircularQueue.prototype.Front = function () {
   if (this.isEmpty()) {
      return -1
   }
   return this.queue[this.start2] === undefined ? this.queue[this.start1] : this.queue[this.start2]
}
CircularQueue.prototype.Rear = function () {
   if (this.isEmpty()) {
      return -1
   }
   return this.queue[this.end1 - 1] === undefined ? this.queue[this.end2 - 1] : this.queue[this.end1 - 1]
}

CircularQueue.prototype.enQueue = function (value) {
   if (this.isFull()) {
      return false
   }
   if (this.end2 <= this.size - 1) {
      this.queue[this.end2++] = value
   } else {
      this.queue[this.end1++] = value
   }
   return true
}
CircularQueue.prototype.deQueue = function () {
   if (this.isEmpty()) {
      return false
   }

   if (this.queue[this.start2] !== undefined) {

      this.queue[this.start2++] = undefined
   } else {
      this.queue[this.start1++] = undefined
   }
   return true
}

CircularQueue.prototype.printQueue = function () {
   var str = "";
   for (var i = 0; i < this.queue.length; i++)
      str += this.queue[i] + " ";
   return str;
}

exports.CircularQueue = CircularQueue;