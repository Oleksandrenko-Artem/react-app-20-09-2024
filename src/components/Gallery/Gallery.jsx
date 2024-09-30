import Picture from "../Picture/Picture";
import arrayPictures from "./data";
import styles from './Gallery.module.css'

const Gallery = () => {
    const showPictures = (picture) => (
        <Picture key={picture.id} src={picture.src} alt={picture.alt} />
    )
    return (
        <section className={styles.container}>{arrayPictures.map((showPictures))}</section>
    );
}

export default Gallery;
