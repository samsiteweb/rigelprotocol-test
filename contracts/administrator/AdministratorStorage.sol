// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '../helpers/BaseStorage.sol';

contract AdministratorStorage is BaseStorage {
    
   mapping(uint => Admin) public admins;

   struct Admin {
       uint id;
       bytes32 username;
   }

   uint latestUserId = 0;

   function addAdmin(bytes32 _username) public onlyController returns(uint) {

       latestUserId++;
       admins[latestUserId++] = Admin(latestUserId, _username);

       return latestUserId;
   }
  
}