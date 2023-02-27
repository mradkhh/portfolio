import Image from 'next/image';
import styles from './styles/page.module.css';
import Header from '@widgets/header/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
