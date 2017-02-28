function LinkedList() {
	this.head = null;
};

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
};

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

// 1.Create a new node using val
// 2. Traverse to the end of the list
// 3. Make the last node's 'next' value point to the new node
LinkedList.prototype.append = function(val) {
	var newNode = {
		data: val,
		next: null
	};

	if (this.isEmpty()) {
		this.head = newNode;
		return;
	}

	var current = this.head;

	while (current.next !== null) {
		current = current.next;

	}

	current.next = newNode;

};

LinkedList.prototype.contains = function(val) {
	var current = this.head; 

	while (current !== null) {
		if (current.data === val) {
			return true;
		}
		current = current.next;
	}
	return false;
};

// [5] -> [10] -> [15] -> [20] -> null
// prev     current

LinkedList.prototype.remove = function(val) {
	if (!this.contains(val)) {
		return;
	}

	if (this.head.data === val) {
		this.head = this.head.next;
		return;
	}

	var prev = null;
	var curr = this.head;

	while (curr.data !== val) {
		prev = curr;
		curr = curr.next;
	}

	prev.next = curr.next;
};

LinkedList.prototype.print = function() {
	var output = '[';
	var current = this.head;

	while (current !== null) {
		output += current.data;
		if(current.next !== null) {
			output += ',';
		}
		current = current.next;
	}

	output += ']';
	console.log(output);
};

LinkedList.prototype.unshift = function(val) {
	var newNode = {
		data: val,
		next: this.head.next

	};
	this.head = newNode;
};

LinkedList.prototype.find = function(position) {
	var currentNode = this.head;
	var counter = 2
	while(counter !== position) {
		currentNode = currentNode.next;
		counter++
	}
	return currentNode;
}

LinkedList.prototype.insert = function(val, position) {
	var prev = null
	var newNode = {
		data: val,
		next: null
	};
	var current = this.find(position);
	newNode.next = current.next;
	current.next = newNode;

}

var list = new LinkedList();
list.append(10);
list.append(15);
list.append(20);
list.append(25);
list.prepend(5);
list.prepend(2);
list.unshift(3);
list.unshift(22);
list.prepend(200);
list.insert(3, 2);
list.insert(400, 5);
list.insert(31,4);
console.log(list.contains(7));
console.log(list.size());
console.log(list.isEmpty());
list.print();

