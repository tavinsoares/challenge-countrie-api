
const defaultProps = {
    font: 'font-nunito',
    color: 'dark:text-white text-blue-light-element`'
}

export const Presets: { [char: string]: any } = {
    h1: {
        default: `text-xl m-0 p-0 ${defaultProps.font} ${defaultProps.color}`,
        size: ['large', 'medium'],
        weight: ['bold', 'regular'],
    },
    span: {
        weight: ['bold', 'regular'],
        size: ['medium'],
        default: `m-0 p-0 ${defaultProps.font} ${defaultProps.color}`
    }
}

export const Weights: { [char: string]: string } = {
    bold: 'font-bold',
    regular: 'font-normal'
}

export const Size: { [char: string]: string } = {
    large: 'text-xl',
    medium: 'text-base'
}