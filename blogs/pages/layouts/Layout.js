import React from 'react';
import Link from "next/link";

export default function Layout({children}) {
    return (
        <div>
            <header>Next JS</header>
            <nav>
                <ul>
                    <li><Link href="/"><a> Home </a></Link></li>
                    <li><Link href="/about"><a> About </a></Link></li>
                    <li><Link href="/contact"><a> Contact </a></Link></li>
                </ul>
            </nav>
            <article> {children} </article>
            <footer>HuyNX &copy; React</footer>
            <style jsx>
                {`header,footer{background-color: grey; text-align: center;}`}
            </style>

        </div>
    );
}

