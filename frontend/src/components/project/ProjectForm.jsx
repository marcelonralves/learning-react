import InputForm from "./InputForm"
import SelectInputForm from "./SelectInputForm"
import styles from "./ProjectForm.module.css"
import SubmitButtonForm from "./SubmitButtonForm"

function ProjectForm() {
    return (
        <form className={styles.form}>
        
            <InputForm type="text" title="Nome do Projeto" name="project_name" placeholder="Insira o nome do projeto" />
            <InputForm type="number" title="Orçamento do Projeto" name="project_budget" placeholder="Insira o orçamento do projeto" />
            <SelectInputForm name="category_id" title="Categoria do Projeto"/>
            <SubmitButtonForm text="Criar Projeto"/>
        </form>
    )
}

export default ProjectForm