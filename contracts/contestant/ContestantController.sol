// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './ContestantStorage.sol';

contract ContestantController is BaseController {

  function registerCandidate(bytes32 _name, bytes32 _party) public returns(uint) {

    ContractManager _manager = ContractManager(managerAddr);
    address _contestantStorageAddr = _manager.getAddress("ContestantStorage");

    ContestantStorage _contestantStorage = ContestantStorage(_contestantStorageAddr);
    return _contestantStorage.registerCandidate(_name, _party);
  }

}