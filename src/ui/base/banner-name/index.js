'use client';
import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "R$: ";
  return (
    <div className="bannerContent">
      <h3>Eai, {name}!</h3>
      <p>
        Consiga desconto de até <span>{`${currency}${discount}`}</span>{" "}
        na sua compra
      </p>
      <a href={more}>Saiba Mais</a>
    </div>
  );
}

export default BannerName;
