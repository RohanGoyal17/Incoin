const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4efaa906afb7eb9386ce3ca5e1dec482fd6650879e9a66b9cd59dd8cb3c872d3');
const myWalletAddress = myKey.getPublic('hex');

let incoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
incoin.addTransaction(tx1);


console.log('\n Starting the miner...');
incoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of rohan is ', incoin.gegtBalanceOfAffress(myWalletAddress));
