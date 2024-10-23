import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"


function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      
      
      
  
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Productos</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
        </div>
    </nav>
  )
}

export default NavBar