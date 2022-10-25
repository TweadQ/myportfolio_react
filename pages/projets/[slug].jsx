import { createClient } from 'contentful';
import React from 'react'
import Layout from '../../components/layout/Layout'


// 1 - connexion au contentful
const client = createClient({
  space : process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// 2 - Generates all slugs of my projet in contentful
export async function getStaticPaths() {
    // 1 - récupère la date une fois que la promesse success
    const response = await client.getEntries({content_type:"projets"})

    // 2 - Get all slugs
    const slugs = response.items.map((slug) => {
      return {
            params: {
                slug: slug.fields.slug
            },
          };
    });
    // 3 - renvoie tout les slugs
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  }
}

// 3 - Récupere la data du show //
/////////////////////////////////
export async function getStaticProps(context) {
  console.log(context);
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}


export default function show() {
  return (
    <Layout>
        <div className='flex items-center justify-center gap-20'>
            <div className=''>
                <p className='text-2xl font-bold uppercase'>titre :</p>
                <p className='text-xl font-medium uppercase'>description :</p>
                <p><span className='font-semibold'>Rôle :</span> Développeur front React</p>
                <p><span className='font-semibold'>Stack :</span>React/Tailwindcss/fontawesome/git</p>
                <a href="#" className='border-2 border-gray-500'>Voir le projet</a>
            </div>
            <div className='shadow-2xl px-20 w-[50%]'>
                <img src="../img/react-code-du-travail-screen.png" alt="" />
            </div>
        </div>
    </Layout>
  )
}
