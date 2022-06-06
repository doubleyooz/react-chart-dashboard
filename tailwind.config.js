const withOpacity = (variableName) => {
    return ({opacityValue}) => {
        if(opacityValue)
        return `rgba(var(--${variableName}), ${opacityValue})`;
        return `rgba(var(--${variableName}))`;
    }
}
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
                    darker:  withOpacity('color-bg-darker'),
                    detail_1: withOpacity('color-bg-detail-1'),
                    inverted: withOpacity('color-bg-inverted'),
                    white: withOpacity('color-bg-white'),
                },
            },
            fill: {
                skin: {
                    default: 'var(--color-icon-image-1)',
                    default_2: withOpacity('color-bg-detail-1'),
                    darker: withOpacity('color-bg-darker')
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
