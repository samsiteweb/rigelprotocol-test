// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/administrator/AdministratorStorage.sol";

contract TestAdminStorage {
    AdministratorStorage adminStorage;

    constructor() public {
        adminStorage = new AdministratorStorage();
        adminStorage.setControllerAddr(address(this));
    }

    function testAddAdmin() public {
        uint _expectedId = 1;

        Assert.equal(adminStorage.addAdmin("Lawal"), _expectedId, "Should create an admin with ID 1");
    }
}