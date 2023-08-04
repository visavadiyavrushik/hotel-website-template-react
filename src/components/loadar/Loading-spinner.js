import './loading.scss';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import logo from '../../assets/svg/logo.svg';

const ComponentSpinner = () => {
  return (
    <div className="fallback-spinner app-loader">
      <div className="fallback-logo">
        <Logo />
      </div>
      {/* <div className="app-loader">
        <span className="loader">Load&nbsp;ng</span>
      </div> */}
      {/* <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div> */}
    </div>
  );
};

export default ComponentSpinner;
