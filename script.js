const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const button = document.getElementById('sidebar-toggle-button');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const sidebarWidth = window.getComputedStyle(sidebar)['width'];
const logoLeftMargin = '10px';
const logoWidth = window.getComputedStyle(logo)['width'];
const logoHeight = '43.5px';
const sidebarParent = nav.parentElement;
const sidebarChildren = Array.from(sidebarParent.children);
sidebarParent.style.position = 'static';
sidebar.style.width = '200px';
sidebar.style.left = '-200px';
sidebar.style.transition = 'left 0.3s ease-in-out';
logo.style.height = logoHeight;
logo.style.marginLeft = logoLeftMargin;
button.style.top = '20px';
button.style.transform = 'none';
button.style.right = logoLeftMargin;
button.style.transition = 'right 0.3s ease-in-out';
body.insertBefore(logo, sidebar);
body.insertBefore(button, sidebar);
const hideSidebar = () => {
  sidebar.style.left = `-${window.getComputedStyle(sidebar)['width']}`;
  button.textContent = 'menu';
  button.style.right = '0px';
};
const showSidebar = () => {
  sidebar.style.left = '0px';
  button.textContent = 'hide';
  button.style.right = logoLeftMargin;
};
button.addEventListener('click', () => {
  if (window.getComputedStyle(sidebar)['left'] === '0px') {
    hideSidebar();
  } else {
    showSidebar();
  }
});
