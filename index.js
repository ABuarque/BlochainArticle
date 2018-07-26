import BlockChain from "./BlockChain";
import Block from "./Block";
import Transaction from "./Transaction";

let fancyChain = new BlockChain(2, 100);
fancyChain.createTransaction(new Transaction(500, 40, 100));
fancyChain.createTransaction(new Transaction(500, 40, 150));

console.log('\n Starting the miner...');
fancyChain.minePendingTransactions(31);

console.log('\nBalance of miner 31 is', fancyChain.getBalanceOfId(31));

console.log('\n Starting the miner again...');
fancyChain.minePendingTransactions(31);

console.log('\nBalance of miner 31 is', fancyChain.getBalanceOfId(31));
