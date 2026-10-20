// Shared SVG icons used by <use href="#icon-..."> throughout the site.
(() => {
  const template = `
    <svg class="icon-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14m-6-6 6 6-6 6"/>
      </symbol>
      <symbol id="icon-tv" viewBox="0 0 32 32">
        <rect x="3" y="5" width="26" height="19" rx="3"/>
        <path d="M11 28h10m-5-4v4"/>
      </symbol>
      <symbol id="icon-bolt" viewBox="0 0 32 32">
        <path d="m18 3-12 16h9l-1 10 12-16h-9z"/>
      </symbol>
      <symbol id="icon-home" viewBox="0 0 32 32">
        <path d="m3 15 13-11 13 11M7 12v16h18V12M13 28v-9h6v9"/>
      </symbol>
      <symbol id="icon-leaf" viewBox="0 0 32 32">
        <path d="M27 4C13 2 3 8 7 19s22 7 20-15ZM5 28 21 11"/>
      </symbol>
      <symbol id="icon-sliders" viewBox="0 0 32 32">
        <path d="M5 9h22M5 23h22"/>
        <circle cx="12" cy="9" r="3"/>
        <circle cx="21" cy="23" r="3"/>
      </symbol>
    </svg>`;

  // Append after the page content so the exercise remains the first SVG.
  const content = document.createRange().createContextualFragment(template);
  document.body.append(content);
})();
