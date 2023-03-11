import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function OrderPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p> Order Page</p>       
      </Suspense>
    </>
  );
}