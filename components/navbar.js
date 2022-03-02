
import Menu from '../components/common/Menu';
export default function navbar() {
  return (
    <>
      <header className="lg:px-16 px-8 bg-white flex flex-wrap items-center py-3 md:py-3 sm:py-6 shadow-md">
        <div className="container">
          <Menu/>
        </div>
      </header>
    </>
  )
}
