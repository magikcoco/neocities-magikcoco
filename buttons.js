const buttonAbout = document.getElementById('about-button');
const buttonPanopticon = document.getElementById('panopticon-button');
const buttonReports = document.getElementById('reports-button');
const buttonRuminations = document.getElementById('ruminations-button');

const contentAbout = document.getElementById('about-content');
const contentPanopticon = document.getElementById('panopticon-content');
const contentReports = document.getElementById('reports-content');
const contentRuminations = document.getElementById('ruminations-content');

buttonAbout.addEventListener('click', () => {
  if (contentAbout.classList.contains('show')){
    contentAbout.classList.remove('show');
    contentAbout.classList.add('hidden');
  } else {
    contentAbout.classList.remove('hidden');
    contentAbout.classList.add('show');
  }
  contentPanopticon.classList.remove('show');
  contentPanopticon.classList.add('hidden');
  contentReports.classList.remove('show');
  contentReports.classList.add('hidden');
  contentRuminations.classList.remove('show');
  contentRuminations.classList.add('hidden');
});

buttonPanopticon.addEventListener('click', () => {
  if (contentPanopticon.classList.contains('show')){
    contentPanopticon.classList.remove('show');
    contentPanopticon.classList.add('hidden');
  } else {
    contentPanopticon.classList.remove('hidden');
    contentPanopticon.classList.add('show');
  }
  contentAbout.classList.remove('show');
  contentAbout.classList.add('hidden');
  contentReports.classList.remove('show');
  contentReports.classList.add('hidden');
  contentRuminations.classList.remove('show');
  contentRuminations.classList.add('hidden');
});

buttonReports.addEventListener('click', () => {
  if (contentReports.classList.contains('show')){
    contentReports.classList.remove('show');
    contentReports.classList.add('hidden');
  } else {
    contentReports.classList.remove('hidden');
    contentReports.classList.add('show');
  }
  contentAbout.classList.remove('show');
  contentAbout.classList.add('hidden');
  contentPanopticon.classList.remove('show');
  contentPanopticon.classList.add('hidden');
  contentRuminations.classList.remove('show');
  contentRuminations.classList.add('hidden');
});

buttonRuminations.addEventListener('click', () => {
  if (contentRuminations.classList.contains('show')){
    contentRuminations.classList.remove('show');
    contentRuminations.classList.add('hidden');
  } else {
    contentRuminations.classList.remove('hidden');
    contentRuminations.classList.add('show');
  }
  contentAbout.classList.remove('show');
  contentAbout.classList.add('hidden');
  contentPanopticon.classList.remove('show');
  contentPanopticon.classList.add('hidden');
  contentReports.classList.remove('show');
  contentReports.classList.add('hidden');
});
