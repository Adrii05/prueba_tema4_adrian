'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Página principal',
        href: '/'
    },
    {
        text: 'medicos-db',
        href: '/medicos-db'
    },
    {
        text: 'pacientes-db',
        href: '/pacientes-db'
    },
    {
        text: 'medicos-api',
        href: '/medicos-api'
    },
    {
        text: 'pacientes-api',
        href: '/pacientes-api'
    }
]

function Menu() {
    const pathname = usePathname()

    return (
        <nav className="font-bold flex items-center gap-4 text-blue-500 ">

            {menu.map(item =>
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname == item.href && 'text-black no-underline'}`}>

                    {item.text}
                </Link>
            )}

        </nav>
    );
}

export default Menu;