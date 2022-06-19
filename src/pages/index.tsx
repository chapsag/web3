import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar, Footer } from '@components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>web3 learning</title>
        <meta name="description" content="web3 et blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <h1>Apprends le web3</h1>
        <input type="text" placeholder="Email" />
        <button>S'abonner</button>
        <p>
          Rejoins une communauté de plus de 300 développeurs pour apprendre le
          web3 et la blockchain. Reçois du contenu exclusif que je n'envoie qu'à
          mes abonnés.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
