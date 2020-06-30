const expect = require('chai').expect;
const MiddleLetter = require('../lib/MiddleLetter')

describe('middle letter', () => {

  const getMiddle = (new MiddleLetter).getMiddle

  it('returns A when passed A', () => {
    expect(getMiddle("A")).to.equal("A");
  });

  it('returns of when passed of', () => {
    expect(getMiddle("of")).to.equal("of")
  });

});