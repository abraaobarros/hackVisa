import PushNotification from 'react-native-push-notification';
import {PushNotificationIOS} from 'react-native';
import React, {Component} from "react";

import {Platform} from 'react-native';

import FCM, {
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType
} from "react-native-fcm";


const configure = () => {
    PushNotification.configure({

        onRegister: function (token) {
            //process token
        },

        onNotification: function (notification) {
            // process the notification
            // required on iOS only
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        popInitialNotification: true,
        requestPermissions: true,

    });
};

const localNotification = () => {
    // PushNotification.localNotification({
    //     autoCancel: true,
    //     largeIcon: "ic_launcher",
    //     smallIcon: "ic_notification",
    //     bigText: "My big text that will be shown when notification is expanded",
    //     subText: "This is a subText",
    //     color: "green",
    //     vibrate: true,
    //     vibration: 300,
    //     title: "Notification Title",
    //     message: "Notification Message",
    //     playSound: true,
    //     soundName: 'default',
    //     actions: '["Accept", "Reject"]',
    // });
    PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (60 * 1000)) // in 60 secs
    });
};


class PushNotificationController extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        FCM.requestPermissions().catch(e => console.log(e));

        FCM.getFCMToken().then(token => {
            console.error("TOKEN (getFCMToken)", token);
        });

        FCM.getInitialNotification().then(notif => {
            console.log("INITIAL NOTIFICATION", notif)
        });

        this.notificationListner = FCM.on(FCMEvent.Notification, notif => {
            console.log("Notification", notif);
            if (notif.local_notification) {
                return;
            }
            if (notif.opened_from_tray) {
                return;
            }

            if (Platform.OS === 'ios') {
                //optional
                //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
                //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
                //notif._notificationType is available for iOS platfrom
                switch (notif._notificationType) {
                    case NotificationType.Remote:
                        notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                        break;
                    case NotificationType.NotificationResponse:
                        notif.finish();
                        break;
                    case NotificationType.WillPresent:
                        notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                        break;
                }
            }
            this.showLocalNotification(notif);
        });

        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
            console.log("TOKEN (refreshUnsubscribe)", token);
        });
    }

    showLocalNotification(notif) {
        FCM.presentLocalNotification({
            title: notif.title,
            body: notif.body,
            priority: "high",
            click_action: notif.click_action,
            show_in_foreground: true,
            local: true
        });
    }

    componentWillUnmount() {
        this.notificationListner.remove();
        this.refreshTokenListener.remove();
    }


    render() {
        return null;
    }
}

export {configure, localNotification};
