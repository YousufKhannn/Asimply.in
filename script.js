// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the theme
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // Form submission
  const waitlistForm = document.querySelector('.waitlist-form');
  const emailInput = document.querySelector('.email-input');
  
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      // Here you would typically send the email to your server
      // For now, we'll just show a success message
      alert(`Thank you for joining our waitlist with email: ${email}`);
      emailInput.value = '';
    });
  }
  
  // Add click event to the Join Waitlist button
  const joinWaitlistBtn = document.querySelector('.waitlist-form .btn-primary');
  if (joinWaitlistBtn) {
    joinWaitlistBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      // Here you would typically send the email to your server
      // For now, we'll just show a success message
      alert(`Thank you for joining our waitlist with email: ${email}`);
      emailInput.value = '';
    });
  }
});