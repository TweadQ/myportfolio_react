import { createClient } from 'contentful'
import Layout from '../components/layout/Layout'
import SectionAbout from '../components/SectionAbout'
import SectionCompetences from '../components/SectionCompetences'
import SectionReseau from '../components/SectionReseau'
import SectionShow from '../components/SectionShow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className='flex flex-col justify-center items-center mb-24'>
          <h1 className='uppercase font-bold text-4xl mt-24'>développeur web full-stack</h1>
          <img className='w-[50%]' src="img/undraw_Programmer_re_owql.png" alt="" />
        </div>
        <SectionAbout />
        <SectionCompetences />
        <SectionShow />
        <SectionReseau />
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  // 1 - connexion au contentful
  const client = createClient();
  return {
    props: {}, // will be passed to the page component as props
  }
}