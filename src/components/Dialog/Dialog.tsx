import React from 'react';
import Button from '../Button/Button';
import style from './Dialog.module.scss';

type DialogProps = {
  imgSrc?: string;
  variant?: 'success' | 'info' | 'danger';
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const Dialog: React.FC<DialogProps> = ({
  variant = 'success',
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const imgSrc = {
    success: './src/assets/logo-success.svg',
    info: './src/assets/logo-info.svg',
    danger: './src/assets/logo-danger.svg',
  }[variant];

  const title = {
    success: 'Successfully loaded',
    info: 'New information',
    danger: 'Are you sure you want to delete this user?',
  }[variant];

  const description = {
    success: 'lorem ipsum dolor sit amet',
    info: 'lorem ipsum dolor sit amet',
    danger: 'This action is irreversible',
  }[variant];

  const buttons = {
    success: [{ label: 'OK', type: 'secondary', action: onClose }],
    info: [
      { label: 'Cancel', type: 'secondary', action: onClose },
      { label: 'Create', type: 'primary', action: onConfirm },
    ],
    danger: [
      { label: 'Cancel', type: 'secondary', action: onClose },
      { label: 'Delete', type: 'danger', action: onConfirm },
    ],
  }[variant];

  return (
    <>
      <div className={style.dialogBox}>
        <div className={style.container}>
          <img className={style.logo} src={imgSrc} alt='logo' />
          <div className={style.content}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.buttons}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                label={button.label}
                type={button.type as 'primary' | 'secondary' | 'danger'}
                onClick={button.action}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
