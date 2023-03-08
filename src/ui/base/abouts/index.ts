import React from 'react';
import { PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ,  ABOUT_US, NOT_FOUND, LOADING, ERROR } from "constants/about-constants";
export default function Abouts (keyword) {
  console.log("key in abouts:" +keyword);
  // Pages  
  type AboutsProps = {
    type: string;
    title: string;
    body: string;
   }
  const privacy_policy = {
    type: PRIVACY_POLICY,
    title: "Sobre Nós",
    body: '<a>oi</a>',
  };
  const exchangeAndRefundPolicy = {
    type: EXCHANGE_AND_REFUND_POLICY,
    title: "Política de Trocas e Reembolso",
    body: '<a>oi</a>',
  };
  const shippingPolicy = {
    type: SHIPPING_POLICY,
    title: 'Política de Envio',
    body: '<a>oi</a>',
  };
  const serviceTerms = {
    type: SERVICE_TERMS,
    title: 'Termos de Serviço',
    body: '<a>oi</a>',
  };
  const contact = {
    type: CONTACT,
    title: 'Contato',
    body: '<a>oi</a>',
  };
  const faq = {
    type: FAQ,
    title: 'FAQ - Perguntas Frequentes',
    body: "",
  };
  const aboutUs = {
    type: ABOUT_US,
    title: 'Sobre Nós',
    body: "<p>Nós somos Eai CHefiinho!</p>",
  };
  const notFound = {
    type: NOT_FOUND,
    title: '404 - Pagina Não Encontrada',
    body: '<p> Ops, Tivemos um problema</p><p>Tente recarregar a pagina ou vá a home, só clicar na nossa logo</p>',
  };
  const loading = {
    type: LOADING,
    title: 'Aguarde...',
    body: '',
  }; 
  const error = {
    type: ERROR,
    title: 'Ops, Tivemos um problema',
    body: 'Tente Recarregar a pagina',
  }; 
   
      switch (keyword) {
        case PRIVACY_POLICY:
          return privacy_policy;
          case EXCHANGE_AND_REFUND_POLICY:
          return  exchangeAndRefundPolicy;
          case SHIPPING_POLICY:
          return shippingPolicy;
          case SERVICE_TERMS:
          return  serviceTerms;
          case CONTACT:
          return contact;
          case FAQ:
          return  faq;
        case ABOUT_US:
          return aboutUs;
          case LOADING:
          return loading;
        default:
          return notFound;
        }
      
  }