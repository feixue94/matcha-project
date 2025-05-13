function showSection(id, class_name) {
    // Hide all sections and remove their content to free up memory
    const sections = document.getElementsByClassName(class_name);
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        // sections[i].innerHTML = '';
    }

    // Load content only for the clicked (or default) section
    const selectedSection = document.getElementById(id);
    // selectedSection.innerHTML = contentMap[id] || `<p>No content for section "${id}".</p>`;
    selectedSection.style.display = 'block';

    // if (id === 'video_3d') {
    //     initCarouselResults();
    // }
}

function initCarouselResults() {
    document.querySelectorAll('#carousel-results video source[data-src]').forEach(srcTag => {
        const realSrc = srcTag.getAttribute('data-src');
        srcTag.setAttribute('src', realSrc);
        srcTag.removeAttribute('data-src');
    });

    bulmaCarousel.attach('#carousel-results', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: false
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', function () {
    showSection('semantic_matching', 'result_section');
    showSection('comp_heatmap', 'compare_section');
});

function openInNewTab(element) {
    var url = element.getAttribute('data-link');
    window.open(url, '_blank').focus();
}