import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function ExchangeAndRefundPolicyPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>Exchange and Refund Policy Page</p>       
      </Suspense>
    </>
  );
}