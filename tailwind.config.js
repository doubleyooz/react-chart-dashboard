module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
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
    plugins: [],
};
