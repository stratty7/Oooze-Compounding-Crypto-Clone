# Oooze App - A Clone of the popular Grinch Bucks or Fish Farm Site

Saw a few of these sites had gotten big in crypto over the course of 2022, and wanted to see how they worked. Judging from the contracts, don't use them.

First off..

**These sites are clearly pyramid schemes, and you shouldn't put any money into them.**

Could you make some money? Maybe if you are early, but they are made to make the creator money from the fees. You can read through the contract Ooze.sol to see exactly how the fees side works, but to sum it up, unless you are the first couple of people interacting with the contract (or the creator), you are probably being taken for a ride.


None the less, the smart contract is quite interesting, and good way to learn some solidity by reverse enginering how it works and what is is doing. If you have an interest in learning some solidity it is a good place to dig around in. Included in `contracts/ooze.sol` is an example contract based on some of the other sites. See if you can see how the fee structure really only benifits the creator. 

If you are interested in how these sites work, follow the steps below to have a look.

# Steps to run

Firstly, install the required packages

 `npm install`

Second, run the front end

`npm run`

This will be enough to explore the front end a bit

If you want to deploy the contract `contracts/ooze.sol` to BSC or ETH network you can use remix.ethereum.org to edit and deploy to the network of your choice.

Once deployed fill out the `TODO_LIST_ADDRESS` in `config.js` with the deployed address and you should be able to interact with the smart contract using the front end.

You could also just deploy the smart contract and play with it in remix without a front end

![image](https://user-images.githubusercontent.com/58153637/229657892-0b3df3dd-5ff4-4b76-ab5a-8a55e359d9cb.png)

