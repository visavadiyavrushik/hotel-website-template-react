import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
// import CommonButton from '../Button/CommonButton';
import { Button } from 'reactstrap';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 f-Contact-info">
            <h5 className="f-card-title">Contact</h5>
            <p>501 Street name,Area Name,state , India</p>
            <p className="m-0">Phone : +91 88885 99995</p>
            <p>Email : youremail@gmail.com</p>
          </div>
          <div className="col-12 col-md-4 f-Contact-info">
            <h5 className="f-card-title">Connect with us</h5>
            <div className="social-icons">
              <div className="fb-icon">
                <Facebook />
              </div>
              <div>
                <Insta />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 f-Contact-form">
            <h5 className="f-card-title">Newsletter</h5>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Your email" />
              </div>
              {/* <CommonButton outline>Sign up</CommonButton> */}
              <Button outline className="sign-up">
                Sign up
              </Button>
            </form>
            <p>You can unsubscribe from these at any time – just click on the &quot;Unsubscribe&quot; link included in each newsletter.</p>
          </div>
        </div>
        <hr className="hrtag" />
        <div className="info-div row g-1">
          <div className="policy col-12 col-md-5 col-lg-3">
            <p className="me-2">Privacy policy</p>
            <p>Cookies</p>
          </div>
          <div className="col-12 col-lg-6 col-md-7 text-lg-center text-md-end">
            <p>© All Rights Reserved 2023.</p>
          </div>
          <div className="col-12 col-lg-3 col-md-12 text-lg-end">
            <p>
              Made with ❤️ by {''}
              <a href="https://www.vrushikvisavadiya.com" rel="noreferrer" className="text-decoration-none">
                vrushik visavadiya
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
