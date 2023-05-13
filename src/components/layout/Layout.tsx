import * as React from 'react';
import { useRouter } from 'next/router';
import { useSnapshot } from 'valtio';
import { switcher } from 'store/store';
import { Routes } from 'components/Routes';
import Sidebar from 'components/sidebar/Sidebar';
import BurgerButton from 'components/button/BurgerButton';
import Selector from 'components/selector/Selector';
import * as s from './layout.module.scss';

interface ILayout {
  name?: string;
  children?: React.ReactNode;
}

function Layout(props: ILayout) {
  const { name, children } = props;
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;
  return (
    <div className={s.layout_container}>
      <Sidebar options={Routes} />
      <header className={s.layout_header}>
        <Selector />
        <h4 className={s.layout_title}>{name}</h4>
        <BurgerButton reverse={reverse} st={st} />
      </header>
      <main className={s.layout_main}>{children}</main>
      <footer className={s.layout_footer}>
        <h4 className={s.layout_footer__title}>
          pki-system {new Date().getFullYear()}
        </h4>
      </footer>
    </div>
  );
}

export default Layout;
