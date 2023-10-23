const butInstall = document.getElementById('buttonInstall');

// Hide the install button if the PWA is already installed.
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// Show the install button if the PWA is not already installed.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  // The prompt() method of the BeforeInstallPromptEvent prompts the user to install the PWA.
  if (!promptEvent) {
    return;
  }

  // Wait for the user to respond to the prompt.
  promptEvent.prompt();

  window.deferredPrompt = null;

  // Hide the install button.
  butInstall.classList.toggle('hidden', true);
});

// Hide the install button if the PWA is installed.
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
