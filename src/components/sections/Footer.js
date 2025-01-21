import { logoWhite, instagram, facebook, phone, gmail, location } from '../../images/export';

function Footer() {
  return (
    <footer id='footer'>
      <div className="grid">
        <div className='main'>
          <div className='socialsRespoBox'>
            <img className="logo" src={logoWhite} alt="logo" />
            <img src={instagram} alt="logo" />
            <img src={facebook} alt="logo" />
          </div>
          <div className='info'>
            <p>
            კომანია ემსახურება საცხოვრებელ კორპუსებს 
            და უზრუნველყოფს როგორც შიდა ასევე 
            კორპუსის გარე პერიმეტრის დასუფთავბას.
            </p>
            <img src={logoWhite} alt="logo" />
          </div>
          <div className='contact'>
            <h5>
              კონტაქტი
            </h5>
            <div className='contactlist'>
              <div>
                <img src={phone} alt="phone" />
                <p>558655253</p>
              </div>
              <div>
                <img src={gmail} alt="gmail" />
                <p>elia@gmail.com</p>
              </div>
              <div>
                <img src={location} alt="location" />
                <p className='georgian'>მირიან მეფის 67</p>
              </div>
            </div>
            <div className='socials'>
              <img src={instagram} alt="logo" />
              <img src={facebook} alt="logo" />
            </div>
          </div>
          <div className='times list'>
            <h5>სამუშაო საათები</h5>
            <div>
              <p>
                ორშ-პარ: 9:00 - 18:00
              </p>
              <p>
                შაბ-კვი: 9:00 - 18:00
              </p>
            </div>
          </div>
          <div className='nav list'>
            <h5>კომპანია</h5>
            <div>
              <p>
                მთავარი
              </p>
              <p>
                სერვისები
              </p>
              <p>
                კალკულატორი
              </p>
              <p>
                ჩვენი ვაკანსიები
              </p>
              <p>
                წესები და პირობები
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
