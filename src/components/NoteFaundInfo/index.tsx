import styles from '@components/NoteFaundInfo/NoteFaundInfo.module.scss';

const NoteFaundInfo = () => {
	return (
		<div className={styles.infoBlock}>
			<span className={styles.infoIcon}>😕</span>
			<h1 className={styles.infoTitle}>Ничего не найдено!</h1>
		</div>
	);
};

export default NoteFaundInfo;
