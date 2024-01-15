const pinataSDK = require('@pinata/sdk');

// use in .env file
const pinataApiKey = 'api-key';
const pinataApiSecret = 'pinata-api-secret-key';

const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);


// Your JSON object
const customTokenData = {
    "name": "Hrithik Custom Token",
    "symbol": "HCT",
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

    