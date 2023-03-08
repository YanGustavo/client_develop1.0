import React from 'react'; //, {Suspense}
import Layout from 'components/layout';
import { Base } from 'templates/base';
//import Link from 'next/link';
import StepCheckout from "@/ui/base/steps-checkout";
import usePayment from "hooks/usePayment";
import SkeletonComponent from 'components/SkeletonComponent';

export default function Payment () {
  usePayment(); 
  return (
    <Layout title="Product">
    <Base>
        {/* <Suspense fallback={<Skeleton/>}> */}
        {/* <StepCheckout/> */}
        {/* </Suspense> */}
        <SkeletonComponent/>
    </Base>
    </Layout>
  );
};
