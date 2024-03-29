<template>
    <div class="mt-5">
        <button class="btn btn-primary" @click="getNoti">Subscribe To get Notifications</button>
    </div>

</template>

<script>
import axiosInstance from '../axiosInstance';
// import fetch from 'unfetch';
export default {
    name: "WebPushNotification",

    mounted() {
        this.subscribeForNotifications()
    },
    methods: {

        subscribeForNotifications() {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.ready
                    .then((registration) => {
                        const subscribeOptions = {
                            userVisibleOnly: true,
                            applicationServerKey: "BNrsrLs7EnssDmtL_e7ziGy92Hwv5MHc131LYUmoSrWace1fPaqTLoPaZCPeV7Fk8I09qTF_ZjppBFU6ONXSu5g"
                        };
                        // VAPID_PUBLIC_KEY = 'BNrsrLs7EnssDmtL_e7ziGy92Hwv5MHc131LYUmoSrWace1fPaqTLoPaZCPeV7Fk8I09qTF_ZjppBFU6ONXSu5g'
                        // VAPID_PRIVATE_KEY = 'jdWAbgz6aN3jcvdVQUlxpGRYugIBA40WrVBFOfxDkOc'

                        return registration.pushManager.subscribe(subscribeOptions);
                    })
                    .then((pushSubscription) => {
                        console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
                        // You can store the pushSubscription data as needed
                        const { keys, endpoint } = pushSubscription.toJSON();
                        // Store the keys in localStorage
                        localStorage.setItem('p256dhKey', keys.p256dh);
                        localStorage.setItem('authKey', keys.auth);
                        localStorage.setItem('endpoint', endpoint)
                        console.log('Stored p256dhKey in localStorage:', keys.p256dh);
                        console.log('Stored authKey in localStorage:', keys.auth);
                        // this.storePushSubscription(pushSubscription);
                    })
                    .catch((error) => {
                        console.error('Error subscribing for notifications:', error);
                    });
            } else {
                console.warn('Push notifications are not supported in this browser.');
            }
        },
        getNoti() {

            // If permission is already granted, proceed with sending notification data
            const token = localStorage.getItem('token');
            const keys = {
                "auth": localStorage.getItem('authKey'),
                "p256dh": localStorage.getItem('p256dhKey')
            };
            const data = {
                endpoint: localStorage.getItem('endpoint'),
                keys
            };
            const config = {
                headers: { "Authorization": `Bearer ${token}` }
            };
            axiosInstance.post('push_store', data, config)
                // axios.post('https://pwanew.clobug.co.in/api/push_store', data, config)
                .then((response) => {
                    console.log('data sent', response);
                })
                .catch((error) => {
                    console.error('error sending data', error);
                });
        },
    }
};
</script>
<style>
.install-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #e14e5f;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease-in-out
}

.install-popup-content {
    text-align: center;
}

.install-popup button {
    margin: 10px;
    padding: 8px 16px;
    cursor: pointer;
}

@keyframes slideIn {
    from {
        transform: translate(-50%, -70%);
        opacity: 0;
    }

    to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
</style>