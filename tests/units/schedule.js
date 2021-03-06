'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/schedule');
const testData = require('../templates/schedule.json');
const stationData = require('../templates/station.json');

const moduleSuite = new Suite('Schedule module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('Schedule');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('rid', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.an('string');
  expect(IUUT.rid).to.be.equal('rid');
}));

moduleSuite.addTest(new Test('rid null', () => {
  const IUUT = new UUT();
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.equal(null);
}));

moduleSuite.addTest(new Test('serviceStartingDate', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.an('string');
  expect(IUUT.serviceStartingDate).to.be.equal('ssd');
}));

moduleSuite.addTest(new Test('serviceStartingDate null', () => {
  const IUUT = new UUT();
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.equal(null);
}));

moduleSuite.addTest(new Test('trainOperatingCompany', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.an('string');
  expect(IUUT.trainOperatingCompany).to.be.equal('toc');
}));

moduleSuite.addTest(new Test('trainOperatingCompany null', () => {
  const IUUT = new UUT();
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.equal(null);
}));

moduleSuite.addTest(new Test('trainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.trainId).to.not.equal(undefined);
  expect(IUUT.trainId).to.be.an('string');
  expect(IUUT.trainId).to.be.equal('trainId');
}));

moduleSuite.addTest(new Test('trainId null', () => {
  const IUUT = new UUT();
  expect(IUUT.trainId).to.not.equal(undefined);
  expect(IUUT.trainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('uniqueID', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.an('string');
  expect(IUUT.uniqueID).to.be.equal('uid');
}));

moduleSuite.addTest(new Test('uniqueID null', () => {
  const IUUT = new UUT();
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.equal(null);
}));

moduleSuite.addTest(new Test('origin', () => {
  const IUUT = new UUT(Object.assign(testData, { OR: [stationData] }));
  expect(IUUT.origin).to.not.equal(undefined);
  expect(IUUT.origin).to.be.an('object');
  expect(IUUT.origin.constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('operational origin', () => {
  const IUUT = new UUT(Object.assign(testData, { OR: undefined, OPOR: [stationData] }));
  expect(IUUT.origin).to.not.equal(undefined);
  expect(IUUT.origin).to.be.an('object');
  expect(IUUT.origin.constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('origin null', () => {
  const IUUT = new UUT();
  expect(IUUT.origin).to.not.equal(undefined);
  expect(IUUT.origin).to.be.equal(null);
}));

moduleSuite.addTest(new Test('passing points', () => {
  const IUUT = new UUT(Object.assign(testData, { PP: [stationData, stationData] }));
  expect(IUUT.passingPoints).to.not.equal(undefined);
  expect(IUUT.passingPoints).to.be.an('array');
  expect(IUUT.passingPoints).to.have.lengthOf(2);
  expect(IUUT.passingPoints[0].constructor.name).to.be.equal('Station');
  expect(IUUT.passingPoints[1].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('passing points null', () => {
  const IUUT = new UUT();
  expect(IUUT.passingPoints).to.not.equal(undefined);
  expect(IUUT.passingPoints).to.be.an('array');
  expect(IUUT.passingPoints).to.have.lengthOf(0);
}));

moduleSuite.addTest(new Test('intermediate points', () => {
  const IUUT = new UUT(Object.assign(testData, { IP: [stationData, stationData] }));
  expect(IUUT.intermediatePoints).to.not.equal(undefined);
  expect(IUUT.intermediatePoints).to.be.an('array');
  expect(IUUT.intermediatePoints).to.have.lengthOf(2);
  expect(IUUT.intermediatePoints[0].constructor.name).to.be.equal('Station');
  expect(IUUT.intermediatePoints[1].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('intermediate points null', () => {
  const IUUT = new UUT();
  expect(IUUT.intermediatePoints).to.not.equal(undefined);
  expect(IUUT.intermediatePoints).to.be.an('array');
  expect(IUUT.intermediatePoints).to.have.lengthOf(0);
}));

moduleSuite.addTest(new Test('operational stops', () => {
  const IUUT = new UUT(Object.assign(testData, { OPIP: [stationData, stationData] }));
  expect(IUUT.operationalStops).to.not.equal(undefined);
  expect(IUUT.operationalStops).to.be.an('array');
  expect(IUUT.operationalStops).to.have.lengthOf(2);
  expect(IUUT.operationalStops[0].constructor.name).to.be.equal('Station');
  expect(IUUT.operationalStops[1].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('operational stops null', () => {
  const IUUT = new UUT();
  expect(IUUT.operationalStops).to.not.equal(undefined);
  expect(IUUT.operationalStops).to.be.an('array');
  expect(IUUT.operationalStops).to.have.lengthOf(0);
}));

moduleSuite.addTest(new Test('destination', () => {
  const IUUT = new UUT(Object.assign(testData, { DT: [stationData] }));
  expect(IUUT.destination).to.not.equal(undefined);
  expect(IUUT.destination).to.be.an('object');
  expect(IUUT.destination.constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('operational destination', () => {
  const IUUT = new UUT(Object.assign(testData, { DT: undefined, OPDT: [stationData] }));
  expect(IUUT.destination).to.not.equal(undefined);
  expect(IUUT.destination).to.be.an('object');
  expect(IUUT.destination.constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('destination null', () => {
  const IUUT = new UUT();
  expect(IUUT.destination).to.not.equal(undefined);
  expect(IUUT.destination).to.be.equal(null);
}));

moduleSuite.addTest(new Test('listMultiStations', () => {
  const IUUT = new UUT(Object.assign(testData, { OPIP: [stationData, stationData] }));
  expect(IUUT.listMultiStations).to.not.equal(undefined);
  expect(IUUT.listMultiStations).to.be.an('function');
  
  const opip = IUUT.listMultiStations('OPIP');

  expect(opip).to.be.an('array');
  expect(opip).to.have.lengthOf(2);
  expect(opip[0].constructor.name).to.be.equal('Station');
  expect(opip[1].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('listMultiStations incorrect input', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.listMultiStations).to.not.equal(undefined);
  expect(IUUT.listMultiStations).to.be.an('function');

  const opip = IUUT.listMultiStations('NK');

  expect(opip).to.be.an('array');
  expect(opip).to.have.lengthOf(0);
}));

moduleSuite.addTest(new Test('getSingleStation', () => {
  const IUUT = new UUT(Object.assign(testData, { OR: stationData }));
  expect(IUUT.getSingleStation).to.not.equal(undefined);
  expect(IUUT.getSingleStation).to.be.an('function');

  const or = IUUT.getSingleStation('OR');

  expect(or).to.be.an('object');
  expect(or.constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('getSingleStation incorrect input', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.getSingleStation).to.not.equal(undefined);
  expect(IUUT.getSingleStation).to.be.an('function');

  const opip = IUUT.getSingleStation('NK');

  expect(opip).to.not.equal(undefined);
  expect(opip).to.be.equal(null);
}));

module.exports = () => { return moduleSuite; };
