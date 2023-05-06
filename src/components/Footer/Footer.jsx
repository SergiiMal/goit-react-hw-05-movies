import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright> MOVIE 2023</Copyright>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
