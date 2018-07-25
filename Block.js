import SHA256 from "crypto-js/sha256";

class Block {
    constructor(transactions, timestamp, prevHash = "") {
        this.prevHash = prevHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.getHash();
        this.changeable = 0;
    }

    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.transactions) + this.changeable).toString();
    }

    mineBlock(difficulty) {
        const patternOfDifficulty = Array(difficulty + 1).join("9");
        while (this.hash.substring(0, difficulty) !== patternOfDifficulty) {
            this.changeable++;
            this.hash = this.getHash();
        }
        console.log("BLOCK MINED: " + this.hash);
    }
}

export default Block;
