import { encodeData } from './helpers'

// Order is very important!!!!

// Enter ordered list of data to be passed to each individual function call to be made on proposal execution
// The array must be the same length as all other parameter arrays!

// See example below and change accordingly

// In our targets bTrustContractAddress our proposal must call balanceOf function which takes an address as parameter
// The function we will call in target bTrustContractAddress is <balanceOf(address account)>
// Therefore we <encodeData(['typeParameter'], [paramValue])

// We encode the data to be passed as below

//const calldata = [this.encodeParameters(['address'], [acct])]

const addressParameter = '0x77fE84B9b278F979d904F358C729363997280205'

//console.log("MY ENCODED:  ", encodeData(['address'], [addressParameter]))

export const calldata = [encodeData(['address'], [addressParameter])]
