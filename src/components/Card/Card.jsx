import React from 'react';
import styles from './card.module.css';
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            2022-09-12
          </span>
          <span className={styles.category}>- Culture</span>
        </div>
        <Link href={`/posts/`}>
          <h1>Title</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consectetur
          doloremque eveniet illo nam, nesciunt non recusandae! Accusamus fuga minima nulla! Ad
          animi, beatae consequuntur doloremque dolores earum ex facere ipsam laudantium pariatur,
          perferendis quaerat quo, reiciendis tenetur totam.
        </div>
        <Link href={`/posts/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;