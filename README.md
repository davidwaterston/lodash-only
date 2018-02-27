# Lodash only

[![Build Status](https://travis-ci.org/davidwaterston/lodash-only.svg)](https://travis-ci.org/davidwaterston/lodash-only)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-only/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-only?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-only.svg)](https://www.npmjs.com/package/lodash-only/)


Extend [Lodash](https://lodash.com/) to take an array of objects and the name of a property and return an array containing only the unique values of that property.
Returns a new array with the original array left unchanged.  


### _.only(arr, property)

**Arguments**  
arr (array): The array of objects to be examined. Required.  
property (string): The name of the property we are seeking the unique values of. Required.

**Returns**  
(array): An array of the unique values of _property_. The order of result values is determined by the order they occur in the input array.


### Examples  
```
var _ = require('lodash')
require('lodash-only')

_.only([{a:12, b:5}, {a:6}, {a:12, b:999}],'a') // [12,6]
_.only([{a:'ABC1', b:5}, {a:'DEF'}, {a:'ABC1', b:999}], 'a') // ['ABC1','DEF']
_.only([{a:'ABC'}, {a:'DEF'}, {a:'abc'}], 'a') // ['ABC','DEF','abc']
_.only( [{a:'ABC'}, {a:12}, {a:'DEF'}], 'a') // ['ABC',12,'DEF']
_.only([], 'a') // []
_.only([{a:'ABC', b:5}, {a:'DEF'}, {a:'ABC', b:999}], 'z') // []
_.only([{a:'ABC'}, {a:'DEF'}, {b:999}, {a:'ZZZZ'}], 'a') // ['ABC','DEF','ZZZZ']
```


### Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    |
| 1.0.0 | 27th February, 2018 | Initial release. |
