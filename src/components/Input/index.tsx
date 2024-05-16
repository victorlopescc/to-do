import styles from './Input.module.css'

type InputType = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

export function Input({ ...rest }: InputType) {
    return (
        <input
            className={styles.input}
            placeholder='Adicione uma nova tarefa'
            {...rest}
        />
    )
}