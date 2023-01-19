import classnames from 'classnames';
import Select from 'react-select';

const SelectCustom = ({ options, onChange, placeholder, classNames }: SelectProps) => {  
    const containerClasses = classnames(classNames);

    return (
        <div className={containerClasses}>
            <Select 
            placeholder={placeholder}
            classNames={{
                control: () => 'py-2 bg-white dark:bg-blue-dark-element dark:text-white',
                menu: () => 'bg-white dark:bg-blue-dark-element dark:text-white',
                singleValue: () => 'dark:text-white'
            }}
            options={options} onChange={onChange} />
        </div>
    )
}

SelectCustom.defaultProps = {
    placeholder: 'Select one option'
}

type SelectProps = {
    options: Array<OptionType>,
    onChange: VoidFunction,
    placeholder?: string,
    classNames?: string
}

type OptionType = {
    value: string,
    label: string
}

export default SelectCustom