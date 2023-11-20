import { useState } from 'react'
import {faBars} from ''

function Header(){
    return(
        <header className='flex justify-center items-center w-full'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <FontAwesomeIcon icon={faBars}/>
            </div>  
        </header>
    )
}

export default Header