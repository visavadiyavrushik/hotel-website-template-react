import { Button } from 'reactstrap';
import PropType from 'prop-types';
import './CommonButton.scss';
import clsx from 'clsx';

const CommonButton = ({ children, className, ...props }) => {
  return (
    <Button className={clsx('primary-btn', className)} {...props}>
      {children}
    </Button>
  );
};

CommonButton.propTypes = {
  className: PropType.string,
  children: PropType.string.isRequired
};

export default CommonButton;
