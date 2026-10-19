// Shared navigation and footer setup for all three pages.
// Loaded after the page scripts so their content is ready for navigation.
// Replace this placeholder with the project author's name.
const AUTHOR_NAME = 'Your Name';
const pageTitles = { home: 'Home', televisions: 'Televisions', about: 'About Us' };
const pages = document.querySelectorAll('.page');
const navigationLinks = document.querySelectorAll('[data-nav]');

function showPage(moveFocus = true) {
  const requestedPage = window.location.hash.slice(1);
  // The skip link is an in-page accessibility target, not a page route.
  if (requestedPage === 'main-content') return;
  const pageName = Object.hasOwn(pageTitles, requestedPage) ? requestedPage : 'home';
  if (requestedPage !== pageName) {
    window.history.replaceState(null, '', `#${pageName}`);
  }

  pages.forEach(page => { page.hidden = page.id !== pageName; });
  navigationLinks.forEach(link => {
    if (link.dataset.nav === pageName) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${pageTitles[pageName]} | Powerwise`;
  if (moveFocus) {
    document.querySelector(`#${pageName} h1`).focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

window.addEventListener('hashchange', () => showPage());
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#author-name').textContent = AUTHOR_NAME;
showPage(false);
