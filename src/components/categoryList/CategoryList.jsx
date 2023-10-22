import React from 'react';
import styles from './categoryList.module.css';
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json();
}

const CategoryList = async () => {

  const data = await getData();
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          data?.map(cat => (
            <Link
              key={cat._id}
              href={`/blog?cat=${cat.slug}`}
              className={`${styles.category} ${styles[cat.slug]}`}>
              {cat.img && <Image
                src={cat.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />}
              {cat.title}
            </Link>
          ))
        }
      </div>
    </section>
  );
};

export default CategoryList;