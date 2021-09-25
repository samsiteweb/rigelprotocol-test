// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './AdministratorStorage.sol';

contract AdministratorController is BaseController {

  function createAdmin(bytes32 _name) public returns(uint) {
    ContractManager _manager = ContractManager(managerAddr);
    address _adminStorageAddr = _manager.getAddress("AdminStorage");

    AdministratorStorage _adminStorage = AdministratorStorage(_adminStorageAddr);
    return _adminStorage.addAdmin(_name);
  }

}