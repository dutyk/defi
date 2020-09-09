npm install truffle-hdwallet-provider

truffle migrate --network ropsten

```deploy log
starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000029 (0x7a121d)


1_initial_migration.js
======================

   Deploying 'AggregateLoanCoinToken'
   ----------------------------------
   > transaction hash:    0x3e00e22af704e04edf4bd3ac901239ba50609a61ed1ad29be2beca962abe97a6
   > Blocks: 3            Seconds: 82
   > contract address:    0xf774f76aE53F6754a83Ca2AF52220BE44AF764b1
   > block number:        8649718
   > block timestamp:     1599662467
   > account:             0xF346AffF0d06FeD7Ff974163E3290D3531BDdEB1
   > balance:             19.495766308
   > gas used:            874312 (0xd5748)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01748624 ETH

   Pausing for 5 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 8649719)
   > confirmation number: 2 (block: 8649720)
   > confirmation number: 3 (block: 8649721)
   > confirmation number: 4 (block: 8649722)
   > confirmation number: 5 (block: 8649723)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01748624 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.01748624 ETH
```