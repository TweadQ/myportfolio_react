import { createClient } from 'contentful';
import React from 'react'
import Layout from '../../components/layout/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
export async function getStaticProps({params}) {
  // A - récupère la date une fois que la promesse success
  const response = await client.getEntries({
    content_type:"projets",
    'fields.slug': params.slug,
  })

  // B - je stock la data dans variable projet
  const projet = response.items;

  return {
    // Passed to the page component as props
    props: { projet: projet[0] },
  }
}


export default function show({projet}) {
  const {title, description, roles, skills, featuredImage, urlDuProjet} = projet.fields;
  return (
    <Layout 
      title={title} 
      metaContent={`Le projet ${title} est un projet fait avec Laravel & React`}
      image={`http${featuredImage.fields.file.url}`}
    >
        <div className='flex items-center justify-center gap-20'>
            <div>
                <p className='text-2xl font-bold uppercase'>titre : {title}</p>
                <div className='text-xl font-medium uppercase'>description : {documentToReactComponents(description)}</div>
                <p><span className='font-semibold'>Rôle :</span> {roles}</p>
                <ul className='font-semibold'>
                  <li>Skills :</li>
                  {skills.map((skill) => (
                  <li key={skill}>{skill}</li>))}
                </ul>
                <a href={`/www.${urlDuProjet}`} target='_blank' className='border-2 border-gray-500'>Voir le projet</a>
            </div>
            <div className='shadow-2xl w-[50%]'>
                <img src={featuredImage.fields.file.url} alt={`Quentin portfolio ${title}`} />
            </div>
        </div>
    </Layout>
  )
}
