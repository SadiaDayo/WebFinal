// WelcomeSection.js

import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Profiles = () => {
  return (
    <Container fluid className="welcome-2 text-center text-white bg-dark">
      <Image
       height={1200} width={1200}
        src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1663573014/web3maker./Screenshot_2022-09-19_at_12.36.09_PM_bysqew.png"
        alt="Web3makr.com"
        className="welcome-image"
      />
    </Container>
  );
};

export default Profiles;
