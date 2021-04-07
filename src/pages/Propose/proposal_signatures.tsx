// Order is very important!!!!

// Enter ordered list of function signatures of functions to be called on proposal execution
// The array must be the same length as all other parameter arrays!

// See example below and change accordingly

// In our targets bTrustContractAddress our proposal must call balanceOf function which takes an address as parameter
// Therefore the function signature is 'balanceOf(address)' if it took address and string it would be balanceOf(address, string

export const signatures = ['balanceOf(address)']
