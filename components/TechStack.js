import React from 'react'

const TechStack =()=> {
    return (
        <div className="tech-stack-section">
            <h3 classNam="tech-subheader">How I did it</h3>
            <ul className="tech-list d-flex justify-content-around">
                <li className="tech-item"><svg class="icon icon-html5"><use xlinkHref="#icon-html5"></use></svg></li>
                <li className="tech-item"><svg class="icon icon-css3"><use xlinkHref="#icon-css3"></use></svg></li>
                <li className="tech-item"><svg class="icon icon-react"><use xlinkHref="#icon-react"></use></svg></li>
                <li className="tech-item"><svg class="icon icon-javascript"><use xlinkHref="#icon-javascript"></use></svg></li>
                <li className="tech-item"><svg class="icon icon-bootstrap"><use xlinkHref="#icon-bootstrap"></use></svg></li>
            </ul>
        </div>
    )
}

export default TechStack