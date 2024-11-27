# Oooze Compounding Crypto Clone - A Investigatory Clone Of Popular BNB Miners

Saw a few of these sites had gotten big in crypto over the course of 2022/23  (Grinch Bucks or Baked Beans), and wanted to see how they worked. Some of the listed sites had millions of dollars of volume during thier peaks (grinch bucks peaked at 1.8m!)

**These sites are clearly scams, and you shouldn't put any money into them.**

They are made to make the creator and influencers that are paid to promote it money from the fees. The developers get a fee from every transaction.If you aren't the first couple of people interacting with the contract (or the creator), you are probably gonna have a bad time.
![C5MxatkUYAEpsnS](https://github.com/user-attachments/assets/c74ecb52-4b72-41af-a1d9-03c1a062568e)

How the sites portrays itself as working is: 
* You buy x item (Baked beans, Fish, or in this examples case Ooze.) 
* It then has to process (Get canned, cooked, barreled)
* You can claim back a return on your inital buy
* orrr reinvest and let it compound!
* Profit!?

How the sites really work: 
* You buy x item, the dev gets x% of your money,
* You wait x amount for a lockup period
* You then sell your items, but only the amount you have earned, your inital investment is locked in for good, + the dev get x% of the amount sold,
* Or compound your items for another day, so your amount will compound, until a couple of days later when you have made more than your inital deposit and withdraw.
* Profit! (or you loose everything as the contract is drained by the inital investors who have stacked enough of x item to withdraw all the amount in the contract.)

Regardless, how the the smart contract is quite interesting, and good way to learn some solidity by reverse enginering how it works and what is is doing. Included in `contracts/ooze.sol` is an example contract based on some of the other sites. The `devFee` function is used in both the buy and sell, `barrelOoze` is also an intersting function.

If you are interested in how these sites work in a live safe environment, follow the steps below to have a look.

# Steps to run

Firstly, install the required packages

 `npm install`

Second, run the front end

`npm run`

This will be enough to explore the front end a bit

If you want to deploy the contract `contracts/ooze.sol` to BSC or ETH test networks you can use remix.ethereum.org to edit and deploy to the network of your choice.

Once deployed fill out the `TODO_LIST_ADDRESS` in `config.js` with the deployed address and you should be able to interact with the smart contract using the front end.

You could also just deploy the smart contract and play with it in remix without a front end

![image](https://user-images.githubusercontent.com/58153637/229657892-0b3df3dd-5ff4-4b76-ab5a-8a55e359d9cb.png)

