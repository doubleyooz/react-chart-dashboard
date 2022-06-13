const withOpacity = (variableName) => {
    return ({ opacityValue }) => {
        if (opacityValue)
            return `rgba(var(--${variableName}), ${opacityValue})`;
        return `rgba(var(--${variableName}))`;
    };
};
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                'xs': '450px',
                '2md': '888px',
                '2lg': '1124px',
            },
            fontSize: {
                icon: 'var(--text-size-base)',
            },
            textColor: {
                skin: {
                    solid: 'var(--color-text-solid)',
                    detail: 'var(--color-text-detail)',
                    medium: 'var(--color-text-medium)',
                    mild: 'var(--color-text-medium)',
                },
            },
            backgroundColor: {
                skin: {
                    default: 'var(--color-bg-default)',
                    darker: withOpacity('color-bg-darker'),
                    detail_1: withOpacity('color-bg-detail-1'),
                    inverted: withOpacity('color-bg-inverted'),
                    white: withOpacity('color-bg-white'),
                    mildWhite: withOpacity('color-bg-mild-white'),
                    warning: withOpacity('color-bg-warning'),
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(#E0E1E2, #ffffff)',
            },
            fill: {
                skin: {
                    default: 'var(--color-icon-image-1)',
                    default_2: withOpacity('color-bg-detail-1'),
                    darker: withOpacity('color-bg-darker'),
                    warning: withOpacity('color-bg-warning'),
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
