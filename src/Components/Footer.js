import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Werrasoft ${year}`}</footer>;
};

export default Footer;
