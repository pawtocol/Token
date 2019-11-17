const suite = require('../node_modules/token-test-suite/lib/suite');
const MyToken = artifacts.require('UPIToken');
const { toBN, toWei } = web3.utils;

contract('MyToken', function (accounts) {
	const INITIAL_SUPPLY = 	toBN(toWei('1000000000', 'ether'));	
	const INITIAL_ALLOWANCE = toBN('0');

	let options = {
		// accounts to test with, accounts[0] being the contract owner
		accounts: accounts,

		// factory method to create new token contract
		create: async function () {
			return await MyToken.new();
		},

		// factory callbacks to mint the tokens
		// use "transfer" instead of "mint" for non-mintable tokens
		mint: async function (token, to, amount) {
			return await token.transfer(to, amount, { from: accounts[0] });
		},

		// optional:
		// also test the increaseApproval/decreaseApproval methods (not part of the ERC-20 standard)
		increaseDecreaseApproval: false,

		// token info to test
		name: 'Pawtocol Network UPI Token',
		symbol: 'UPI',
		decimals: 18,

		// initial state to test
		initialSupply: INITIAL_SUPPLY,
		initialBalances: [
			[accounts[0], INITIAL_SUPPLY]
		],
		initialAllowances: [
			[accounts[0], accounts[1], INITIAL_ALLOWANCE ]
		]
	};

	suite(options);
});