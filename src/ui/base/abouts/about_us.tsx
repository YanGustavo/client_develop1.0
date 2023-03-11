import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function AboutUsPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>About Us Page</p>       
      </Suspense>
    </>
  );
}