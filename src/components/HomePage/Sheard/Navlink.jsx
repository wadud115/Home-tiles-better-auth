"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navlink = ({href,children}) => {
    const pathname = usePathname();
console.log('pathName ', pathname);

const isActive = href=== pathname;
    return (
        <Link className={`${isActive ? ' border-b border-b-3 border-gray-700 ' : ''}`} href={href}>{children}</Link>
    );
};

export default Navlink;