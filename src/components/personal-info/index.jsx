import React from 'react'

import {
    Avatar,
    PersonalInfo
} from './aside.styles'

export const Aside = () => {
    return (
        <PersonalInfo>
            <Avatar>
                <a href="">
                    <img src="https://avatars0.githubusercontent.com/u/15925516?s=460&u=0fa6bcb73be94068eecd49458671a16241390aed&v=4" alt=""/>
                </a>
            </Avatar>
            <div>
                John Doe
            </div>
            <div>
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
            </div>
            <ul>
                <li>About me</li>
                <li>Contact me</li>
                <li>Visit site</li>
            </ul>
            <ul>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </PersonalInfo>

    )
}
