import React from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
import useAbout from "hooks/useAbout";
import { useRouter } from 'next/router';

export default function About() {  
  const router = useRouter();
  const  child  = useAbout(router.query);  
  return (
    <Layout title="About">
      <Base>
      <section className="container container--flush">
        {child}       
      </section>
      </Base>  
    </Layout>
  );
}
