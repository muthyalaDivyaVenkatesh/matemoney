import styles from './photo.module.css'

function Photos() {
    return (
        <>
            <section className={styles.uploadPhotos}>
                <h3>Upload Pic</h3>
                <input type="file" />
            </section>

        </>
    )
}

export default Photos