import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <span className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
      </div>
    </span>
  );
};
export default Loader;
