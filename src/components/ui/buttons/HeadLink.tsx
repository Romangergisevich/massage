import { Link } from 'react-router-dom';

interface LinkProps {
  children: string;
  to: string;
}

const HeadLink: React.FC<LinkProps> = (props) => {
  return (
    <>
      <span className="menu__link">
        <Link to={props.to}>{props.children}</Link>
      </span>
    </>
  );
};

export default HeadLink;
