import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function ShippingPolicyPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>Shipping Policy Page</p>       
      </Suspense>
    </>
  );
}