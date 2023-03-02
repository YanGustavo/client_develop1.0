import React, {Suspense} from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
//import Link from 'next/link';
import StepCheckout from "@/ui/base/steps-checkout";
import usePayment from "hooks/usePayment";
import { Skeleton} from 'components/Skeleton';

export default function Payment () {
  usePayment(); 
  return (
    <Layout title="Login">
    <Base>
        <Suspense fallback={<Skeleton/>}>
        <StepCheckout/>
        </Suspense>
         
    </Base>
    </Layout>
  );
};
