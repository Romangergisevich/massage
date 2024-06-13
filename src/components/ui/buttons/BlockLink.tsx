import React from 'react';
import styles from './BlockLink.module.css';
import { Link } from 'react-router-dom';

interface BlockLinkProps {
  children: string;
  linkTo: string;
}

const BlockLink: React.FC<BlockLinkProps> = (props) => {
  return (
    <>
      <div className={styles.BlockLink}>
        <Link to={props.linkTo}>{props.children}</Link>
      </div>
    </>
  );
};

export default BlockLink;
