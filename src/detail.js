import { jobs } from './data.js'
import './style.css'

function getJobId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderJobDetails() {
    const id = getJobId();
    if (!id) {
        document.getElementById('job-title').textContent = "Job Not Found";
        return;
    }

    const job = jobs.find(j => j.id == id);
    if (!job) {
        document.getElementById('job-title').textContent = "Job Not Found or Expired";
        return;
    }

    // Populate Fields
    document.title = `${job.title} - Details`;
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = job.company;
    document.getElementById('job-short-info').textContent = job.shortInfo || `Apply now for the position of ${job.title} at ${job.company}. Check eligibility details below.`;

    // Dates
    if (job.dates) {
        document.getElementById('date-start').textContent = job.dates.start;
        document.getElementById('date-end').textContent = job.dates.end;
        document.getElementById('date-fee').textContent = job.dates.end; // Usually same as end
        document.getElementById('date-exam').textContent = job.dates.exam;
    }

    // Fees
    if (job.fees) {
        document.getElementById('fee-gen').textContent = job.fees.general;
        document.getElementById('fee-scst').textContent = job.fees.scst;
        document.getElementById('fee-mode').textContent = job.fees.paymentMode;
    }

    // Age
    if (job.age) {
        document.getElementById('age-min').textContent = job.age.min;
        document.getElementById('age-max').textContent = job.age.max;
    }

    // Vacancy
    if (job.vacancy) {
        document.getElementById('vac-post').textContent = job.vacancy.postName;
        document.getElementById('vac-total').textContent = job.vacancy.total;
        document.getElementById('vac-elig').textContent = job.vacancy.eligibility;
    } else {
        // Fallback if detail data missing in mock
        document.getElementById('vac-post').textContent = job.title;
        document.getElementById('vac-total').textContent = "Various";
        document.getElementById('vac-elig').textContent = "See Notification";
    }
}

renderJobDetails();
