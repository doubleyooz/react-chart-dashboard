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
        screens: {
            '0xs': '1px', 
            'xxs': '319px',
            '2xxs': '360px',
            'xs': '450px',
            '2xs': '555px',
            '2md': '888px',
            '2lg': '1124px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
            
            fontSize: {
                xxs: 'var(--text-size-base)', //10px
            },
            textColor: {
                skin: {
                    solid: 'var(--color-text-solid)',
                    detail: 'var(--color-text-detail)',
                    medium: 'var(--color-text-medium)',
                    mild: 'var(--color-text-medium)',
                    alert: withOpacity('color-text-alert'),
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
                    mild: withOpacity('color-text-medium'),
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
