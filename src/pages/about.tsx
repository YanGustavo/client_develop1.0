import React from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
import useAbout from "hooks/useAbout";
import { useRouter } from 'next/router';
import { NOT_FOUND, LOADING, ERROR } from "constants/about-constants";
import SkeletonComponent from "components/SkeletonComponent";
import NotFound from "ui/all/not-found";
import Error from "components/Error";

export default function About() {  
  const router = useRouter();
  const  {data}  = useAbout(router.query);  
  return (
    <Layout title={data ? data.title: ''}>
      <Base>
      <section className="container container--flush">
        {data.type === LOADING && (<SkeletonComponent/>)}
        {data.type === ERROR && (<Error/>)}
        {data.type === NOT_FOUND && (<NotFound/>)}
        {!(data.type === LOADING || data.type === ERROR || data.type === NOT_FOUND) && (<p>{data.body}</p>)}      
      </section>
      </Base>  
    </Layout>
  );
}
