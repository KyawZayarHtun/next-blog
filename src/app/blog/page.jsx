import React from 'react';
import styles from './blogPage.module.css'
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";


const BlogPage = () => {
  return (
    <section>
      <h1 className={styles.title}>style Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu />
      </div>
    </section>
  );
};

export default BlogPage;