import Head from 'next/head'
import Carousel from '@/components/Carousel'
import styles from '@/styles/home.module.scss';
import Pizza from '@/components/Pizza';
import Announcement from '@/components/Announcement';
import Link from 'next/link';

export default function Home() {

  const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
          dummyArr.map((d) => (
            <Link href={`/product/${d}`}><Pizza /></Link>
          ))
        }
      </div>
    </>
  )
}
