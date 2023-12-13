import React from "react";
import { Helmet } from "react-helmet";

const Title = () => {
  return (
    <div>
      <Helmet>
        <title>Spherendly</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Helmet>
    </div>
  );
};

export default Title;
