import Link from 'next/link';
import styles from './header.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Header() {
  return (
    <div className={styles.Headercontainer}>
      <Link href="/">
        <img src="/images/Logo.svg" alt="SpaceTraveling." />
      </Link>
    </div>
  );
}
