//const { compABI } = JSON.parse(fs.readFileSync('Comp.json', 'utf8'))
const compABI = require('./Comp.json')
const govABI = require('./GovernorAlpha.json')
const timelockABI = require('./Timelock.json')
const {
    encodeParameters,
  } = require('../Utils/Ethereum');


// used for dummy proposal 
/*
Proposal Function -> function propose(address[] memory targets, 
                                         uint[] memory values, 
                                         string[] memory signatures, 
                                         bytes[] memory calldatas, 
                                         string memory description
                                         ) returns (uint)

const targets = ['0xAe616e92935aBdE69BfFF95E675dF9CfD42ef227'] //comp address
const values  =   ["0"]

const calldata = [encodeParameters(['address'], [acct])]; // ['0x000000000000000000000000f94eefdd507784260535d6b0777f7d7e661ccfe3']
const signatures = ["getBalanceOf(address)"]
const description = "This is a meaningless test proposal"

*/

const acct = '0xF94EeFdd507784260535D6B0777F7d7e661cCfe3'

const info =  {
    compAddress :'0xAe616e92935aBdE69BfFF95E675dF9CfD42ef227',
    govAddress :'0x2a4Feed008D8BBD9a6eB29E8E0fEC5051131cee6',
    timelockAddress: '0x881F16fe4F55CEe7D5D7890179531Ff8085a7167',
    compABI,
    govABI,
    timelockABI
}

const callDatas = [encodeParameters(['address'], [acct])]

module.exports = info
console.log(callDatas)
