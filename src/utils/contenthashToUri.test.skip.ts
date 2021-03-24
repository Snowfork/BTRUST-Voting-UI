import { hexToUint8Array } from './contenthashToUri'

// this test is skipped for now because importing CID results in
// TypeError: TextDecoder is not a constructor

describe('#hexToUint8Array', () => {
  it('common case', () => {
    expect(hexToUint8Array('0x010203fdfeff')).toEqual(new Uint8Array([1, 2, 3, 253, 254, 255]))
  })
})
