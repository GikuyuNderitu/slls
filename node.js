"use strict";
class Node {
	constructor(val) {
		this._val = val || undefined;
		this._next = undefined;
	}

	get val() { return this._val;	}

	set val(val) { this._val = val; }

	get next() { return this._next }

	set next(node) { if(node instanceof Node) this._next = node }

}

module.exports = Node;