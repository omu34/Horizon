// hero-testimonial.js

class TestimonialSlider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('[data-slider-track]');
        this.nextBtn = container.querySelector('[data-next-button]');
        this.slides = container.querySelectorAll('.testimonial-slide');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;

        if (this.track && this.nextBtn && this.totalSlides > 1) {
            this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
        }
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        const translateX = -(this.currentIndex * 100);
        this.track.style.transform = `translateX(${translateX}%)`;
    }
}

// Initialize all instances of the slider on the page.
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrappers = document.querySelectorAll('[data-slider-wrapper]');
    sliderWrappers.forEach(wrapper => {
        // Check if the element hasn't been initialized yet
        if (!wrapper.dataset.initialized) {
            new TestimonialSlider(wrapper);
            wrapper.dataset.initialized = 'true'; // Mark as initialized
        }
    });
});

// Shopify Theme Editor Support (Optional but recommended for a professional component)
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
        const section = event.target;
        const wrapper = section.querySelector('[data-slider-wrapper]');
        if (wrapper) {
            new TestimonialSlider(wrapper);
        }
    });
}