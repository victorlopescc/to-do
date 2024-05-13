import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.content}>
            <img src="/logo.svg" />
        </header>
    )
}