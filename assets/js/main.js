/**
 * Main JavaScript functionality for the portfolio website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Projects filtering (if on projects page)
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const emptyState = document.getElementById('emptyState');
    
    if (projectFilterBtns.length > 0 && projectCards.length > 0) {
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                projectFilterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
                
                // Add active class to clicked button
                this.classList.add('active', 'bg-primary', 'text-white');
                
                const category = this.textContent.trim().toLowerCase();
                let visibleCount = 0;
                
                projectCards.forEach(card => {
                    // Get categories from data attribute
                    const cardCategories = card.dataset.category ? card.dataset.category.split(',') : [];
                    
                    if (category === 'all' || cardCategories.includes(category)) {
                        card.style.display = 'block';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Show empty state if no projects match filter
                if (emptyState) {
                    if (visibleCount === 0) {
                        emptyState.classList.remove('hidden');
                    } else {
                        emptyState.classList.add('hidden');
                    }
                }
            });
        });
    }
    
    // Blog filtering (if on blog page)
    const blogCategoryBtns = document.querySelectorAll('.blog-category-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const emptyBlogState = document.getElementById('emptyBlogState');
    const searchBlog = document.getElementById('searchBlog');
    
    if (blogCategoryBtns.length > 0 && blogCards.length > 0) {
        // Function to filter blog posts
        const filterBlogPosts = () => {
            const category = document.querySelector('.blog-category-btn.active').dataset.category;
            const searchTerm = searchBlog ? searchBlog.value.toLowerCase() : '';
            
            let visibleCount = 0;
            
            blogCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesSearch = searchTerm === '' || 
                                      title.includes(searchTerm) || 
                                      description.includes(searchTerm);
                
                if (matchesCategory && matchesSearch) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show empty state if no blog posts match
            if (emptyBlogState) {
                if (visibleCount === 0) {
                    emptyBlogState.classList.remove('hidden');
                } else {
                    emptyBlogState.classList.add('hidden');
                }
            }
        };
        
        // Category button click handler
        blogCategoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                blogCategoryBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
                this.classList.add('active', 'bg-primary', 'text-white');
                filterBlogPosts();
            });
        });
        
        // Set initial active category
        blogCategoryBtns[0].classList.add('active', 'bg-primary', 'text-white');
        
        // Search input handler
        if (searchBlog) {
            searchBlog.addEventListener('input', filterBlogPosts);
        }
    }
    
    // Contact form validation (if on contact page)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Clear previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            
            // Validate name
            if (!name.value.trim()) {
                isValid = false;
                name.classList.add('input-error');
                const errorMsg = document.createElement('p');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Please enter your name';
                name.parentNode.appendChild(errorMsg);
            } else {
                name.classList.remove('input-error');
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                isValid = false;
                email.classList.add('input-error');
                const errorMsg = document.createElement('p');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Please enter a valid email address';
                email.parentNode.appendChild(errorMsg);
            } else {
                email.classList.remove('input-error');
            }
            
            // Validate message
            if (!message.value.trim()) {
                isValid = false;
                message.classList.add('input-error');
                const errorMsg = document.createElement('p');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Please enter your message';
                message.parentNode.appendChild(errorMsg);
            } else {
                message.classList.remove('input-error');
            }
            
            // If form is valid, show success message (in real app, this would submit to a server)
            if (isValid) {
                // Normally would send to server here
                
                // Create success message
                const successMsg = document.createElement('div');
                successMsg.className = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-md mb-4';
                successMsg.innerHTML = '<p>Thank you for your message! I\'ll get back to you soon.</p>';
                
                // Insert at the top of the form
                contactForm.insertBefore(successMsg, contactForm.firstChild);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
            }
        });
    }
    
    // Load more blog posts button (if on blog page)
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real app, this would load more posts from the server
            // For now, we'll just show a message
            
            // Change button text to indicate loading
            loadMoreBtn.innerHTML = '<span class="loading-spinner inline-block mr-2"></span> Loading...';
            
            // Simulate loading delay
            setTimeout(() => {
                loadMoreBtn.textContent = 'No more articles to load';
                loadMoreBtn.disabled = true;
                loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }, 1500);
        });
    }
});
