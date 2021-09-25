// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import '../helpers/BaseStorage.sol';

contract VoteStorage is BaseStorage {

    mapping(address => bool) public voters;
    uint public voteTotal;

    function castVote(uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender], "Vote already cast from this address");

        // require a valid candidate, making sure their index is in mapping
//        require(_candidateId > 0 && _candidateId <= candidatesCount, "Candidate ID is not in range of candidates");

//        require(candidatesCount >= 2, "Must be at least 2 candidates before votes can be cast");

        // record that voter has voted, making their address key true
        voters[msg.sender] = true;

        // update candidate vote Count, for matched id, based on key
//        candidates[_candidateId].voteCount++;
        voteTotal++;

        // trigger voted event
//        emit votedEvent(_candidateId);
    }
}