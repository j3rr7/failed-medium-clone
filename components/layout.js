import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({children}) {
    return (
        <>
            <Navbar/>

            <div className={"container"}>
                <main>
                    {children}
                </main>
            </div>

            <Footer/>
        </>
    )
}
