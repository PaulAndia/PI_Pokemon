import styles from './Modal.module.css'

export function Modal({openModal, onClose}) {
    if(!openModal) return null;
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p onClick={onClose} className={styles.closeBtn}>Cerrar</p>
                <div className={styles.content}>
                    <h3>CREATED SUCCESFULLY</h3>
                </div>
            </div>
        </div>
    )
}
