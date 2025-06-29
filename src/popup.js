// Predefined keyword categories
const CATEGORIES = {
  violence: [
    'gun',
    'weapon',
    'knife',
    'sword',
    'blood',
    'gore',
    'violence',
    'fight',
    'battle',
    'war',
    'explosion',
    'bomb',
    'bullet',
    'rifle',
    'pistol',
    'shotgun',
    'ammunition',
    'grenade',
    'missile',
    'tank',
    'army',
    'military',
    'combat',
    'attack',
    'assault',
    'murder',
    'killing',
    'death',
    'corpse',
    'wound',
    'injury',
    'bleeding',
    'bloody',
  ],
  adultAnimation: [
    'hentai',
    'anime',
    'manga',
    'cartoon',
    'animation',
    'adult',
    'explicit',
    'nsfw',
    'pornographic',
    'sexual',
    'nude',
    'naked',
    'intimate',
    'suggestive',
    'provocative',
  ],
  adultEquipment: [
    'condom',
    'lubricant',
    'vibrator',
    'dildo',
    'sex toy',
    'adult toy',
    'contraceptive',
    'birth control',
    'pregnancy test',
    'adult store',
    'sex shop',
    'adult equipment',
  ],
  darkScary: [
    'horror',
    'scary',
    'frightening',
    'terrifying',
    'ghost',
    'monster',
    'demon',
    'zombie',
    'vampire',
    'werewolf',
    'witch',
    'skeleton',
    'skull',
    'death',
    'cemetery',
    'grave',
    'haunted',
    'spooky',
    'creepy',
    'nightmare',
    'dark',
    'shadow',
    'evil',
    'satanic',
    'occult',
    'black magic',
    'curse',
    'hex',
  ],
  matureThemes: [
    'alcohol',
    'beer',
    'wine',
    'liquor',
    'drunk',
    'intoxicated',
    'drug',
    'cigarette',
    'smoking',
    'tobacco',
    'marijuana',
    'cannabis',
    'weed',
    'cocaine',
    'heroin',
    'addiction',
    'overdose',
    'gambling',
    'casino',
    'poker',
    'slot machine',
  ],
  offensiveLanguage: [
    'curse',
    'swear',
    'profanity',
    'vulgar',
    'obscene',
    'offensive',
    'insult',
    'slur',
    'derogatory',
    'hate speech',
    'racist',
    'sexist',
    'homophobic',
  ],
};

document.addEventListener('DOMContentLoaded', function () {
  const categoryCheckboxes = {};
  const customWordsTextarea = document.getElementById('customWords');
  const saveBtn = document.getElementById('saveBtn');
  const updateTogglesBtn = document.getElementById('updateTogglesBtn');
  const status = document.getElementById('status');
  const activeCount = document.getElementById('activeCount');
  const tagTogglesContainer = document.getElementById('tagToggles');

  // Initialize category checkboxes
  Object.keys(CATEGORIES).forEach((category) => {
    const checkbox = document.getElementById(category);
    if (checkbox) {
      categoryCheckboxes[category] = checkbox;
    }
  });

  // Load current settings when popup opens
  loadSettings();

  // Save button click handler
  saveBtn.addEventListener('click', saveSettings);

  // Update toggles button click handler
  updateTogglesBtn.addEventListener('click', updateTagToggles);

  // Update active count when toggles change
  Object.values(categoryCheckboxes).forEach((checkbox) => {
    checkbox.addEventListener('change', updateActiveCount);
  });

  function loadSettings() {
    chrome.storage.sync.get(
      ['activeCategories', 'customWords', 'tagLikeToggles'],
      function (result) {
        // Load category toggles
        if (result.activeCategories) {
          Object.keys(result.activeCategories).forEach((category) => {
            if (categoryCheckboxes[category]) {
              categoryCheckboxes[category].checked =
                result.activeCategories[category];
            }
          });
        }

        // Load custom words
        if (result.customWords) {
          customWordsTextarea.value = result.customWords.join(', ');
        }

        // Load existing toggles if they exist
        if (result.customWords && result.customWords.length > 0) {
          updateTagToggles();
        }

        updateActiveCount();
      }
    );
  }

  function updateTagToggles() {
    const customWords = customWordsTextarea.value.trim();
    const words = customWords
      .split(',')
      .map((word) => word.trim())
      .filter((word) => word.length > 0);

    // Clear existing toggles
    tagTogglesContainer.innerHTML = '';

    if (words.length === 0) {
      tagTogglesContainer.innerHTML =
        '<div class="no-tags">No words entered. Add words and click "Update Toggle Options"</div>';
      return;
    }

    // Load saved toggle states
    chrome.storage.sync.get(['tagLikeToggles'], function (result) {
      const savedToggles = result.tagLikeToggles || {};

      words.forEach((word) => {
        const toggleItem = document.createElement('div');
        toggleItem.className = 'tag-toggle-item';

        const toggleId = `toggle-${word.toLowerCase().replace(/\s+/g, '-')}`;
        const isChecked = savedToggles[word] || false;

        toggleItem.innerHTML = `
          <label class="toggle-switch">
            <input type="checkbox" id="${toggleId}" ${
          isChecked ? 'checked' : ''
        }>
            <span class="slider"></span>
          </label>
          <span class="tag-toggle-label">Blur "${word}"-like images?</span>
        `;

        tagTogglesContainer.appendChild(toggleItem);

        // Add event listener to save toggle state
        const checkbox = toggleItem.querySelector('input');
        checkbox.addEventListener('change', function () {
          savedToggles[word] = this.checked;
          chrome.storage.sync.set({ tagLikeToggles: savedToggles });
          updateActiveCount();
        });
      });

      updateActiveCount();
    });
  }

  function saveSettings() {
    const activeCategories = {};
    const customWords = customWordsTextarea.value.trim();

    // Get active categories
    Object.keys(categoryCheckboxes).forEach((category) => {
      activeCategories[category] = categoryCheckboxes[category].checked;
    });

    // Parse custom words
    const customWordsList = customWords
      .split(',')
      .map((word) => word.trim().toLowerCase())
      .filter((word) => word.length > 0);

    // Get tag-like toggle states
    const tagLikeToggles = {};
    const tagToggleCheckboxes = tagTogglesContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    tagToggleCheckboxes.forEach((checkbox) => {
      const label = checkbox
        .closest('.tag-toggle-item')
        .querySelector('.tag-toggle-label');
      const word = label.textContent.match(/"([^"]+)"/)?.[1];
      if (word) {
        tagLikeToggles[word] = checkbox.checked;
      }
    });

    // Build complete blocklist
    const completeBlocklist = [];

    // Add words from active categories
    Object.keys(activeCategories).forEach((category) => {
      if (activeCategories[category]) {
        completeBlocklist.push(...CATEGORIES[category]);
      }
    });

    // Add custom words
    completeBlocklist.push(...customWordsList);

    // Add "-like" variations for toggled words
    Object.keys(tagLikeToggles).forEach((word) => {
      if (tagLikeToggles[word]) {
        completeBlocklist.push(`${word.toLowerCase()}-like`);
      }
    });

    // Remove duplicates
    const uniqueBlocklist = [...new Set(completeBlocklist)];

    // Allow empty blocklist - user wants to disable all blurring
    const blocklistLength = uniqueBlocklist.length;
    const statusMessage =
      blocklistLength === 0
        ? 'Settings saved! All image blurring is now disabled.'
        : `Settings saved! ${blocklistLength} word(s) will be blurred. Reprocessing current page...`;

    // Save to Chrome storage
    chrome.storage.sync.set(
      {
        activeCategories: activeCategories,
        customWords: customWordsList,
        tagLikeToggles: tagLikeToggles,
        blocklist: uniqueBlocklist,
      },
      function () {
        showStatus(statusMessage, 'success');
        updateActiveCount();

        // Notify service worker to reload settings and reprocess images
        chrome.runtime.sendMessage({ action: 'RELOAD_SETTINGS' });

        // Close popup after a short delay to show the reprocessing in action
        setTimeout(() => {
          window.close();
        }, 1500);
      }
    );
  }

  function updateActiveCount() {
    const activeCount = Object.values(categoryCheckboxes).filter(
      (cb) => cb.checked
    ).length;
    const customWordsCount = customWordsTextarea.value
      .trim()
      .split(',')
      .filter((w) => w.trim()).length;
    const tagLikeCount = tagTogglesContainer.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    let countText = '';
    if (activeCount > 0) {
      countText += `${activeCount} category(ies) active`;
    }
    if (customWordsCount > 0) {
      if (countText) countText += ', ';
      countText += `${customWordsCount} custom word(s)`;
    }
    if (tagLikeCount > 0) {
      if (countText) countText += ', ';
      countText += `${tagLikeCount} "-like" variation(s)`;
    }

    const finalText =
      countText || 'No blurring active - all images will be shown';
    document.getElementById('activeCount').textContent = finalText;
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
