import { Routes } from 'components/Routes';
import { useSnapshot } from 'valtio';
import { switcher } from 'store/store';
import Sidebar from 'components/sidebar/Sidebar';
import BurgerButton from 'components/button/BurgerButton';
import SubmitButton from 'components/submitbutton/SubmitButton';
import NextHead from 'components/NextHead';
import s from './homepage.module.scss';

export default function Home() {
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;
  return (
    <main className={s.main}>
      <NextHead title="PKI-SYSTEM..." />
      <header className={s.homepage__header}>
        <BurgerButton reverse={reverse} st={st} />
      </header>
      <Sidebar options={Routes} />
      <h1 className={s.main__title}>PKI-SYSTEM</h1>
      <SubmitButton buttonstate={false}/>
    </main>
  );
}
