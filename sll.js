"use strict";
const Node = require('./node');
module.exports = SLL;

function SLL() {
	this._head = undefined;
}

SLL.prototype = {
	first() {
		return this._head ? this._head.val : undefined;
	},
	add(val) {
		const newNode = new Node(val);
		if(!this._head) {
			this._head = newNode;
			return this;
		} else if(!this._head.next) {
			this._head.next = newNode;
			return this;
		}

		let runner = this._head.next;
		while(runner.next) {
			runner = runner.next;
		}
		runner.next = newNode;
		return this;
	},
	addFront(val) {
		const newNode = new Node(val);
		newNode.next = this._head;
		this._head = newNode;
		return this;
	},
	pop() {
		if(!this._head) return undefined;
		if(!this._head.next) {
			const val = this._head.val;
			this._head = undefined;
			return val;
		}
		
		let forRunner = this._head, trail = this._head;
		while(forRunner.next) {
			forRunner = forRunner.next;
			trail = trail.next;
		};

		const val = forRunner.val
		trail.next = undefined;
		return val

	},
	popFront() {
		if(!this._head) return undefined;
		const val = this._head.val;
		this._head = this._head.next;
		return val;
	}
}
