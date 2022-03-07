import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { iconGraph } from '../components/images/images';
import Trending from '../components/common/trendingCard';
import Article from '../components/common/Article';

export default function Home() {
  return (
    <Layout>
      {/* header */}
      <section className="header">
        <div className="flex h-4/5 px-3 justify-between">
          <div className="header-left py-14 w-full">
            <p className="text-8xl font-semibold">Penulis</p><br/>
            <p className="text-6xl font-light -mt-7">yang Baik,</p>
            <p className="text-6xl font-light">Karena Ia Menjadi</p>
            <p className="text-6xl font-light">Pembaca yang</p>
            <p className="text-6xl font-light">Baik.</p>
            <p className="text-xl font-light mt-5">kami berikan artikel yang</p>
            <p className="text-xl font-light">menarik maupun dari</p>
            <p className="text-xl font-light">pemikiran kami untuk Anda</p>
            <div className="mt-4">
              <Link href="#">
                <a className="px-4 bg-primary text-xl text-white py-1 rounded-full tracking-widest hover:tracking-widest hover:bg-transparent hover:border-1 hover:border-color-primary">Let's started</a>
              </Link>
            </div>
          </div>

          <div className="header-right w-full hidden md:flex lg:w-full md:w-1/2">
            <img src="/assets/images/book.png" alt='img-header' className="mx-auto object-contain"/>
          </div>
          <hr/>
        </div>
      </section>
      {/* end header */}
      {/* trending */}
      <section className="px-3">
        <p className="text-lg font-normal text-custom"><Image src={iconGraph} width={20} height={20}/> Trending</p>
        <div className="border-b-2 border-gray-100"></div>
        <Trending/>
      </section>
      {/* end trending */}
      {/* article */}
      <section className="px-3 mt-16 border-2">
        <div className="border-b-2 border-gray-100"></div>
        <Article/>
      </section>
      {/* end article */}
    </Layout>
  )
}
