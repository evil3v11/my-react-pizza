import { FaceSlightlyFrowning } from "lucide-react";

import styles from "./NotFoundContent.module.css";

const NotFoundContent = () => {
  return (
    <>
      <h1 className={styles.root}>
        <FaceSlightlyFrowning width={48} height={48} />
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует
      </p>
    </>
  );
};

export default NotFoundContent;
