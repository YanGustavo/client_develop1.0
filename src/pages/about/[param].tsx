import React, {Suspense} from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
import useAbout from "hooks/useAbout";
import { useThemeProps } from '@mui/material';
//import NotFound from "ui/all/not-found";

export default function About(param) {
  console.log(param);
  const  child  = useAbout();  
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
