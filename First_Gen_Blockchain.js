const sha256 = require('sha246');

function blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    this.createNewBloock(1000, '0', '0');
};

/*
///Class function instead
class blockchain {
    constructor() {
        this.chain = [];
        this.newTransactions;
    }
}
*/

blockchain.prototype.createNewBloock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.lenth + 1, 
        timestamp: Date.now(),
        transaction: this.pendingTransactions,
        nonce: nonce, 
        hash: hash,
        previousBlockHash: previousBlockHash, 
    };

    this,this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

blockchain.prototype.getLastBock = function() {
    return this.chain[this.chain.length - 1];
}

///Everytime a new transaction is recorded it gets pushed to the 
///newTransactions array. 
///The function of createNewTransaction is taking the prototype 
///data which creates the variable newTransaction and gives it the
///The properties of the function. 

blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);
    return this.getLastBock()['index'] + 1;

}

blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        let nonce = 1;

    }
    return nonce;
};