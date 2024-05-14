import styles from './Checkbox.module.css'

export function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" />
            <span></span>
        </div>

    )
}