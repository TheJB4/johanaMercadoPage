import { useState } from 'react'
import { LuMenu } from "react-icons/lu";


function Header() {
    let [openMenu, setOpenMenu] = useState(false)

    let toggle = (e) => {
        setOpenMenu(!openMenu)
    }

    return (
        <header className='flex  justify-end items-center w-full'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <LuMenu onClick={toggle} />
                {
                    openMenu &&
                    <div >
                        <ul>
                            <li>Tracyectoria</li>
                            <li>Prensa</li>
                            <li>Pacientes</li>
                            <li>Articulos</li>
                            <li>Infloblog</li>
                            <li>Testimonios</li>
                            <li>Videos</li>
                            <li>Contactos</li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header