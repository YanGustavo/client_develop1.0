import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function FAQPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>FAQ Page</p>       
      </Suspense>
    </>
  );
}