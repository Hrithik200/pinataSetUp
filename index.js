const pinataSDK = require('@pinata/sdk');


const pinataApiKey = '144146c05e2bc208f36e';
const pinataApiSecret = 'a561092c66ff131cee860961cee6ccc14b99c97e4b5caebcb5a22dbb23e9a6b5';

const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);


// Your JSON object
const customTokenData = {
    "name": "Monish Custom Token",
    "symbol": "MCT",
    "description": "Created for demo purpose ;)",
    "image": "https://pink-accused-giraffe-878.mypinata.cloud/ipfs/QmX3cUdaBGE9bgcAJds4pMaW5Ef7ojLP61fJT48XkgC7V6"
};

// Pin JSON object to IPFS via Pinata
pinata.pinJSONToIPFS(customTokenData)
    .then((result) => {
        console.log('IPFS Hash:', result.IpfsHash);
    })
    .catch((error) => {
        console.error('Error uploading to Pinata:', error);
    });

    