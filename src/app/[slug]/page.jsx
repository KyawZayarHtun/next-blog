import React from 'react';
import styles from './singlePage.module.css'
import Image from "next/image";
import Comments from "@/components/comments/comments";
import Menu from "@/components/menu/Menu";

const SinglePage = () => {
  return (
    <section>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.user}>

              <div className={styles.userImageContainer}>
                <Image src="/travel.png" alt="" fill className={styles.avatar} />
              </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>username</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>

          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>

      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
          />
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </section>
  );
};

export default SinglePage;