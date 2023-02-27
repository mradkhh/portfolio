import React, {memo} from 'react';
import styles from './styles/header.module.scss';
import {Container, Logo} from '@/shared';

const Header = () => {
  return (
    <header id={'header'}>
      <Container>
        <div className={styles.header}>
          <Logo link={'/'} />
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
