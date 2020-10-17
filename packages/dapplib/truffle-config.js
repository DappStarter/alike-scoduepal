require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong random rural modify grace loan force genuine'; 
let testAccounts = [
"0x2a6245708ca91b88b68a0694d1134c25ab90083d4e5696688f27b8953ffadcec",
"0x17bd74c60920ad4599b1b23e4e5853acdbebb72d3187c906fb9e7eeba7ca04c9",
"0x080ad76e9a59705a27b5b427606092244ef92e92557efe2b2b7c112d4bb6a0ef",
"0xd067af6a226987359e9d50f511f52cb3d686f46c7c363aa19388f809cd7dd8d6",
"0xa87aa363917c1aa2235b1879455894fad0a4b28256015ebc2d4cacd7f597003c",
"0x0c027e370a41bce95d89c8d9d16c0cb1002e053c86205a7a4fd2873d8ae3e4af",
"0x0311ba81d6d6695ee95b4f3f3052733cfa17e6eb7ae3a0ac548d659853c2e515",
"0x34928d25a61bd00d16da0346fb366f3f2ccb4d1d8032f99d973cc9a5e9591347",
"0x8d45ad0f1f0530c0f369e90396b050308efc6afd2c1fb6a4359a22c75d10c281",
"0x1243b4e2b2da9f2233b41941df1f4b6bad432c84800d6a06a6919da9111acb0d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
