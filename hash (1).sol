// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionHistory {
    address public owner;
    mapping(address => string[]) public transactionHashes;

    event TransactionRecorded(address indexed sender, string txHash);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function recordTransaction(string memory txHash) external {
        transactionHashes[msg.sender].push(txHash);
        emit TransactionRecorded(msg.sender, txHash);
    }

    function getTransactionHashes() external view returns (string[] memory) {
        return transactionHashes[msg.sender];
    }
}
