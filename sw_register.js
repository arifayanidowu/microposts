if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw/serviceWorker.js")
      .then(res => {
        console.log("[ServiceWorker]: Registered");
      })
      .catch(err => console.log("[ServiceWorker]: Failed to Register", err));
  });
}
