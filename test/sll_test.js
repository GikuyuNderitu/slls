"use strict";
const chai = require('chai');
const expect = chai.expect;

const SLL = require('../sll');

describe("SLL", function() {
	let sll;
	beforeEach(function() {
		sll = new SLL();
	})

	context("has the correct objecthood", function () {
		it("is an object", function () {
			expect(sll).to.be.an("object");
		})

		it("is an SLL object", function () {
			expect(sll).to.be.an.instanceof(SLL);
		})
	})



	describe("#first()", function () {
		context("upon initialization", function (){
			it("returns undefined.", function () {
				expect(sll.first()).to.equal(undefined);
			})
		})

		context("after adding a value", function () {
			it("returns the first value", function () {
				sll.add(1);
				expect(sll.first()).to.equal(1);
			})
		})
	})

	describe("#add(val)", function() {
		it("adds a value as a the first member of the list", function() {
			sll.add(1);
			expect(sll.first()).to.equal(1);
		})

		context("with an already populated list", function() {
			it("adds a value to the end of the list", function() {
				sll.add(1).add(2);
				expect(sll.first()).to.equal(1);
			})
		})
	})

	describe("#addFront(val)", function() {
		context("with nothing in the list", function() {
			it("adds 1 to the front of the list", function() {
				sll.addFront(1);
				expect(sll.first()).to.equal(1);
			})
		})

		context("with an already populated list", function() {
			it("adds 2 to the front of the list", function() {

			})
		})
	})

	describe("#popFront()", function() {
		context("with nothing in the list", function () {
			it("returns undefined", function() {
				expect(sll.popFront()).to.equal(undefined);
			})
		})

		context("with a populated list", function() {
			it("returns 1 and the new first should be 2", function() {
				sll.add(1).add(2).add(3);			
				expect(sll.popFront()).to.equal(1);
				expect(sll.first()).to.equal(2);
			})
		})
	})

	describe("#pop()", function() {
		context("with nothing in the list", function() {
			it("returns undefined", function() {
				expect(sll.pop()).to.equal(undefined);
			})
		})

		context("with a populated list", function() {
			it("returns 3 and first should be 1", function() {
				sll.add(1).add(2).add(3);			

			})
		})
	})
})