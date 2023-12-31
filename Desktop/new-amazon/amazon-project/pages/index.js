
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';


 function Home({products}) {
  return (
    <div className="bg-gray-100">
   
      <Head>
        <title>Amazon 2.0</title>
      </Head>
    <Header />

    <main className="max-w-screen-2xl mx-auto">
      {/* Banner */}
      <Banner />
      {/* ProductFeed */}
      <ProductFeed 
       product={products} 
      />
      
    </main>
   
    </div>
  );
}

export default Home;
export async function getServerSideProps(context){
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
 
  return{
    props:{
      products,
    },
  }
  };

