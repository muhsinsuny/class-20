import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  label?: string;
  type?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${type}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
