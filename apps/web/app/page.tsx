import Image from 'next/image';
import { Code } from '@repo/ui/code';
import styles from './page.module.css';
import { Button } from '@repo/ui/button';
import { TestType, ThisIsAType } from '@repo/ui/test-types';
// import { TestType3 } from '@repo/typez';

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export default function Page(): JSX.Element {
  const lksdfj: TestType = {
    next: true,
    remix: 'sd',
    svelte: true,
  };
  const tt: ThisIsAType = true;
  console.log('🚀 ~ Page ~ tt:', tt);
  console.log('🚀 ~ Page ~ lksdfj:', lksdfj.svelte);

  const ttt: TestType3 = {
    next3: true,
    remix3: 'string',
    svolte: true,
  };

  console.log(ttt.svolte);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          examples/basic&nbsp;
          <Code className={styles.code}>web</Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{' '}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <Button
        appName="web"
        // className={styles.button}
      >
        Click me!
      </Button>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt=""
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

            <div className={styles.logo}></div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
        </div>
      </div>
    </main>
  );
}
