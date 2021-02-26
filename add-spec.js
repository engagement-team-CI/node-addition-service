const {describe, it} = require('mocha')
const { expect } = require('chai')

const add  = require('./add');

describe('add', () => {
  describe('1 + 1', () => it('should be 2', () => expect(add(1, 1)).to.equal(2)))
  describe('2 + 2', () => it('should be 4', () => expect(add(2, 2)).to.equal(4)))
  describe('3 + 3', () => it('should be 6', () => expect(add(3, 3)).to.equal(6)))
  describe('4 + 4', () => it('should be 8', () => expect(add(4, 4)).to.equal(8)))
  describe('5 + 5', () => it('should be 10', () => expect(add(5, 5)).to.equal(10)))
  describe('6 + 6', () => it('should be 12', () => expect(add(6, 6)).to.equal(12)))
  describe('7 + 7', () => it('should be 14', () => expect(add(7, 7)).to.equal(14)))
  describe('8 + 8', () => it('should be 16', () => expect(add(8, 8)).to.equal(16)))
})
