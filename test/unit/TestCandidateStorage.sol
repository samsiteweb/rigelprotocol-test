// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/candidates/CandidateStorage.sol";

contract TestCandidateStorage {
    function testRegisterCandidate() public {

        CandidateStorage _storage =CandidateStorage(DeployedAddresses.CandidateStorage());

        uint _expectedId = 1;

        Assert.equal(_storage.registerCandidate("Samuel", "PDP"), _expectedId, "Should register a candidate with ID 1");
    }
}