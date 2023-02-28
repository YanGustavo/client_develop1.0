import React, {Suspense} from 'react';
import { Skeleton} from 'components/Skeleton';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
    <Suspense fallback={<Skeleton/>}>
    <h2>About Page</h2>
      <Link href="/">Dashboard</Link>
     </Suspense>     
    </>
  );
}
