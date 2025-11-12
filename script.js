// Sidebar for phone navigation
function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';

  // Add click listener to all links inside sidebar
  const links = sidebar.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', hideSidebar);
  });
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
