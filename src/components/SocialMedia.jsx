import React from 'react';
import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/jschwitzki/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/jschwitzki" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://api.whatsapp.com/send/?phone=5547996083240&text&app_absent=0" target="_blank" rel="noreferrer">
                    <BsWhatsapp />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia