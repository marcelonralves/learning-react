import { useEffect, useState } from "react"

import InputForm from "./InputForm"
import SelectInputForm from "./SelectInputForm"
import styles from "./ProjectForm.module.css"
import SubmitButtonForm from "./SubmitButtonForm"

function ProjectForm({handleSubmit, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {
            setCategories(data)})
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
     })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
        
            <InputForm type="text" title="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>
            <InputForm type="number" title="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento do projeto" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
            <SelectInputForm name="category_id" title="Categoria do Projeto" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
            <SubmitButtonForm text="Criar Projeto"/>
        </form>
    )
}

export default ProjectForm