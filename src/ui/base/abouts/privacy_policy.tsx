import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';


export default function PrivacyPolicyPage() {
  return (
    <>
      <Suspense fallback={<SkeletonComponent />}>
        <p>Privace Policy Pages</p>       
      </Suspense>
    </>
  );
}