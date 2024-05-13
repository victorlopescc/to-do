import styles from './ButtonCreate.module.css'

interface ButtonProps {
    children: React.ReactNode
}

export function ButtonCreate({ children, ...rest }: ButtonProps) {
    return (
        <button
            className={styles.button}
            {...rest}
        >
            {children}
        </button>
    )
}