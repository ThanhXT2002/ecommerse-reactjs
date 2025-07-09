import styles from '../styles.module.scss';


function SelectBox({options, getValue, type,defaultValue}) {

    const { selectBox } = styles;       
    return (
        <select 
        className={selectBox}
        value={defaultValue}
        onChange={e => getValue(e.target.value, type)}>
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
}

export default SelectBox;