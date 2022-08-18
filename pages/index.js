import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        

        <p>So nice of you to stop by ❤️.</p>

        <p>I've been coding since my early teen years and love to create products on- and offline 🛠️.</p>

        <p>Feel free to reach out at {' '}<a href="mailto:hey@lionsix.ch?body=hey :)">hey@lionsix.ch✉️ </a> and I'll make sure to get in contact with you immediately 🏃!</p>

        <p>
         If you want to, you can check out {' '}
          <a href="https://github.com/snow2405">my github profile</a> here.
        </p>
      </section>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>


    </Layout>
  );
}
