const button = document.querySelector('#sidebar-toggle-button');
const sidebar = document.querySelector('#sidebar-content-container .sidebar');
if (button && sidebar) {
  const currentSidebarDisplay = window.getComputedStyle(sidebar)['display'];
  if (currentSidebarDisplay === 'none') {
    button.textContent = 'menu';
  } else {
    button.textContent = 'hide';
  }
  button.addEventListener('click', async () => {
    if (sidebar.style.display === 'none' || window.getComputedStyle(sidebar)['display'] === 'none') {
      if (document.startViewTransition) {
        await document.startViewTransition(() => {
          setElementStyles(sidebar, { display: 'flex' });
          button.textContent = 'hide';
        });
      } else {
        await setElementStyles(sidebar, { display: 'flex' });
        button.textContent = 'hide';
      }
    } else {
      if (document.startViewTransition) {
        await document.startViewTransition(() => {
          setElementStyles(sidebar, { display: 'none' });
          button.textContent = 'menu';
        });
      } else {
        await setElementStyles(sidebar, { display: 'none' });
        button.textContent = 'menu';
      }
    }
  });
}
