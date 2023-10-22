import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import styles from './homepage.module.css'
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}
