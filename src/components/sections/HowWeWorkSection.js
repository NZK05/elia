import { halfBuilding, listNum1, listNum2, listNum3, listNum4 } from '../../images/export';
import { HowWeWorkSectionGroupInfo } from '../organisms/export';
import { HowWeWorkSectionBlock } from '../molecules/export';

function HowWeWorkSection() {
  return (
    <div className='howWeWorkSection'>
      <div className='bigBox'>
        <HowWeWorkSectionGroupInfo/>
        <div className='mainInfo'>
          <HowWeWorkSectionBlock icon={listNum1} text={"პირველ ეტაპს წარმოადგენს მშრალი წესით დასუფთავება რის შედეგადაც ხდება მტვრის და ზედაპირული ჭუჭყის აღება ნებისმიერი ზედაპირიდან ( იატაკი, მოაჯარი, ფანჯრები, ლიფტის კარები და სხვა...)"} />
          <HowWeWorkSectionBlock icon={listNum2} text={"მეორე ეტაპი სველი წესით დამუშვება ანუ მორეცხვითი სამუშაო, რაც მოიაზრებს ჩამჯდარი ჭუჭყის ამოღებას რათა სისუფთავსი უმაღლეს ეტაპს მიაღწიოს ნებისმიერმა საგანმა."} />
          <HowWeWorkSectionBlock icon={listNum3} text={"კოსმეტიკური დალაგება, რომელიც მოიაზრებს სპეციალური ხსნარით დასუფთავებას, იგი უზრუნველყოფს ჩამჯდარი ლაქების ქიმიურ დაშლას , ასევე მეტი ბზინვარების და სილამაზის მიღებას ნებისმიერი ზედპირიდან."} />
          <HowWeWorkSectionBlock icon={listNum4} text={"დამატებითი სამუშაოები, რომელიც მოიცავს  კედლებიდან ახალი ჭუჭყის ამოყვანას, ჭერის  გასუფთავებას, მოსახლეობის ხალიჩებების დაფერთხვას,  ფანჯრების დამუშავებას, ძველი  განცხადებების მოხსნას და სხვა...."} />
        </div>
        <img src={halfBuilding} alt="building img" />
      </div>
    </div>
  );
}

export default HowWeWorkSection;
