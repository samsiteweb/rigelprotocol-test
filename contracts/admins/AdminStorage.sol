// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AdminStorage {

  mapping(uint => Admin) admins;

  struct Admin {
    uint id;
    bytes32 name;
  }

  uint latestAdminId = 0;


  function addAdmin(bytes32 _name) public returns(uint) {
    latestAdminId++;


    admins[latestAdminId] = Admin(latestAdminId, _name);

    return latestAdminId;
  }

}
