import Image from "next/image";
import Link from "next/link";
import { bookHeader, iconGraph } from "./images/images"
import Trending from "./trending";

export default function Header({props}) {
    return (
        <>
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
                                <a className="px-4 bg-primary text-xl text-white py-1 rounded-full tracking-widest hover:tracking-widest hover:bg-transparent hover:border-1 hover:border-color-primary">Let's
                                    started</a>
                            </Link>
                        </div>
                    </div>

                    <div className="header-right py-18 px-32 w-full hidden md:block">
                        <Image src={bookHeader} width={512} height={512}/>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="px-3">
                <p className="text-lg font-normal text-custom">
                    <Image src={iconGraph} width={20} height={20}/>
                    Trending
                </p>
                <div className="border-b-2 border-gray-100"/>
                <Trending />
            </section>
        </>
    )
}