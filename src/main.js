import { jobs } from './data.js'
import './style.css'

function createJobCard(job) {
  const div = document.createElement('div');
  // Using simple anchor to detail page
  div.innerHTML = `
        <a href="job-detail.html?id=${job.id}" class="block job-card p-5 h-full group">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                        ${job.company.charAt(0)}
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">${job.title}</h4>
                        <p class="text-xs text-gray-500 font-medium">${job.company}</p>
                    </div>
                </div>
                ${job.isNew ? '<span class="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">New</span>' : ''}
            </div>
            
            <div class="flex items-center gap-4 text-xs text-gray-500 font-medium mb-4">
                 <span class="flex items-center gap-1"><i class="ph-fill ph-briefcase"></i> ${job.category}</span>
                 <span class="flex items-center gap-1"><i class="ph-fill ph-map-pin"></i> Remote/India</span>
                 <span class="flex items-center gap-1"><i class="ph-fill ph-clock"></i> ${job.postDate}</span>
            </div>

            <div class="mt-auto">
                <span class="inline-block w-full text-center py-2 rounded border border-gray-200 text-gray-700 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">View Details</span>
            </div>
        </a>
    `;
  return div;
}

function renderJobs() {
  const jobGrid = document.getElementById('job-grid');
  if (!jobGrid) return;

  jobGrid.innerHTML = ''; // Clear skeleton

  jobs.forEach(job => {
    jobGrid.appendChild(createJobCard(job));
  });
}

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

// Init
renderJobs();
