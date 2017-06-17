"use strict";
const chai = require('chai');
const expect = chai.expect
const Node = require('../node');

describe("Node", function() {
	let node;
	context("upon instantiation with no value", function() {
		beforeEach(function() {
			node = new Node();
		})

		it("has a value of undefined for val", function() {
			expect(node.val).to.equal(undefined);
		})

		it("has a value of undefined for next", function() {
			expect(node.next).to.equal(undefined);
		})
	})

	context("upon instantiation with a value", function() {
		beforeEach(function() {
			node = new Node(1);
		})

		it("has a value of 1 for val", function() {
			expect(node.val).to.equal(1);
		})

		it("has a value of undefined for next", function() {
			expect(node.next).to.equal(undefined);
		})
	})

	it("can add another Node to the next property", function() {
		node = new Node(1);
		node.next = new Node(2);

		expect(node.next.val).to.equal(2);
		expect(node.next).to.be.an("object");
		expect(node.next).to.be.an.instanceof(Node);
	})

	it("can't add a non-Node to next property", function() {
		node = new Node(1);
		node.next = 1;
		expect(node.next).to.equal(undefined);
		
		node.next = [];
		expect(node.next).to.equal(undefined);
	})
})