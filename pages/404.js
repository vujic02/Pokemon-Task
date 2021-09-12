import React from "react";
import styles from "../styles/Error.module.scss";
import { Layout } from "../components/index";

const Error = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <h1 className={styles.error__message}>
          Error 404: <span>Page Not Found</span>
        </h1>
      </div>
    </Layout>
  );
};

export default Error;
