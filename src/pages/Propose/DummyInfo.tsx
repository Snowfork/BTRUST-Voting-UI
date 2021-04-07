import { calldata } from './proposal_calldata'
import { description } from './proposal_description'
import { signatures } from './proposal_signatures'
import { targets } from './proposal_targets'
import { values } from './proposal_values'

export const DummyInfo = `# 

function propose(
    address[] memory targets, 
    uint[] memory values, 
    string[] memory signatures, 
    bytes[] memory calldatas, 
    string memory description
) 
returns (uint)

**targets:** The ordered list of target addresses for calls to be made during proposal execution. This array must be the same length as all other array parameters in this function.

**Your targets input = ${targets} ** 
-> change this value in **proposal_targets.tsx file**

**values:** The ordered list of values (i.e. msg.value) to be passed to the calls made during proposal execution. This array must be the same length as all other array parameters in this function.

**Your values input =${values} **  
-> change this value in **proposal_values.tsx file**

**signatures:** The ordered list of function signatures to be passed during execution. This array must be the same length as all other array parameters in this function.

**Your singatures input = ${signatures} **
-> change this value in **proposal_signatures.tsx file**

**calldatas:** The ordered list of data to be passed to each individual function call during proposal execution. This array must be the same length as all other array parameters in this function.

**Your calldata input =${calldata} ** 
-> change this value in **proposal_calldata.tsx file**

**description:** A human readable description of the proposal and the changes it will enact.

**Your description input ** =${description}
-> change this value in **proposal_description.tsx file**

**RETURN:** The ID of the newly created proposal.

`