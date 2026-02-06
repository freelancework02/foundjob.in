import './style.css'

// Extended Mock Data for Portal Layout
// We need 'Tech', 'Freelance', 'Non-Tech' categories to map to the 3 columns
const jobs = [
  { title: "Senior React Developer Remote", category: "Tech", isNew: true },
  { title: "Python Backend API Engineer", category: "Tech", isNew: true },
  { title: "Java Spring Boot Senior Dev", category: "Tech", isNew: false },
  { title: "AWS Cloud Architect Certified", category: "Tech", isNew: false },
  { title: "Full Stack MERN Developer", category: "Tech", isNew: true },
  { title: "Angular Frontend Lead", category: "Tech", isNew: false },
  { title: "DevOps Engineer Docker/K8s", category: "Tech", isNew: false },
  { title: "Mobile App Flutter Dev", category: "Tech", isNew: true },

  { title: "Logo Designer Freelance Project", category: "Freelance", isNew: true },
  { title: "UI/UX Design Mobile App", category: "Freelance", isNew: true },
  { title: "WordPress Theme Customization", category: "Freelance", isNew: false },
  { title: "Shopify Store Setup Urgent", category: "Freelance", isNew: true },
  { title: "video Editor for YouTube", category: "Freelance", isNew: false },
  { title: "3D Modeler Blender Artist", category: "Freelance", isNew: false },
  { title: "Copywriter for Sales Page", category: "Freelance", isNew: true },
  { title: "Translation English to Spanish", category: "Freelance", isNew: false },

  { title: "Data Entry Excel Work From Home", category: "Non-Tech", isNew: true },
  { title: "Virtual Assistant Admin Support", category: "Non-Tech", isNew: true },
  { title: "Customer Support Chat Email", category: "Non-Tech", isNew: false },
  { title: "Online Tutor Math/Science", category: "Non-Tech", isNew: false },
  { title: "Transcription Audio to Text", category: "Non-Tech", isNew: true },
  { title: "Social Media Manager", category: "Non-Tech", isNew: false },
  { title: "Content Moderator Night Shift", category: "Non-Tech", isNew: true },
  { title: "Recruitment Specialist HR", category: "Non-Tech", isNew: false }
];

function createLinkItem(job) {
  const li = document.createElement('li');
  li.innerHTML = `
        <a href="#" class="link-item">
            ${job.title} Onine Form 2026
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
