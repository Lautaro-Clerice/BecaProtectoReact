import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Productos",
    "Contacto",
    "Preguntas-frecuentes",
  ];

  return( <>
    <Navbar
    className='bg-[#9319fd85]'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-white"><a href="/">BecaShop!</a></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 w-[100%]" justify="center">
        <NavbarBrand>
          <Link className='text-white font-bold' href='/'>
            BecaShop!
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link className='text-white' href="/productos">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href="/contacto" aria-current="page">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem className='mr-[10px]'>
          <Link className='text-white' href="/preguntas-frecuentes">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Link href="/login" className='text-white'>Ingresar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className='text-white' color="secondary" href="/register" variant="flat">
            Registrate
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </>
  )
}

export default Navbarr