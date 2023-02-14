
import React from "react";
import {ReactComponent as IndeedLogo} from './assets/linkedIn.svg';
import {ReactComponent as GitLogo} from './assets/github.svg'
import {ReactComponent as GmailLogo} from './assets/gmail.svg'

export default function Sidebar() {
    return(
        <section id="sidebar">
            <div className="fixed grid grid-cols-1 gap-4 content-center duration-200 transition-opacity ease-in-out opacity-50 hover:opacity-100 z-10 justify-items-center rounded ml-3 left-0 bottom-0 w-16 py-4 bg-web-800">
                <a className="hover:bg-web-600 px-4 py-4 rounded transition ease-in-out delay-50 hover:scale-110 duration-300" href="https://www.linkedin.com/in/kendrick-mcadams-9446b61a5/">
                    <IndeedLogo className="w-4 h-4" />
                </a>
                <a className="hover:bg-web-600 px-4 py-4 rounded transition ease-in-out delay-50 hover:scale-110 duration-300" href="https://github.com/KMcAdams21">
                    <GitLogo className="w-4 h-4" />
                </a>
                <a className="hover:bg-web-600 px-4 py-4 rounded transition ease-in-out delay-50 hover:scale-110 duration-300" href="mailto:mcadams.kendrick@gmail.com">
                    <GmailLogo className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};