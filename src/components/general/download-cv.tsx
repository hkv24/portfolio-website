'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://hkv24.github.io/portfolio-website/files/harsh-resume.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
