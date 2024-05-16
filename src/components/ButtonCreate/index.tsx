import styles from './ButtonCreate.module.css'

type ButtonType = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export function ButtonCreate({ children, ...rest }: ButtonType) {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    )
}