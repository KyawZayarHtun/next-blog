"use client"
import React, { useState } from 'react';
import styles from './comments.module.css'
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

const Comments = ({postSlug}) => {

  const {status} = useSession();
  const {
    data,
    mutate,
    isLoading,
  } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({desc, postSlug})
    })
    await mutate();
    await setDesc("");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
         <Link href="/login">Login to write a comment</Link>
       )}

      <div className={styles.comments}>
        {
          isLoading ? "loading" : data.map(cmt => (
            <div className={styles.comment} key={cmt._id}>
              <div className={styles.user}>
                {cmt.user?.image &&
                  <Image
                    src={cmt.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                }
                <div className={styles.userInfo}>
                  <span className={styles.username}>{cmt.user.name}</span>
                  <span className={styles.date}>{cmt.createdAt}</span>
                </div>
              </div>
              <p className={styles.desc}>{cmt.desc}</p>
            </div>

          ))
        }
      </div>

    </div>
  )
    ;
};

export default Comments;