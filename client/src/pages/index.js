import Head from 'next/head'
import Carousel from '@/components/Carousel'
import styles from '@/styles/home.module.scss';
import Pizza from '@/components/Pizza';
import Announcement from '@/components/Announcement';
import axios from "axios"

export default function Home({ pizzaList }) {

  return (
    <>
      <Head>
        <title>Mizza</title>
        <meta name="description" content="Pizza of your own choice!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Announcement />
      <Carousel />
      <div className={styles.pizzaList}>
        {
          pizzaList.map((pizza) => (
            <Pizza pizza={pizza} key={pizza._id} />
          ))
        }
      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data.data
    }
  }
}