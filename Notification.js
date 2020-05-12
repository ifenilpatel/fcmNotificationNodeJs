var FCM = require('fcm-node');
var serverKey = ''; // here is your server key that you have to get from the firebase project.
var fcm = new FCM(serverKey);

var message = {
    to: '', // here is your device key that generate based on firebase project.
    notification: {
        title: 'Title',
        body: 'Body'
    }
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});