import React, { useState } from 'react';
import styles from './Home.module.scss';
import Dialog from '../Dialog/Dialog';
import Button from '../Button/Button';
export const Home: React.FC = () => {
  const [dialogType, setDialogType] = useState<
    'success' | 'info' | 'danger' | null
  >(null);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>D I A L O G</h1>
        <section className={styles.section}>
          <h2>Assignment 20</h2>
          <h3>by MUHSIN SM WPH-38</h3>
        </section>

        <div className={styles.container}>
          <Button
            label='Show Success Dialog'
            type='secondary'
            onClick={() => setDialogType('success')}
          />
          <Button
            label='Show Info DIalog'
            type='primary'
            onClick={() => setDialogType('info')}
          />
          <Button
            label='Show Danger Dialog'
            type='danger'
            onClick={() => setDialogType('danger')}
          />
        </div>
        {dialogType && (
          <Dialog
            variant={dialogType}
            isOpen={!!dialogType}
            onClose={() => setDialogType(null)}
            onConfirm={() => {
              alert(`$(dialogType.toUpperCase()} Confimred`);
              setDialogType(null);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Home;
