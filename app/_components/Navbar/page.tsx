import { ModeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import Headroom from 'react-headroom'
import NavbarItem from './navbar-item'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { MenuIcon } from 'lucide-react'
import { NavbarDropdown } from './navbar-dropdown'

const Navabar = () => {
    const match = useMediaQuery('(min-width: 768px)');
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (match) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }, [match])
    return (
        <Headroom>
            <div className={
                cn('py-2 px-4 w-full h-[60px] flex justify-between items-center bg-muted z-50')
            } >
                <div className='flex'>
                    <div className='w-7 h-7 mr-2 rounded-full flex items-center justify-center bg-gray-600 text-white'>
                        K
                    </div>
                    <div>
                        Krish Parekh
                    </div>
                </div>
                <div className='flex items-center'>
                    {show && <div id='navbar' className='flex && items-center'>
                        <NavbarItem href='#home' text='Home' />
                        <NavbarItem href='#about' text='About' />
                        <NavbarItem href='#projects' text='Projects' />
                        <NavbarItem href='#contact' text='Contact Me' />
                    </div>}
                    {!show && <NavbarDropdown />}
                    <ModeToggle/>
                </div>
            </div >
        </Headroom>
    )
}

export default Navabar