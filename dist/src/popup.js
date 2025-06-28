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
  const status = document.getElementById('status');
  const activeCount = document.getElementById('activeCount');

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

  // Update active count when toggles change
  Object.values(categoryCheckboxes).forEach((checkbox) => {
    checkbox.addEventListener('change', updateActiveCount);
  });

  function loadSettings() {
    chrome.storage.sync.get(
      ['activeCategories', 'customWords'],
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

        updateActiveCount();
      }
    );
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

    // Remove duplicates
    const uniqueBlocklist = [...new Set(completeBlocklist)];

    if (uniqueBlocklist.length === 0) {
      showStatus(
        'Please select at least one category or add custom words.',
        'error'
      );
      return;
    }

    // Save to Chrome storage
    chrome.storage.sync.set(
      {
        activeCategories: activeCategories,
        customWords: customWordsList,
        blocklist: uniqueBlocklist,
      },
      function () {
        showStatus(
          `Settings saved! ${uniqueBlocklist.length} word(s) will be blurred. Reprocessing current page...`,
          'success'
        );
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

    let countText = '';
    if (activeCount > 0) {
      countText += `${activeCount} category(ies) active`;
    }
    if (customWordsCount > 0) {
      if (countText) countText += ', ';
      countText += `${customWordsCount} custom word(s)`;
    }

    document.getElementById('activeCount').textContent =
      countText || 'No categories active';
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
