import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
    <Container>
        <Row>
        <div id="footer">

<a href='https://twitter.com/'><i class=" social-brand fa-brands fa-twitter"></i></a>
<a href='https://facebook.com/'><i class=" social-brand fa-brands fa-facebook"></i></a>
<a href='https://instagram.com/'><i class=" social-brand fa-brands fa-instagram"></i></a>
<a href='mailto:name@email.com'><i class=" social-brand fa-solid fa-envelope"></i></a>


</div>

            <Col className ='text-center py-3'>
                Copyright &copy; MovieBox
                
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer