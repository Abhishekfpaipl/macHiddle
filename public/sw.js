// For Web push Notification

self.addEventListener('push', function (e) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        //notifications aren't supported or permission not granted!
        return;
    }

    if (e.data) {
        var msg = e.data.json();
        console.log(msg)
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            actions: msg.actions,
            data: msg.data,
        }));
    }
});

self.addEventListener('notificationclick', function (event) {
    // Define the URL to open when the notification is clicked
    var url = 'https://clobug.co.in';

    event.notification.close(); // Close the notification

    //console.log('Notification Data:', event.notification); 

    if (event.notification.data && event.notification.data.url) {
        url = event.notification.data.url;
    }

    // Open the app or specific page
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If no window/tab is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

// End of Web push notification
