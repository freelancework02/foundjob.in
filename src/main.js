import { jobs } from './data.js'
import './style.css'

function createLinkItem(job) {
  const li = document.createElement('li');
  li.innerHTML = `
        <a href="job-detail.html?id=${job.id}" class="link-item">
            ${job.title} Online Form 2026
            ${job.isNew ? '<span class="text-red-600 font-bold ml-1 text-[10px] blink">NEW</span>' : ''}
        </a>
    `;
  return li;
}

function renderColumns() {
  const techList = document.getElementById('col-tech');
  const freelanceList = document.getElementById('col-freelance');
  const nonTechList = document.getElementById('col-nontech');

  if (techList) {
    jobs.filter(j => j.category === 'Tech').forEach(job => {
      techList.appendChild(createLinkItem(job));
    });
  }

  if (freelanceList) {
    jobs.filter(j => j.category === 'Freelance').forEach(job => {
      freelanceList.appendChild(createLinkItem(job));
    });
  }

  if (nonTechList) {
    jobs.filter(j => j.category === 'Non-Tech').forEach(job => {
      nonTechList.appendChild(createLinkItem(job));
    });
  }
}

// Initialize
renderColumns();

// Set Date
const dateEl = document.getElementById('current-date');
if (dateEl) {
  const today = new Date();
  dateEl.textContent = today.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
