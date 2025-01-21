import { locationBlue, phoneBlue } from '../../images/export';

function MainSectionLeftSide() {
  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/67+%E1%83%9B%E1%83%98%E1%83%A0%E1%83%98%E1%83%90%E1%83%9C+%E1%83%9B%E1%83%94%E1%83%A4%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98+0131/@41.7875544,44.742081,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40446e05fa3c3c0d:0x65d306d7dc427b4c!8m2!3d41.7875504!4d44.7446559!16s%2Fg%2F11t3f1jpg_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className='left-side'>
      <p className='title'>
        ბინის <br/>
        სისუფთავე იწყება <span className='primaryColor'>სადარბაზოდან</span>
      </p>
      <p className='title respo'>
        ბინის
        სისუფთავე იწყება <span className='primaryColor'>სადარბაზოდან</span>
      </p>
      <p className='text'>
        კომპანია ემსახურება საცხოვრებელი კორპუსებს და უზრუნველყოფს როგორც შიდა ასევე კორპუსისგარე პერიმეტრის დსუფთავბას.
      </p>
      <div className='contact-section'>
        <a>
          <img src={phoneBlue} />
          <p>558655253</p>
        </a>
        <a onClick={handleLocationClick}>
          <img src={locationBlue} />
          <p>მირიან მეფის 67</p>
        </a>
      </div>
    </div>
  );
}

export default MainSectionLeftSide;
