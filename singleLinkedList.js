function LinkedList() {
	this.head = null;
}

LinkedList.prototype.isEmpty = function() {
	return this.head === null;
};


// [10] -> [20] -> [30] -> null
LinkedList.prototype.size = function() {
	var current = this.head;
	var count = 0;

	while(current !== null) {
		count ++;
		current = current.next;
	}

	return count;
}

// [5] -> [10] -> [15] -> [20] -> null
// 1. Create a new node with val 
// 2. Make the new node point to the current head
// 3. Update this.head to point to the new node

LinkedList.prototype.prepend = function(val) {
	var newNode = {
		data: val,
		next: this.head
	};

	this.head = newNode;

};

var list = new LinkedList();
list.prepend(10);
list.prepend(5);

console.log(list.size());

