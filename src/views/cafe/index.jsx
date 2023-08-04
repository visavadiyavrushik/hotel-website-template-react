import 'react';
import CafeImg from '../../assets/img/cafe.png';
import InnerMainSection from '../../components/InnerMainSection';
import CafeDining from './CafeDining';
import CatalanStructure from './CatalanStructure';

const Cafe = () => {
  return (
    <>
      <InnerMainSection ImgSrc={CafeImg} />
      <div className="main-content">
        <CafeDining />
        <CatalanStructure />
      </div>
    </>
  );
};

export default Cafe;
