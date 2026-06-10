// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open contact form with plan pre-selected
function openContactForm(planName) {
    const planSelect = document.getElementById('plan');
    if (planSelect) {
        planSelect.value = planName;
    }
    scrollToSection('contact');
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const plan = document.getElementById('plan').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message and log the data
            console.log({
                name: name,
                email: email,
                phone: phone,
                plan: plan,
                message: message,
                timestamp: new Date().toISOString()
            });
            
            // Show success message
            showMessage('Thank you for your interest! We\'ll contact you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                document.getElementById('formMessage').style.display = 'none';
            }, 5000);
        });
    }
});

// Show form message
function showMessage(text, type) {
    const messageEl = document.getElementById('formMessage');
    if (messageEl) {
        messageEl.textContent = text;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';
    }
}

// Smooth scroll behavior for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add workout split selection
function setSplitGoal(goal) {
    const splitContent = document.getElementById('splitContent');
    const buttons = document.querySelectorAll('.split-button');

    buttons.forEach(button => {
        button.classList.toggle('active', button.dataset.goal === goal);
    });

    if (!splitContent) return;

    let title = '';
    let items = [];

    switch (goal) {
        case 'muscle':
            title = 'Muscle Building Split';
            items = [
                'Day 1: Chest and Triceps',
                'Day 2: Back and Biceps',
                'Day 3: Legs and Shoulders',
                'Day 4: Rest or Light Cardio',
                'Day 5: Upper Body Hypertrophy',
                'Day 6: Lower Body Hypertrophy',
                'Day 7: Rest or Mobility'
            ];
            break;
        case 'fatloss':
            title = 'Fat Loss Split';
            items = [
                'Day 1: Full Body Strength',
                'Day 2: HIIT/Cardio',
                'Day 3: Upper Body Circuit',
                'Day 4: Active Recovery or Yoga',
                'Day 5: Lower Body Circuit',
                'Day 6: Cardio and Core',
                'Day 7: Rest'
            ];
            break;
        case 'endurance':
            title = 'Endurance Split';
            items = [
                'Day 1: Steady-State Cardio',
                'Day 2: Upper Body Endurance',
                'Day 3: Low-Intensity Cardio',
                'Day 4: Core and Mobility',
                'Day 5: Lower Body Endurance',
                'Day 6: Interval Training',
                'Day 7: Rest or Light Activity'
            ];
            break;
        default:
            title = 'Strength Split';
            items = [
                'Day 1: Upper Body Push',
                'Day 2: Lower Body Squat',
                'Day 3: Rest or Active Recovery',
                'Day 4: Upper Body Pull',
                'Day 5: Lower Body Deadlift',
                'Day 6: Rest or Mobility',
                'Day 7: Full Body Power'
            ];
    }

    splitContent.innerHTML = `
        <h3>${title}</h3>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.plan-card, .class-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Setup split selection buttons
document.querySelectorAll('.split-button').forEach(button => {
    button.addEventListener('click', () => setSplitGoal(button.dataset.goal));
});
