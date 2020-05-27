import React from 'react';
import ToastProvider from 'contexts/ToastContext/ToastProvider';
import { Footer } from 'components';
import css from './SellerLayout.scss';

type Props = {
  children: React.ReactNode;
};

const SellerLayout: React.FC<Props> = ({ children }) => {
  return (
    <ToastProvider>
      <>
        <div className={css['layout-content']}>{children}</div>
        <Footer />
      </>
    </ToastProvider>
  );
};

export default SellerLayout;
