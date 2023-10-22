import React from 'react';
import styles from './blogPage.module.css'
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";


const BlogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1
  const {cat} = searchParams

  return (
    <section>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} category={cat} />
        <Menu />
      </div>
    </section>
  );
};

export default BlogPage;