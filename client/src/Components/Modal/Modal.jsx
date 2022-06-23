import styles from './Modal.module.css'

export function Modal({openModal, onClose}) {
    if(!openModal) return null;
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p onClick={onClose} className={styles.closeBtn}>Close</p>
                <div className={styles.content}>
                    <div className={styles.img}></div>
                    <h3>POKEMON CREATED SUCCESFULLY</h3>
                </div>
            </div>
        </div>
    )
}
