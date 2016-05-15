import Number from '../lib/Number';

import NexmoStub from './NexmoStub';

var numberAPIs = [
  'getPricing',
  'getPhonePricing',
  'getNumbers',
  'searchNumbers',
  'buyNumber',
  'cancelNumber',
  'updateNumber'
];

describe('Number Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(numberAPIs, Number);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(numberAPIs, Number);
  });
  
});
