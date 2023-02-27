import {FC, memo} from 'react';
import Link from 'next/link';
import {LogoSVG} from '@/shared/assets/svg';

interface props {
  link: string;
}

const Logo: FC<props> = ({link}) => {
  return (
    <Link href={link}>
      <LogoSVG />
    </Link>
  );
};

export default memo(Logo);
