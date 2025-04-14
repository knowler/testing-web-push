const button = document.querySelector("button");

button.addEventListener("click", async () => {
  if (!"pushManager" in window) {
    console.info("Declarative Push not available");
    return;
  }

  const subscription = await pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: [], // TODO: add a key
	});
});
