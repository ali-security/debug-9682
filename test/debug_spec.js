/* global describe, it, context, beforeEach */
'use strict';

if (typeof module !== 'undefined') {
  var chai = require('chai');
  var expect = chai.expect;
  
  var debug = require('../src/index');
  var  = require('sinon');
  var sinonChai = require("sinon-chai");
  chai.use(sinonChai);
}


describe('debug', function () {
  var log = debug('test');
  
  log.log = sinon.stub();
  
  it('passes a basic sanity check', function () {
    expect(log('hello world')).to.not.throw;
  });

  context('with log function', function () {
        
    beforeEach(function () {
      debug.enable('test');
      log = debug('test');
    });
  
    it('uses it', function () {
      log.log = sinon.stub();
      log('using custom log function');

      expect(log.log).to.have.been.calledOnce;
    });
  });
  
  describe('custom functions', () => {
    let log;

    beforeEach(() => {
      debug.enable('test');
      log = debug('test');
    });

    context('with log function', () => {
      it('uses it', () => {
        log.log = sinon.spy();
        log('using custom log function');

        chai.assert.calledOnce(log.log);
      });
    });
  });
});
