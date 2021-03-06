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

  it('returns t when passed testing', () => {
    expect(getMiddle("testing")).to.equal("t");
  });

  it('returns es when passed test', () => {
    expect(getMiddle("test")).to.equal("es");
  });

  it('returns dd when passed middle', () => {
    expect(getMiddle("middle")).to.equal("dd");
  });

});