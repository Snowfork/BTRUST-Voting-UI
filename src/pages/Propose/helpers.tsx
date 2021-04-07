import ethers from 'ethers'

// Shortcut to avoid passing around  ethers formating
export const valueFormat = (amount: number) => {
  let value: any = '0'
  if (amount) {
    value = ethers.utils.parseEther(amount.toString()) //to 18 decimals
  }
  return value.toString()
}

// encode Data values to pass into parameters
export const encodeData = (types: any, values: any) => {
  const abi = new ethers.utils.AbiCoder()
  return abi.encode(types, values)
}

export const areEqual = (...args: any[]) => {
  const len: number = args.length
  for (let i = 1; i < len; i++){
    if (args[i] === 0 || args[i] !== args[i-1]) return false
  }
  return true
}
