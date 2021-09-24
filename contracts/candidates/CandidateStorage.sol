// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CandidateStorage {

  mapping(uint => Candidate) public candidates;

  struct Candidate {
    uint id;
    bytes32 name;
    uint voteCount;
    bytes32 party;
  }

  uint latestCandidateId = 0;


  function registerCandidate(bytes32 _name, bytes32 _party) public returns(uint) {
    latestCandidateId++;


    candidates[latestCandidateId] = Candidate(latestCandidateId, _name, 0, _party);

    return latestCandidateId;
  }

}
