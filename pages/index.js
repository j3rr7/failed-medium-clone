import Carousel from '../components/common/Carousel'
import Link from 'next/link';
import Image from 'next/image';
import {iconGraph} from '../components/images/images';
import Trending from '../components/trending';
import Article from '../components/common/Article';

export default function Home() {
    return (
        <>
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
                                <a className="px-4 bg-primary text-xl text-white py-1 rounded-full tracking-widest hover:tracking-widest hover:bg-transparent hover:border-1 hover:border-color-primary hover:color-primary">Let's
                                    started</a>
                            </Link>
                        </div>
                    </div>

                    <div className="header-right hidden md:flex md:w-1/2 md:items-center">
                        <Carousel/>
                    </div>
                    <hr/>
                </div>
            </section>
            {/* end header */}
            {/* trending */}
            <section className="px-3">
                <p className="text-lg font-normal text-custom"><Image src={iconGraph} width={20} height={20}/> Trending
                </p>
                <div className="border-b-2 border-gray-100"/>
                <Trending/>
            </section>
            {/* end trending */}
            {/* article */}
            <section className="px-3">
                <div className="border-b-2 border-gray-100"/>
                <Article/>
            </section>
            {/* end article */}
        </>
    )
}
