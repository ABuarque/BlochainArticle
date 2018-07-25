import BlockChain from "./BlockChain";
import Block from "./Block";
import Transaction from "./Transaction";

let coolChain = new BlockChain(2, 100);
coolChain.createTransaction(new Transaction(500, 40, 100));
coolChain.createTransaction(new Transaction(500, 40, 150));

console.log('\n Starting the miner...');
coolChain.minePendingTransactions(31);

console.log('\nBalance of miner 31 is', coolChain.getBalanceOfId(31));

console.log('\n Starting the miner again...');
coolChain.minePendingTransactions(31);

console.log('\nBalance of miner 31 is', coolChain.getBalanceOfId(31));
