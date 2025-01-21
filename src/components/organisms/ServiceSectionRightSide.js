import { ServiceSectionBlock } from "../molecules/export";
import { once, sweep, restart } from '../../images/export'

function ServiceSectionRightSide() {
  return (
    <div className='right-side'>
      <h4>
        სერვისები
      </h4>
      <div className="box">
        <ServiceSectionBlock icon={once} title='რეგულარული' text='რეგულარული დალაგება მოიაზრებს მონოტონურად, წინასწარ შეთანხმებული სიხშირით გენერალურ და დამატებითი დასუფთავების სახეებს.' />
        <ServiceSectionBlock icon={sweep} title='რემონტის შემდგომი' text='რემონტის შემდგომი დალაგება მოიაზრებს ახლად ჩაბარებული ან გამერომნტებული ობიექტის სრულ და დეტალურ დალაგებას, რათა აღმოფხვრას სამშენებლო დაბინძურება,' />
        <ServiceSectionBlock icon={restart} title='ერთჯერადი' text='ერთჯერადი დალაგებისტიპი მოიაზრებს წინასწარშეთანხმებულ ერთჯერადსამუშაოს ,რომელზეცთანხმდებიან კომპანია დადამკვეთი პირირემონტის' />
      </div>
    </div>
  );
}

export default ServiceSectionRightSide;
