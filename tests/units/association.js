'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/association');
const testData = require('../templates/association.json');

const moduleSuite = new Suite('Association module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('Association');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('getRIDFromTrain', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.getRIDFromTrain).to.not.equal(undefined);
  expect(IUUT.getRIDFromTrain).to.be.an('function');

  const IUUTResult = IUUT.getRIDFromTrain({ rid: 'rid' });
  expect(IUUTResult).to.not.equal(undefined);
  expect(IUUTResult).to.be.an('string');
  expect(IUUTResult).to.be.equal('rid');
}));

moduleSuite.addTest(new Test('getRIDFromTrain null', () => {
  const IUUT = new UUT();
  expect(IUUT.getRIDFromTrain).to.not.equal(undefined);
  expect(IUUT.getRIDFromTrain).to.be.an('function');

  const IUUTResult = IUUT.getRIDFromTrain();
  expect(IUUTResult).to.not.equal(undefined);
  expect(IUUTResult).to.be.equal(null);
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tiploc');
}));

moduleSuite.addTest(new Test('tiploc null', () => {
  const IUUT = new UUT();
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.equal(null);
}));

moduleSuite.addTest(new Test('category', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.an('string');
  expect(IUUT.category).to.be.equal('category');
}));

moduleSuite.addTest(new Test('category null', () => {
  const IUUT = new UUT();
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.equal(null);
}));

moduleSuite.addTest(new Test('mainTrain', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.mainTrain).to.not.equal(undefined);
  expect(IUUT.mainTrain).to.be.an('object');
  expect(IUUT.mainTrain).to.be.deep.equal({ rid: 'mainrid' });
}));

moduleSuite.addTest(new Test('mainTrain null', () => {
  const IUUT = new UUT();
  expect(IUUT.mainTrain).to.not.equal(undefined);
  expect(IUUT.mainTrain).to.be.equal(null);
}));

moduleSuite.addTest(new Test('mainTrainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.mainTrainId).to.not.equal(undefined);
  expect(IUUT.mainTrainId).to.be.an('string');
  expect(IUUT.mainTrainId).to.be.equal('mainrid');
}));

moduleSuite.addTest(new Test('mainTrainId null', () => {
  const IUUT = new UUT();
  expect(IUUT.mainTrainId).to.not.equal(undefined);
  expect(IUUT.mainTrainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('assocTrain', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.assocTrain).to.not.equal(undefined);
  expect(IUUT.assocTrain).to.be.an('object');
  expect(IUUT.assocTrain).to.be.deep.equal({ rid: 'assocrid' });
}));

moduleSuite.addTest(new Test('assocTrain null', () => {
  const IUUT = new UUT();
  expect(IUUT.assocTrain).to.not.equal(undefined);
  expect(IUUT.assocTrain).to.be.equal(null);
}));

moduleSuite.addTest(new Test('assocTrainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.assocTrainId).to.not.equal(undefined);
  expect(IUUT.assocTrainId).to.be.an('string');
  expect(IUUT.assocTrainId).to.be.equal('assocrid');
}));

moduleSuite.addTest(new Test('assocTrainId null', () => {
  const IUUT = new UUT();
  expect(IUUT.assocTrainId).to.not.equal(undefined);
  expect(IUUT.assocTrainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('isJoin false', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isJoin).to.not.equal(undefined);
  expect(IUUT.isJoin).to.be.an('function');
  expect(IUUT.isJoin()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isJoin true', () => {
  const IUUT = new UUT(Object.assign({}, testData, { category: 'JJ' }));
  expect(IUUT.isJoin).to.not.equal(undefined);
  expect(IUUT.isJoin).to.be.an('function');
  expect(IUUT.isJoin()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isSplit false', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isSplit).to.not.equal(undefined);
  expect(IUUT.isSplit).to.be.an('function');
  expect(IUUT.isSplit()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isSplit true', () => {
  const IUUT = new UUT(Object.assign({}, testData, { category: 'VV' }));
  expect(IUUT.isSplit).to.not.equal(undefined);
  expect(IUUT.isSplit).to.be.an('function');
  expect(IUUT.isSplit()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isNextTrain false', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isNextTrain).to.not.equal(undefined);
  expect(IUUT.isNextTrain).to.be.an('function');
  expect(IUUT.isNextTrain()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isNextTrain true', () => {
  const IUUT = new UUT(Object.assign({}, testData, { category: 'NP' }));
  expect(IUUT.isNextTrain).to.not.equal(undefined);
  expect(IUUT.isNextTrain).to.be.an('function');
  expect(IUUT.isNextTrain()).to.be.equal(true);
}));

module.exports = () => { return moduleSuite; };

