import React from 'react'
import styled from 'styled-components'
class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: rgba(169,169,169, 0.8);
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #fff;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #04e5e5;
                }
            }
        `
        return (
        ''
        )
    }
}
export default Footer