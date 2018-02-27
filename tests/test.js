var should = require('should');
var _ = require('lodash');
require('../src/only.js')

describe('_.only', function () {

    it('Returns an array with unique numeric values', function (done) {
        var arr = [{a:12, b:5}, {a:6}, {a:12, b:999}];
        _.only(arr,'a').should.eql([12,6]);
        done();
    });

    it('Returns an array with unique alphanumeric values', function (done) {
        var arr = [{a:'ABC1', b:5}, {a:'DEF'}, {a:'ABC1', b:999}];
        _.only(arr, 'a').should.eql(['ABC1','DEF']);
        done();
    });

    it('Is case-sensitive when considering uniqueness', function (done) {
        var arr = [{a:'ABC'}, {a:'DEF'}, {a:'abc'}];
        _.only(arr, 'a').should.eql(['ABC','DEF','abc']);
        done();
    });

    it('Returns an array of mixed numeric and alphanumeric values if that is what is contained in the requested property', function (done) {
        var arr = [{a:'ABC'}, {a:12}, {a:'DEF'}];
        _.only(arr, 'a').should.eql(['ABC',12,'DEF']);
        done();
    });

    it('Returns an empty array when the input array is empty', function (done) {
        var arr = [];
        _.only(arr, 'a').should.eql([]);
        done();
    });

    it('Returns an empty array when an unknown property is requested', function (done) {
        var arr = [{a:'ABC', b:5}, {a:'DEF'}, {a:'ABC', b:999}];
        _.only(arr, 'z').should.eql([]);
        done();
    });

    it('Ignores objects that don\'t contain the requested property', function (done) {
        var arr = [{a:'ABC'}, {a:'DEF'}, {b:999}, {a:'ZZZZ'}];
        _.only(arr, 'a').should.eql(['ABC','DEF','ZZZZ']);
        done();
    });

});
