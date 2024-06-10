import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../custom_hooks/hooks';
import { closeNav } from '../../../store/slices/MobileNav';

interface LinkProps {
  children: string;
  to: string;
}

const HeadLink: React.FC<LinkProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="menu__link">
        <Link onClick={() => dispatch(closeNav())} to={props.to}>
          {props.children}
        </Link>
      </span>
    </>
  );
};

export default HeadLink;
