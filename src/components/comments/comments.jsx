import React from 'react';
import styles from './comments.module.css'
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          />
        <button className={styles.button}>
          Send
        </button>
      </div>

      {/*<Link href="/login">Login to write a comment</Link>*/}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>

              <Image
                src="/food.png"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />

            <div className={styles.userInfo}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>created at</span>
            </div>
          </div>
          <p className={styles.desc}>description</p>
        </div>

      </div>
    </div>
  );
};

export default Comments;