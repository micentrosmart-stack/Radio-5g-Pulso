// Agora configuration settings
const agoraConfig = {
    appId: 'YOUR_AGORA_APP_ID',
    appCertificate: 'YOUR_AGORA_APP_CERTIFICATE',
    channel: 'YOUR_CHANNEL_NAME',
    uid: 'USER_ID',
};

// Application parameters
const appParams = {
    environment: 'development',
    version: '1.0.0',
    debug: true,
};

module.exports = { agoraConfig, appParams };