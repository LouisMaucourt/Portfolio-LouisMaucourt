export function slideTransition(direction: 'up' | 'down' | 'left' | 'right') {
    let exitTransform = '';
    let enterTransform = '';

    switch (direction) {
        case 'up':
            exitTransform = 'translate(0, -100vh)';
            enterTransform = 'translate(0, 100vh)';
            break;
        case 'down':
            exitTransform = 'translate(0, 100vh)';
            enterTransform = 'translate(0, -100vh)';
            break;
        case 'left':
            exitTransform = 'translate(-100vw, 0)';
            enterTransform = 'translate(100vw, 0)';
            break;
        case 'right':
            exitTransform = 'translate(100vw, 0)';
            enterTransform = 'translate(-100vw, 0)';
            break;
    }

    // Sortie de la page actuelle
    document.documentElement.animate(
        [
            { opacity: 1, transform: 'translate(0, 0)' },
            { opacity: 0, transform: exitTransform },
        ],
        {
            duration: 400,
            easing: 'ease',
            fill: 'forwards',
            pseudoElement: '::view-transition-old(root)',
        }
    );

    // Entrée de la nouvelle page
    document.documentElement.animate(
        [
            { opacity: 0, transform: enterTransform },
            { opacity: 1, transform: 'translate(0, 0)' },
        ],
        {
            duration: 400,
            easing: 'ease',
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)',
        }
    );
}
