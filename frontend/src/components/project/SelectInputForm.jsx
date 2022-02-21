import styles from './SelectInputForm.module.css'

function SelectInputForm({title, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
           <label htmlFor={name}>{title}</label>
           <select name={name} id={name}>
                <option disabled selected>Selecione a categoria</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInputForm