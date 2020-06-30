require 'middle_letter'

describe '#get_middle' do

  it 'returns a when passed a' do
    expect(get_middle("a")).to eq("a")
  end

  it 'returns of when passed of' do
    expect(get_middle('of')).to eq('of')
  end

  it 'returns t when passed testing' do
    expect(get_middle('testing')).to eq('t')
  end

  it 'returns es when passed test' do
    expect(get_middle('test')).to eq('es')
  end

end