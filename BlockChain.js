import Block from "./Block";
import Transaction from "./Transaction";

class BlockChain {
    constructor(difficulty, miningReward) {
        this.chain = [this.getGenesisBlock()];
        this.difficulty = difficulty;
        this.pendingTransactions = [];
        this.miningReward = miningReward;
    }

    getGenesisBlock() {
        return new Block([], Date.parse("2017-01-01"), "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(this.pendingTransactions,
                              Date.now(),
                              this.getLatestBlock().hash);

        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfId(address){
        let balance = 0.0;
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.senderId === address)
                    balance -= trans.value;
                if(trans.receiverId === address)
                    balance += trans.value;
            }
        }
        return balance;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.getHash())
                return false;
            if (currentBlock.prevHash !== prevBlock.hash)
                return false;
        }
        return true;
    }
}

export default BlockChain;
