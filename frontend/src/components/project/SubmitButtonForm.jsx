import styles from './SubmitButtonForm.module.css'

function SubmitButtonForm({text}){
    return (
        <>
            <button className={styles.btn} type="submit">{text}</button>
        </>
    )
}

export default SubmitButtonForm