(function () {
    'use strict';

    /* ── ALL COURSE SYLLABUS DATA ─────────────────────── */
    var courses = {
        'pre-algebra': {
            title: 'Pre-Algebra',
            level: 'Grade 7',
            lessons: '~70 lessons (approx.)',
            units: [
                'Unit 0: Basics',
                'Unit 1: Proportionality',
                'Unit 2: Addition & Subtraction of Rational Numbers',
                'Unit 3: Multiplication & Division of Rational Numbers',
                'Unit 4: Expressions',
                'Unit 5: One-step Equations',
                'Unit 6: Multi-step Equations',
                'Unit 7: Inequalities',
                'Unit 8: Proportional Relationships',
                'Unit 9: Proportions',
                'Unit 10: Probability',
                'Unit 11: Inferential Statistics',
                'Unit 12: Descriptive Statistics',
                'Unit 13: Similar Figures',
                'Unit 14: Angles in Triangles',
                'Unit 15: Area and Volume'
            ]
        },
        'algebra-1': {
            title: 'Algebra 1',
            level: 'Grade 8 – 9',
            lessons: '~65 lessons (approx.)',
            units: [
                'Unit 1: Analyze Graphs and Expressions',
                'Unit 2: Create and Solve Equations & Inequalities',
                'Unit 3: Systems of Equations',
                'Unit 4: One Variable Statistics',
                'Unit 5: Analyze Two Variable Data',
                'Unit 6: Sequences',
                'Unit 7: Exponential Functions',
                'Unit 8: Functions',
                'Unit 9: Factoring',
                'Unit 10: Graphing Quadratics',
                'Unit 11: Solving Quadratics'
            ]
        },
        'geometry': {
            title: 'Geometry',
            level: 'Grade 9 – 10',
            lessons: '~65 lessons (approx.)',
            units: [
                'Unit 1: Tools for Geometry',
                'Unit 2: Reasoning and Proof',
                'Unit 3: Parallel and Perpendicular Lines',
                'Unit 4: Congruent Triangles',
                'Unit 5: Polygons and Quadrilaterals',
                'Unit 6: Similarity',
                'Unit 7: Right Triangles',
                'Unit 8: Transformations',
                'Unit 9: Area',
                'Unit 10: Surface Area and Volume',
                'Unit 11: Circles',
                'Unit 12: Relationships in Triangles'
            ]
        },
        'algebra-2': {
            title: 'Algebra 2',
            level: 'Grade 10',
            lessons: '~60 lessons (approx.)',
            units: [
                'Unit 1: Polynomials',
                'Unit 2: Polynomial Functions',
                'Unit 3: Rational Expressions',
                'Unit 4: Radicals',
                'Unit 5: Transformations of Functions',
                'Unit 6: Complex Numbers',
                'Unit 7: Exponential Functions',
                'Unit 8: Logarithms',
                'Unit 9: Trigonometric Functions',
                'Unit 10: Graphing Trigonometric Functions',
                'Unit 11: Sequences and Series',
                'Unit 12: Distributions and Probability',
                'Unit 13: Sampling Methods'
            ]
        },
        'pre-calculus': {
            title: 'Pre-Calculus',
            level: 'Grade 11',
            lessons: '~65 lessons (approx.)',
            units: [
                'Unit 1: Functions & Limits',
                'Unit 2: Function Analysis',
                'Unit 3: Function Algebra',
                'Unit 4: Polynomials',
                'Unit 5: Rational Functions',
                'Unit 6: Exponential & Logarithmic Functions',
                'Unit 7: Introduction to Trigonometry',
                'Unit 8: Unit Circle',
                'Unit 9: Graphing Trigonometric Functions',
                'Unit 10: Solving Triangles',
                'Unit 11: Coordinate Systems',
                'Unit 12: Series and Sequences',
                'Unit 13: Calculus Introduction'
            ]
        },
        'ap-calculus-ab': {
            title: 'AP Calculus AB',
            level: 'AP Course · College Board',
            lessons: '~65 lessons (approx.)',
            units: [
                'Unit 0: Calculus Prerequisites',
                'Unit 1: Limits and Continuity',
                'Unit 2: Differentiation: Definition & Fundamental Properties',
                'Unit 3: Differentiation: Composite, Implicit & Inverse Functions',
                'Unit 4: Contextual Applications of Differentiation',
                'Unit 5: Analytical Applications of Differentiation',
                'Unit 6: Integration and Accumulation of Change',
                'Unit 7: Differential Equations',
                'Unit 8: Applications of Integration'
            ]
        },
        'ap-calculus-bc': {
            title: 'AP Calculus BC',
            level: 'AP Course · College Board',
            lessons: '~95 lessons (approx.)',
            units: [
                'Unit 1: Limits and Continuity',
                'Unit 2: Differentiation: Definition & Fundamental Properties',
                'Unit 3: Differentiation: Composite, Implicit & Inverse Functions',
                'Unit 4: Contextual Applications of Differentiation',
                'Unit 5: Analytical Applications of Differentiation',
                'Unit 6: Integration and Accumulation of Change',
                'Unit 7: Differential Equations',
                'Unit 8: Applications of Integration',
                'Unit 9: Parametric Equations, Polar Coordinates & Vector-Valued Functions',
                'Unit 10: Infinite Sequences and Series'
            ]
        },
        'ap-statistics': {
            title: 'AP Statistics',
            level: 'AP Course · College Board',
            lessons: '~70 lessons (approx.)',
            units: [
                'Unit 1: Exploring Data',
                'Unit 2: Modelling Data',
                'Unit 3: Analyzing Two Variable Data',
                'Unit 4: Collecting Data',
                'Unit 5: Probability',
                'Unit 6: Random Variables',
                'Unit 7: Sampling Distributions',
                'Unit 8: Confidence Intervals for Proportions',
                'Unit 9: Significance Tests for Proportions',
                'Unit 10: Confidence Intervals for Means',
                'Unit 11: Significance Tests for Means',
                'Unit 12: Chi-Square Tests',
                'Unit 13: Inference for Slopes'
            ]
        },
        'ap-pre-calculus': {
            title: 'AP Pre-Calculus',
            level: 'AP Course · College Board',
            lessons: '~75 lessons (approx.)',
            units: [
                'Unit 1: Polynomial and Rational Functions',
                'Unit 2: Exponential and Logarithmic Functions',
                'Unit 3: Trigonometric and Polar Functions',
                'Unit 4: Functions Involving Parameters, Vectors & Matrices'
            ]
        }
    };

    /* ── NAVBAR SCROLL ────────────────────────────────── */
    var navbar = document.getElementById('navbar');
    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── MOBILE MENU ──────────────────────────────────── */
    var hamburger   = document.getElementById('hamburger');
    var navLinks    = document.getElementById('navLinks');
    var navBackdrop = document.getElementById('navBackdrop');

    function openMenu() {
        hamburger.classList.add('open');
        navLinks.classList.add('open');
        navBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        navBackdrop.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function () {
        navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });
    navBackdrop.addEventListener('click', closeMenu);

    /* ── SMOOTH SCROLL ────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (id === '#') return;
            var target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            closeMenu();
            var offset = navbar.offsetHeight + 12;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        });
    });

    /* ── KEYBOARD CLOSE ───────────────────────────────── */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeMenu(); closeModal(); }
    });

    /* ── MODAL ────────────────────────────────────────── */
    var overlay   = document.getElementById('modal-overlay');
    var modalClose = document.getElementById('modal-close');
    var modalTitle   = document.getElementById('modal-title');
    var modalLevel   = document.getElementById('modal-level');
    var modalLessons = document.getElementById('modal-lessons');
    var modalUnits   = document.getElementById('modal-units');

    function openModal(courseKey) {
        var data = courses[courseKey];
        if (!data) return;

        modalLevel.textContent   = data.level;
        modalTitle.textContent   = data.title;
        modalLessons.textContent = data.lessons;

        // Build units list
        modalUnits.innerHTML = '';
        data.units.forEach(function (unit) {
            var li = document.createElement('li');
            // Split "Unit X: Title" for styling
            var parts = unit.match(/^(Unit\s*\d+[a-z]?:)\s*(.+)$/i);
            if (parts) {
                li.innerHTML = '<strong>' + parts[1] + '</strong> ' + parts[2];
            } else {
                li.textContent = unit;
            }
            modalUnits.appendChild(li);
        });

        overlay.hidden = false;
        document.body.style.overflow = 'hidden';

        // Trap focus on close button
        setTimeout(function () { modalClose.focus(); }, 50);
    }

    function closeModal() {
        overlay.hidden = true;
        document.body.style.overflow = '';
    }

    // Open modal when course card clicked
    document.querySelectorAll('.course-card[data-course]').forEach(function (card) {
        card.addEventListener('click', function () {
            openModal(this.dataset.course);
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    /* ── SCROLL REVEAL ────────────────────────────────── */
    var revealTargets = document.querySelectorAll(
        '.cred-item, .course-card, .why-item, .testi-card, .fees-table-wrap, .one-on-one-box, .contact-card, .hs-item, .about-left, .about-right, .sec-heading, .mode-card'
    );
    revealTargets.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    function reveal() {
        var vh = window.innerHeight;
        revealTargets.forEach(function (el, i) {
            if (el.getBoundingClientRect().top < vh - 60) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    // Stagger for grid children
    document.querySelectorAll('.course-card').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.04) + 's';
    });
    document.querySelectorAll('.why-item').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.06) + 's';
    });
    document.querySelectorAll('.testi-card').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.07) + 's';
    });
    document.querySelectorAll('.mode-card').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.08) + 's';
    });
    document.querySelectorAll('.contact-card').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.06) + 's';
    });

    window.addEventListener('scroll', reveal, { passive: true });
    reveal();

})();
