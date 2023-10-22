import React from 'react';
import styles from './cardList.module.css';
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/Card/Card";

const getData = async (page, category) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${category || ""}`, {
    cache: "no-store"
  });

  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json();
}

const CardList = async ({page, category}) => {

  const {posts, count} = await getData(page, category);

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <section className={ styles.container } >
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {
          posts.map(post => (
           <Card key={post._id} item={post} />
         ))
        }
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </section >
  );
};

export default CardList;