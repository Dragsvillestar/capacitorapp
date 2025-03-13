import { Dialog } from '@capacitor/dialog';

document.getElementById("alertBtn").addEventListener("click", async () => {
    await Dialog.alert({
        title: "Capacitor Alert",
        message: "Hello from Capacitor!",
    });
});
