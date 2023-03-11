import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function ContactPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>Contact Page</p>       
      </Suspense>
    </>
  );
}