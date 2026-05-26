'use client';

import dynamic from 'next/dynamic';

const Inner = dynamic(() => import('./InnerPanoramaScene'), {
  ssr: false,
  loading: () => null,
});

export default function PanoramaScene(props: any) {
  if (typeof window === 'undefined') return null;
  return <Inner {...props} />;
}