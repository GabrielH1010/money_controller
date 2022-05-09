import React from "react";
import {
  Container,
  ContentArea,
  Div,
  Title,
  Subtitle,
  LinkProfile,
  NotMobile,
  Mobile,
} from "./styles";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <Container>
        <ContentArea>
          <Div>
            <Title>Money Controller</Title>
            <Subtitle>
              Was created in the year 2022 in order to help control your money
            </Subtitle>
            <Subtitle> Copyright | developed in 2022</Subtitle>
          </Div>
          <Div>
            <Title>company info </Title>
            <Subtitle>
              Address: Rua Jorge Martins Pinto n°437, Uberlândia/MG - Brazil
            </Subtitle>
            <Subtitle>CNPJ: 91.941.196/0001-74</Subtitle>
          </Div>
          <NotMobile>
            <Title>social media</Title>
            <Subtitle>Follow our social media or contact us</Subtitle>

            <LinkProfile>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineGithub size={22} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiFillLinkedin size={22} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineMail size={22} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineWhatsApp size={22} />
              </a>
            </LinkProfile>
          </NotMobile>
          <Mobile>
            <LinkProfile>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineGithub size={35} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiFillLinkedin size={35} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineMail size={35} />
              </a>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineWhatsApp size={35} />
              </a>
            </LinkProfile>
          </Mobile>
        </ContentArea>
      </Container>
    </>
  );
}

export default Footer;
