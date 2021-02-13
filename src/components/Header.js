import React from 'react'
import './styles/Header.css'

export default function Header() {
    return (
        <div>
            <nav className="NavbarItems">
                <a href={"/"} style={{textDecoration : "none"}}><h1 className="navbar-logo">COVID 19 CENTRAL</h1></a>
                <ul className={'nav-menu'}>
                    <li>
                        <a className={"nav-links"} href={"/"}>
                            COVID RISK
                        </a>
                        <a className={"nav-links"} href={"/timecapsule"}>
                            TIME CAPSULE
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
