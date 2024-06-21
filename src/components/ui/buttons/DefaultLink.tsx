import React from 'react';
import { useAppDispatch } from '../../../custom_hooks/hooks';
import { closeNav } from '../../../store/slices/MobileNav';

interface DefaultLinkProps {
  to?: string;
  children: string;
}

const DefaultLink: React.FC<DefaultLinkProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="menu__link">
        <a onClick={() => dispatch(closeNav())} href={`#${props.to}`}>
          {props.children}
        </a>
      </span>
    </>
  );
};

export default DefaultLink;
