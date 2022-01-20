import React from 'react';
import Footer from '../componets/footer';
import Icon from '../componets/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="http://deboengineering.com/n/">DeboEngineering</Footer.Link>
                    <Footer.Link href="">Clients</Footer.Link>
                    <Footer.Link href="">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="">AI Projects</Footer.Link>
                    <Footer.Link href="">VR and AR</Footer.Link>
                    <Footer.Link href="">Development</Footer.Link>
                    <Footer.Link href="">Design</Footer.Link>
                    <Footer.Link href="">IOT</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href = 'mailto:boazict@gmail.com' obfuscate ={true}> Boaz Berhanu</Footer.Link>
                    <Footer.Link href = "mailto:jarmbayisa@gmail.com">Jermia Bayisa</Footer.Link>
                    <Footer.Link href = "mailto:eyosimar524@gmail.com">Debo Developer ceneter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/deboengineering/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UCSFW4-JLb7X5Y8-ThBX5NFg"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://www.twitter.com/"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <h5>DeboEngineering Developer center  ©2022</h5>
            </div>
        </Footer>
    )
}
