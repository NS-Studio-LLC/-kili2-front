const playButtons = document.querySelectorAll('[data-video-play]');

playButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.testimonials__card');
        const video = card.querySelector('.testimonials__video');

        if (video.paused) {
            video.muted = false;
            video.play();
            this.classList.add('is-playing');
        } else {
            video.pause();
            this.classList.remove('is-playing');
        }
    });
});