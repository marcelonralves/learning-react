import styles from "./InputForm.module.css"

function InputForm({title, type, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{title}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleOnChange}/>
        </div>
    )
}

export default InputForm