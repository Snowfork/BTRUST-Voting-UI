import { valueFormat } from './helpers'

// Order is very important!!!!

// Enter ordered list of values (msg.values) to be passed to the calls to be made on proposal execution
// The array must be the same length as all other parameter arrays!

// See example below and change accordingly

// If no msg.values( required) enter '0' else use

const amountEthToSend = 0
const value1 = valueFormat(amountEthToSend)

//console.log('VALUE 1: ', value1)

export const values = [value1]