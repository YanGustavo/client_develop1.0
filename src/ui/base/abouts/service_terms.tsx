import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function ServiceTermsPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>Service Terms Page</p>       
      </Suspense>
    </>
  );
}