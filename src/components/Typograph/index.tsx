import { ElementType, ReactNode } from 'react'
import { Presets, Weights, Size } from './preset';

type TypographyProps = {
    htmlTag: ElementType,
    className: string,
    children: ReactNode
    preset: string
    size: string
    weight: string
}

const Typography = ({ 
    htmlTag: HtmlTag, 
    className, 
    preset, 
    children,
    size,
    weight,
 }: TypographyProps) => {

    const valuesPreset = Presets[preset];

    const typographClasses = constructorClasses({
        possibleValues: valuesPreset, 
        preset: { size, weight }
    }); 

    const typographClassName = `${className} ${typographClasses}`;

    return (
        <HtmlTag className={typographClassName}>{children}</HtmlTag>
    )
}

interface ConstructorClassesParams {
    possibleValues:  { [char: string]: any },
    preset: {
        size: string,
        weight: string
        [char: string]: any
    }
}

const constructorClasses = ({ possibleValues, preset }: ConstructorClassesParams) => {
    const presetKeys = Object.keys(preset);
    let classes = ''

    presetKeys.forEach(presetKeyValue => {
        const valuePreset = preset[presetKeyValue];
        const possibleValue = possibleValues[presetKeyValue];

        if(possibleValue.includes(valuePreset)){
            if(presetKeyValue === 'size'){
                classes = `${classes} ${Size[valuePreset]}`
            }
            if(presetKeyValue === 'weight'){
                classes = `${classes} ${Weights[valuePreset]}`
            }
        }
    });

    return`${classes} ${possibleValues['default']}`
}

export default Typography;