document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('blocklist');
  const saveBtn = document.getElementById('saveBtn');
  const status = document.getElementById('status');

  // Load current settings when popup opens
  loadSettings();

  // Save button click handler
  saveBtn.addEventListener('click', saveSettings);

  function loadSettings() {
    chrome.storage.sync.get(['blocklist'], function (result) {
      if (result.blocklist) {
        textarea.value = result.blocklist.join(', ');
      } else {
        // Default values if none saved
        textarea.value = 'snake, spider, frog, gun, blood';
      }
    });
  }

  function saveSettings() {
    const input = textarea.value.trim();

    if (!input) {
      showStatus('Please enter at least one word to blur.', 'error');
      return;
    }

    // Parse comma-separated values and clean them
    const blocklist = input
      .split(',')
      .map((word) => word.trim().toLowerCase())
      .filter((word) => word.length > 0);

    if (blocklist.length === 0) {
      showStatus('Please enter at least one valid word to blur.', 'error');
      return;
    }

    // Save to Chrome storage
    chrome.storage.sync.set({ blocklist: blocklist }, function () {
      showStatus(
        `Settings saved! ${blocklist.length} word(s) will be blurred.`,
        'success'
      );

      // Notify service worker to reload settings
      chrome.runtime.sendMessage({ action: 'RELOAD_SETTINGS' });
    });
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.className = `status ${type}`;
    status.style.display = 'block';

    setTimeout(() => {
      status.style.display = 'none';
    }, 3000);
  }
});
