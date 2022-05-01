import React from 'react'

const Socials =()=> {
    return (
        <section className="socials-section">
            <h3 className="socials-subheader d-flex justify-content-center">Contact Me</h3>
            <ul className="nav social-list justify-content-center">
                <a href="mailto:KeitronW@protonmail.com? subject=subject text" target="_blank"><svg class="icon icon-protonmail"><use xlinkHref="#icon-protonmail"></use></svg></a>
                <a href="https://www.linkedin.com/in/keitron-wallace-150892222/" target="_blank"><svg class="icon icon-linkedin"><use xlinkHref="#icon-linkedin"></use></svg></a>
                <a href="https://github.com/fancyf33t" target="_blank"><svg class="icon icon-github"><use xlinkHref="#icon-github"></use></svg></a>
                <a href="https://twitter.com/KeitronwW" target="_blank"><svg class="icon icon-twitter"><use xlinkHref="#icon-twitter"></use></svg></a>
            </ul>
        </section>
    )
}

export default Socials