pragma solidity 0.5.11;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract UPIToken is ERC20Detailed,  ERC20Burnable {
  
    uint256 constant private _INITIAL_SUPPLY = 1000000000 ether;
    
    constructor() 
    	ERC20Detailed("Pawtocol Network UPI Token", "UPI", 18) 
    	public
    {
    	_mint(msg.sender, _INITIAL_SUPPLY);
    }

    function () external {
        revert("Invalid request.");
    }
    
}
