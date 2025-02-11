import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center text-xs sm:text-base" variant="body3">
          Designed and built with passion—
          <Copyright className="mr-1 inline-block h-4 w-4" />
          Harsh Kumar Verma,&nbsp;
          {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
