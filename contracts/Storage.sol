// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract Storage {
    // store a value of type uint named `number`
    uint256 number;

    // add a function to read the value
    function getNumber() public view returns (uint256) {
        return number;
    }

    // add a funtion to se the value

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }
}
