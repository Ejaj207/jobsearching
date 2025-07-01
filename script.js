document.addEventListener('DOMContentLoaded', function() {
    // Sample job data
    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechCorp",
            logo: "https://logo.clearbit.com/techcorp.com",
            location: "San Francisco, CA",
            type: "Full-time",
            experience: "Senior Level",
            salary: "$120,000 - $150,000",
            posted: "2 days ago",
            description: "We're looking for an experienced Frontend Developer to join our growing team. You'll be responsible for building user interfaces using React and working closely with our design team to create seamless user experiences.",
            remote: true
        },
        {
            id: 2,
            title: "Marketing Manager",
            company: "BrandWorks",
            logo: "https://logo.clearbit.com/brandworks.com",
            location: "New York, NY",
            type: "Full-time",
            experience: "Mid Level",
            salary: "$80,000 - $100,000",
            posted: "1 week ago",
            description: "Join our marketing team to develop and execute marketing campaigns. You'll work with cross-functional teams to drive brand awareness and customer acquisition.",
            remote: false
        },
        {
            id: 3,
            title: "Data Scientist",
            company: "DataSystems",
            logo: "https://logo.clearbit.com/datasystems.com",
            location: "Remote",
            type: "Full-time",
            experience: "Senior Level",
            salary: "$130,000 - $160,000",
            posted: "3 days ago",
            description: "We're seeking a Data Scientist to analyze complex data and build machine learning models. Python and SQL experience required.",
            remote: true
        },
        {
            id: 4,
            title: "UX Designer",
            company: "DesignHub",
            logo: "https://logo.clearbit.com/designhub.com",
            location: "Chicago, IL",
            type: "Contract",
            experience: "Mid Level",
            salary: "$50 - $70 per hour",
            posted: "5 days ago",
            description: "Contract position for a UX Designer to work on our client's e-commerce platform. Must have portfolio demonstrating user-centered design.",
            remote: true
        },
        {
            id: 5,
            title: "DevOps Engineer",
            company: "CloudTech",
            logo: "https://logo.clearbit.com/cloudtech.com",
            location: "Austin, TX",
            type: "Full-time",
            experience: "Senior Level",
            salary: "$110,000 - $140,000",
            posted: "1 day ago",
            description: "Looking for a DevOps Engineer to automate our deployment processes and manage our AWS infrastructure. Kubernetes experience preferred.",
            remote: false
        },
        {
            id: 6,
            title: "Product Manager",
            company: "InnovateCo",
            logo: "https://logo.clearbit.com/innovateco.com",
            location: "Boston, MA",
            type: "Full-time",
            experience: "Senior Level",
            salary: "$100,000 - $130,000",
            posted: "2 weeks ago",
            description: "Lead product development from conception to launch. Work with engineering, design, and marketing teams to deliver exceptional products.",
            remote: true
        },
        {
            id: 7,
            title: "Junior Software Engineer",
            company: "StartUp Labs",
            logo: "https://logo.clearbit.com/startuplabs.com",
            location: "Seattle, WA",
            type: "Internship",
            experience: "Entry Level",
            salary: "$25 - $35 per hour",
            posted: "4 days ago",
            description: "Great opportunity for recent graduates to gain experience in a fast-paced startup environment. Full-stack development with JavaScript and Python.",
            remote: false
        },
        {
            id: 8,
            title: "HR Coordinator",
            company: "PeopleFirst",
            logo: "https://logo.clearbit.com/peoplefirst.com",
            location: "Remote",
            type: "Part-time",
            experience: "Entry Level",
            salary: "$20 - $25 per hour",
            posted: "1 week ago",
            description: "Part-time HR Coordinator to assist with recruitment, onboarding, and employee relations. Perfect for someone looking to start a career in HR.",
            remote: true
        }
    ];

    // DOM Elements
    const jobListings = document.getElementById('job-listings');
    const jobTypeFilter = document.getElementById('job-type');
    const experienceFilter = document.getElementById('experience');
    const salaryFilter = document.getElementById('salary');
    const resetFiltersBtn = document.getElementById('reset-filters');
    
    // Testimonial slider elements
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');

    // Display all jobs initially
    displayJobs(jobs);

    // Filter jobs based on selected filters
    function filterJobs() {
        const typeValue = jobTypeFilter.value;
        const experienceValue = experienceFilter.value;
        const salaryValue = salaryFilter.value;
        
        let filteredJobs = jobs;
        
        // Filter by job type
        if (typeValue !== 'all') {
            filteredJobs = filteredJobs.filter(job => {
                if (typeValue === 'remote') {
                    return job.remote === true;
                }
                return job.type.toLowerCase().includes(typeValue.toLowerCase());
            });
        }
        
        // Filter by experience level
        if (experienceValue !== 'all') {
            filteredJobs = filteredJobs.filter(job => 
                job.experience.toLowerCase().includes(experienceValue.toLowerCase())
            );
        }
        
        // Filter by salary range
        if (salaryValue !== 'all') {
            filteredJobs = filteredJobs.filter(job => {
                const salary = job.salary;
                if (salaryValue === '0-50') {
                    return salary.includes('$20') || salary.includes('$25') || salary.includes('$35') || salary.includes('$50');
                } else if (salaryValue === '50-100') {
                    return salary.includes('$80') || salary.includes('$100');
                } else if (salaryValue === '100+') {
                    return salary.includes('$110')