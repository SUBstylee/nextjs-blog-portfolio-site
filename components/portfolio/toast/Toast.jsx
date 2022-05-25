import styles from '../../../styles/Toast.module.scss';

const Toast = ({hidden,message}) => {
  return (
    <div className={styles.toast}>
        <p className={`${styles.toast__message} ${hidden===false?styles.hidden:''}`}>{message}</p>
    </div>
  )
}

export default Toast