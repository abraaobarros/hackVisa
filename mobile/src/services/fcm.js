import {AppState, Platform} from 'react-native';
import FCM, {
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType,
    NotificationActionType,
    NotificationActionOption,
    NotificationCategoryOption
} from "react-native-fcm";
import UsersService from "./api/UsersService";


export const showLocalNotification = () => {
    FCM.presentLocalNotification({
        channel: 'default',
        title: "Simple FCM Client", // as FCM payload
        body: "Click me to go to detail", // as FCM payload (required)
        priority: "high", // as FCM payload
        icon: "ic_launcher", // as FCM payload, you can relace this with custom icon you put in mipmap
        show_in_foreground: true // not// notification when app is in foreground (local & remote)
    });
}


export const getTokenFCM = async () => {
    FCM.getFCMToken().then(token => {
        console.log(`TOKEN (getFCMToken) ${token}`);
        if (token !== undefined)
            UsersService.updateToken(token).catch(e => {
            console.log(e)
        }).done()
    });

    if (Platform.OS === "ios") {
        FCM.getAPNSToken().then(token => {
            if (token !== undefined && token !== "") UsersService.updateToken(token)
                .catch(e => {
                console.log(e)
            }).done()
        });
    }
}

export function registerAppListener(navigation) {
    FCM.getInitialNotification().then(notif => {
        console.log('notificação ====>>>', notif)
        if (Platform.OS === 'android') {
            setTimeout(() => {
                console.log('android')
                console.log(notif)
                if (notif.custom_notification) {
                    let data = JSON.parse(notif.custom_notification)
                    if (data.targetScreen) navigation.navigate(data.targetScreen, data)
                }
            }, 500)
        }
    }).catch(e => console.log(e));

    FCM.on(FCMEvent.Notification, notif => {
        if (Platform.OS === 'ios' && notif._notificationType === NotificationType.WillPresent && !notif.local_notification) {
            notif.finish(WillPresentNotificationResult.All)
            return;
        }
        if (Platform.OS === 'android') {
            setTimeout(() => {
                console.log('android')
                console.log(notif)
                if (notif.custom_notification) {
                    let data = JSON.parse(notif.custom_notification)
                    if (data.targetScreen) navigation.navigate(data.targetScreen, data)
                }
            }, 500)
        }

        if (Platform.OS === 'ios') {

            switch (notif._notificationType) {
                case NotificationType.NewData:
                    notif.finish();

                case NotificationType.Remote:
                    setTimeout(() => {
                        if (notif.custom_notification) {
                            let data = JSON.parse(notif.custom_notification)
                            if (data.targetScreen) navigation.navigate(data.targetScreen, data)
                        }
                    }, 500)
                    notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                    break;
                case NotificationType.NotificationResponse:
                    setTimeout(() => {
                        if (notif.custom_notification) {
                            let data = JSON.parse(notif.custom_notification)
                            if (data.targetScreen) navigation.navigate(data.targetScreen, data)
                        }
                    }, 1000)
                    notif.finish();
                    break;
                case NotificationType.WillPresent:
                    notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                    // this type of notificaiton will be called only when you are in foreground.
                    // if it is a remote notification, don't do any app logic here. Another notification callback will be triggered with type NotificationType.Remote
                    break;
            }
        }
    });
}

FCM.setNotificationCategories([
    {
        id: 'bynd.bradesco.fcm.text',
        actions: [
            {
                type: NotificationActionType.TextInput,
                id: 'reply',
                title: 'Quick Reply',
                textInputButtonTitle: 'Send',
                textInputPlaceholder: 'Say something',
                intentIdentifiers: [],
                options: NotificationActionOption.AuthenticationRequired
            },
            {
                type: NotificationActionType.Default,
                id: 'view',
                title: 'View in App',
                intentIdentifiers: [],
                options: NotificationActionOption.Foreground
            },
            {
                type: NotificationActionType.Default,
                id: 'dismiss',
                title: 'Dismiss',
                intentIdentifiers: [],
                options: NotificationActionOption.Destructive
            }
        ],
        options: [NotificationCategoryOption.CustomDismissAction, NotificationCategoryOption.PreviewsShowTitle]
    }
])

export const startFCM = async (navigation) => {

    FCM.requestPermissions();
    FCM.enableDirectChannel()

    FCM.createNotificationChannel({
        id: 'default',
        name: 'Default',
        description: 'channel',
        priority: 'high'
    });

    FCM.getInitialNotification().then(notif => {
        console.log('notificação ====>>>', notif)
        if (notif && notif.targetScreen) {
            let {targetScreen, intention_id} = notif;
            // navigation.navigate("SelectHeadquarter", {...navigation.state.params, ...response.data.data, ...this.state})
            navigation.navigate(targetScreen, {intention_id});
        }
    });

    FCM.on(FCMEvent.Notification, async (notif) => {
        console.log('notificação ====>>>', notif)
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
        // // if(notif.opened_from_tray){
        // let state = {
        //     appState: AppState.currentState
        // }
        // if ((state.appState !== "active" && notif.opened_from_tray === 1)) {
        //
        //     if (notif.targetScreen) {
        //         let {targetScreen, intention_id} = notif;
        //         //   navigation.navigate(notif.targetScreen);
        //         // navigation.navigate(notif.targetScreen,{...notif.intention_id});
        //         navigation.navigate(targetScreen, {intention_id});
        //     }
        // }
    });
};
