require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember company heavy kiwi tackle second'; 
let testAccounts = [
"0x0cfebc39a96f1e67679a1e3d1422f9d184e7d7552eb77dd609b2cc3ff493ce9b",
"0xa4baccf62bdea9fc9f308fa9cffd96639a8c16d50ac6b020f8e62c41775cd8ed",
"0x2b2cceff9dcc636871eaf2779637bda715117286c95550580764b784bb939424",
"0x13ef2c15fc1cd7a4a15ef32712fdc79b3b054ce4db99a6ca46ff68501c564d8f",
"0xdc9ff0cc07ea5564094a2ff6f8bfb4a0187025b7ec4704fdd2cf1213b95b062a",
"0x08a215c64e01dd9a5c39e9d44cf92d1a98127120cacf0bc256ff9ca205e08752",
"0x46e2584a638f83425cd71d3b01679d48dcf9f2e34ab20e472ea7aa6a245d14a8",
"0xba138e49bab84f53e6c9328261d108532c1e6f82d2e691876ea5c37d791bb307",
"0xe17eda5f59e2ab095907fef2e7eea163717aeffeb5ef72700e71712c77df980e",
"0x85a6f1677fa101abfc41d332c849d97e176ddee541d6aac819de1716c3089081"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


