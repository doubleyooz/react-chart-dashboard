module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                icon: 'var(--text-size-base)',
            },
            textColor: {
                skin: {
                    solid: 'var(--color-text-solid)',
                    medium: 'var(--color-text-medium)',
                    mild: 'var(--color-text-medium)',
                },
            },
            backgroundColor: {
                skin: {
                    default: 'var(--color-bg-default)',
                    detail_1: 'var(--color-bg-detail-1)',
                },
            },
            fill: {
                skin: {
                    default: 'var(--color-icon-image-1)',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
