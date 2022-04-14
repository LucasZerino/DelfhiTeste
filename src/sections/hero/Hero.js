import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import ContactCreative2 from '../contact/ContactCreative2'
import Unimed from './imgs/unimed.png'
import Amil from './imgs/amil.png'
import Bradesco from './imgs/bradesco.png'
import Delfhi from './imgs/delfhi.png'
import Hapvida from './imgs/hapvida.png'
import Humana from './imgs/humana.png'
import Sulamerica from './imgs/sulamerica.png'

class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
        
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(0,0,0,.3);
        `

        const Heading1 = styled.h1`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teko:wght@300&display=swap');
            font-size: 80px;
            font-family: Teko;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 40px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: #e8590c;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            position: relative;
            z-index: 10
            text-align: center;
            display: flex;
            flex-direction: column;
            text-align: center;
        `

        const Separator = styled.div`
            position: relative;
            height: 5px;
            width: 900px;
            background-color: #e8590c;
            margin-bottom: 30px;
            align-self: center;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
        `

        const BottomContent = styled.div`
            position: absolute;
            display: flex;
            width: 100%;
            justify-content: center;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }

            .card{
                height: 310px;
                width: 310px;
                background-color: white;
                transform: scale(0.7);
                border-radius: 8px;
                box-shadow: 0 0 10px 0.5px white;
            }
            .card .info{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
            }
            .card .info .name{
                font-size: 35px;
                font-weight: 600;
                color: #f79f08;
                position: absolute;
                top: 50px;
                letter-spacing: 2px;
            }
            .divider{
                background-color: #e85a0c;
                height: 1.5px;
                width: 100px;
                position: absolute;
                top: 100px;
            }
            .bio{
                position: absolute;
                top: 110px;
                color: #000000;
                line-height: 28px;
                font-size: 18px;
                text-align: center;
            }
            .button{
                position: absolute;
                bottom: 30px;
                background-color: #f79f08;
                border: none;
                font-size: 20px;
                padding: 13px 25px;
                cursor: pointer;
                color: white;
            }
            .photo{
                height: 100%;
                width: 100%;
                background-repeat: no-repeat;
                position: absolute;
                bottom: 0;
                background-size: 100% 100%;
                border-radius: 8px;
                transition: 1s;
            }       
            .card:hover .name{
                display: inline;
            }

            .card:hover .photo{
                transform: scale(0.5, 0.35) translateY(-450px);
                border-radius: 50%;
                background-size: 100% 100%;
                background-position: 0 0;
             }     
             .card .a2{
                position: absolute;
                bottom: -70px;
                font-size: 25px;
                color: whitesmoke;
                background-color: #ff6e20;
                width: 100%;
                padding: 5px 0;
                font-size: 27px;
                font-family: 'Poppins';
                font-weight: 600;
                text-align: center;
                letter-spacing: 2px;
                text-decoration: none;
            }
        `

        const ServiceCol = styled(Col)`
            padding: 0;
            border-right: #e85a0c;
            &.no-border {
                border-right: none;
            }
            @media (max-width:500px) {
                border-right:none;
            }
              
        `

        const Service = styled.div`
           
        `
        const ServiceContent = styled.div`

        `

        return (
                <Section id="home">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        <Container>
                            <Content>
                                <Heading1>
                                    Escolha o plano de Saúde certo para você!
                                </Heading1>
                                <Heading2>
                                    Simule e compare seu plano de saúde
                                </Heading2>
                                <Separator/>
                                <Type>
                                    <Typewriter
                                        options={{
                                        strings: [
                                            'Unimed',
                                            'Amil',
                                            'Hapvida',
                                            'Humana Saúde',
                                            'Bradesco Saúde',
                                            'SulAmérica Saúde',
                                            'Delfhi Odonto',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        }}
                                    />
                                </Type>
                            </Content>
                            <ContactCreative2/>
                        </Container>
                    </Overlay>
                    <BottomContent>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Bradesco</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Planos completos para sua família ou para sua empresa! 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Bradesco} alt='Logo'/>
                                        <a className="a2" href="#">Bradesco Saúde</a>
                                    </div>  

                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Unimed</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Com hospitais e laboratórios próprios, entregamos o melhor para você! 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Unimed} alt='Logo'/>
                                        <a className="a2" href="#">Unimed</a>
                                    </div>                        
                                
                                     
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">DelfhiOdonto</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                               Nosso plano odontológico te oferece o que há de mais tecnolófico e inovador em tratamento dentário.
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Delfhi} alt='Logo'/>
                                        <a className="a2" href="#">Delfhi Odonto</a>
                                    </div>                        
                                  
                               
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Humana</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                A vida é feita de escolhas: A melhor é ter saúde. 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Humana} alt='Logo'/>
                                        <a className="a2" href="#">Humana Saúde</a>
                                    </div>                       
                       
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Hapvida</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Cuidamos da saúde de toda sua família 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Hapvida} alt='Logo'/>
                                        <a className="a2" href="#">Hapvida</a>
                                    </div>                      
                    </BottomContent>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      `}
      render={({ 
        background, 
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )