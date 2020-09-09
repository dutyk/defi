const AggregateLoanCoinToken = artifacts.require("AggregateLoanCoinToken");

module.exports = function (deployer) {
  deployer.deploy(AggregateLoanCoinToken);
};
