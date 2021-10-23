import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Projecttable from '../components/ProjectTable/Projecttable'



// function ProjectList() {
//   return(
//     <ul className={styles.list}>
      

//     </ul>
//   )
// }

export default function Home({jsondata}) {
  console.log(jsondata);
  return (
    <Layout>
      <div className={styles.counts}>Found {jsondata.length} Projects</div>
      <Projecttable jsondata={jsondata}/>
  </Layout>
  )
}



export const getStaticProps = async() => {

  const res = await fetch("https://my-json-server.typicode.com/danieledisons/mockjsonfl/projects");

  const jsondata = await res.json();

  return {
    props: {
      jsondata,
    },
    revalidate: 10 
  };
};
