
const defaultProps = {
    font: 'font-nunito',
    color: 'dark:text-white text-blue-light-element`'
}

export const Presets: { [char: string]: any } = {
    h1: {
        default: `m-0 p-0 ${defaultProps.font} ${defaultProps.color}`,
        size: ['extraLarge', 'large', 'medium'],
        weight: ['bold', 'regular'],
    },
    h2: {
        default: `m-0 p-0 ${defaultProps.font} ${defaultProps.color}`,
        size: ['extraLarge', 'large', 'medium'],
        weight: ['bold', 'regular'],
    },
    h3: {
        default: `m-0 p-0 ${defaultProps.font} ${defaultProps.color}`,
        size: ['extraLarge', 'large', 'medium'],
        weight: ['bold', 'regular']
    },
    span: {
        weight: ['bold', 'regular', 'light'],
        size: ['medium', 'small'],
        default: `m-0 p-0 ${defaultProps.font} ${defaultProps.color}`
    }
}

export const Weights: { [char: string]: string } = {
    light: 'font-light',
    bold: 'font-bold',
    regular: 'font-normal'
}

export const Size: { [char: string]: string } = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    extraLarge: 'text-xl',
}