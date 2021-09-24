// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/admins/AdminStorage.sol";

contract TestAdminStorage {
    function testAddAdmin() public {

        AdminStorage _storage = AdminStorage(DeployedAddresses.AdminStorage());

        uint _expectedId = 1;

        Assert.equal(_storage.addAdmin("Lawal"), _expectedId, "Should create an admin with ID 1");
    }
}