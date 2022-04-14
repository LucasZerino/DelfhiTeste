import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content/index'
import Counter from '../../components/counter'
import AnimationContainer from '../../components/animation-container'

class AboutOne extends React.Component {

    shouldComponentUpdate() {
      return false
    }
    
      render() {
          const Section = styled.section`
              position: relative;
              overflow: hidden;
              background-color: #FFF;
              .particles {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
  
          `
  
          const AboutContainer = styled(Container)`
              padding: 250px 0 100px 0;
              .cardContainer{
                top: 80%;
                transform: translateY(-30%);
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 1200px;
                flex-wrap: wrap;
            }
            
            .cardContainer .card{
                position: relative;
                top: 100px;
                right: 50px;
                min-width: 320px;
                height: 440px;
                box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5),
                            inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5);
                border-radius: 15px;
                margin: 30px;
            }
            
            .cardContainer .card .box{
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: #fff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s;
            }
            
            
            .cardContainer .card:hover .box {
                transform: translateY(-50px);
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                background: linear-gradient(45deg, #fff,#e85a0c );
            }
            
            .cardContainer .card .box .content{
                padding: 20px;
                text-align: center;
            }
            
            .cardContainer .card .box .content h2{
                position: absolute;
                font-family: 'Teko';
                font-weight: 500;
                top: -10px;
                right: 30px;
                font-size: 4em;
                color: rgba(232, 89, 12, 0.021);
                transition: 0.5s;
                pointer-events: none;
            }
            .cardContainer .card:hover .box .content h2{
                color: rgba(255, 255, 255, 0.082);
            }
            
            .cardContainer .card .box .content h3{
                font-family: 'Teko';
                font-size: 2.4em;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card:hover .box .content h3{
                color: #fff;
            }
            
            .cardContainer .card .box .content p{
                font-family: 'Teko';
                font-size: 3em;
                font-weight: 300;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card .box .content a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                background: #fff;
                margin-top: 15px;
                border-radius: 20px;
                color: #e85a0c;
                text-decoration: none;
                font-weight: 400;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 2s;
            }

            .cardContainer .card:hover .box .content a{
                color: #fff;
                background: #e85a0c;
            }
            
              @media (min-width:600px) and (max-width:768px) {
                  padding: 350px 0 100px 0;
              }
              @media (min-width:769px) and (max-width:1024px) {
                padding: 300px 0 100px 0;
              }
              @media (min-width:1025px) and (max-width:1399px) {
                padding: 400px 0 100px 0;
              }
              @media (max-width:767px) {
                  padding: 50px 50px;
              }
          `
          const Heading = styled.h1`
              font-size: 40px;
              font-family: Teko;
              color: black;
              text-transform: uppercase;
              @media (min-width:768px) and (max-width:1399px) {
                  font-size: 70px;
                  line-height: 70px;
              }
              @media (max-width:767px) {
                  font-size: 30px;
                  line-height: 30px;
                  text-align: center;
              }
          `
          const Color = styled.span`
              color: #e85a0c;
              font-size: 50px;
              font-family: Teko;
              text-transform: uppercase;
              letter-spacing: 2px;
              @media (min-width:768px) and (max-width:1399px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:767px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
  
          const CounterComponent = styled.div`
              margin: 10px 0;
              @media (max-width:767px) {
                  margin: 50px 0;
                  text-align:center;
              }
              .value {
                  font-size: 120px;
                  font-family: Teko;
                  color: #fff;
                  line-height: 90px;
              }
              .text {
                  font-size: 20px;
                  color: #fff;
              }
              .symbol {
                  color: #04e5e5;
                  position: relative;
                  font-size: 39px;
                  top: -38px;
              }
  
          `
  
          const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
          `
  
          return(
       
              <Section id="quem somos">
              <div className='particles'>  </div>
                  <AboutContainer>
                      <Row>
                          <LeftCol md={6}>
                              <RevealContent>
                                  <Heading>
                                      Desde 2001 <Color>Ajudamos pessoas </Color> 
                                       que buscam mais qualidade de vida com 
                                      <Color> o preço que cabe no bolso.</Color>
                                  </Heading>
                              </RevealContent>
                          </LeftCol>
                          <Col md={6}>
                              <Row>
                              <RevealContent>
                                <div class="cardContainer">
                                    <div class="card">
                                        <div class="box">
                                            <div class="content">
                                                <h2>DELFHI</h2>
                                                <h3>PLANOS COMPLETOS A PARTIR DE</h3>
                                                <p>
                                                    R$139,90
                                                </p>
                                                <a href="">SIMULAR AGORA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </RevealContent>
                              </Row>
                          </Col>
                      </Row>
                  </AboutContainer>
              </Section>
          )
      }
  
  }

  export default AboutOne