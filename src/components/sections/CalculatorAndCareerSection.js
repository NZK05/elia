import { calculator, handShake } from '../../images/export';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { phoneBlue, gmailBlue } from '../../images/export';

function CalculatorAndCareerSection() {
  const navigate = useNavigate();
  const [isCalculatorOpened, setCalculatorOpened] = useState(false);
  const [values, setValues] = useState({ floorsNum: '', entracesNum: '', apartmentsNum: '', frequency: '' });
  const [result, setResult] = useState(null);

  const openCalculator = () => {
    setValues({ floorsNum: '', entracesNum: '', apartmentsNum: '', frequency: '' });
    setResult(null);
    setCalculatorOpened(!isCalculatorOpened);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const calculate = () => {
    setValues({ floorsNum: '', entracesNum: '', apartmentsNum: '', frequency: '' });
    setResult(null);
    const { floorsNum, apartmentsNum, entracesNum, frequency } = values;
    if (floorsNum && apartmentsNum && entracesNum && frequency) {
      const price = 700;
      setResult(price);
    } else {
      setResult("გთხოვთ შეავსოთ ყველა ველი");
    }
    // დათვლის ლოგიკა დასაწერი
  };

  return (
    <div className='calculatorAndCareerSection' id='calculatorAndCareerSection'>
      <div className={`container ${isCalculatorOpened ? 'CalculatorOpened' : ''}`}>
        <div className="circle lighter"></div>
        <div className="circle darker"></div>
        <div className="box calculator">
          {!isCalculatorOpened ? (
            <div className='minibox'>
              <p className="text">გაიგე თუ რა ჯდება ჩვენი სერვისი თქვენთვის</p>
              <a onClick={openCalculator}>
                <p className="button lighter">გაიგე ახლავე</p>
              </a>
              <img src={calculator} alt="calc" />
            </div>
          ) : (
            <div className='calculatorBox'>
              <div className='calculatorContainer'>
                <h3>გაიგე თუ რა ჯდება ჩვენი სერვისი თქვენთვის</h3>
                {result==="გთხოვთ შეავსოთ ყველა ველი" || result===null ? (
                  <div className='mainBox'>
                    <div className='questions'>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className='singleQuestion'>
                          <label>რამდენი სართულიანია თქვენი კორპუსი?</label>
                          <input
                            type="number"
                            name="floorsNum"
                            placeholder="სართული"
                            value={values.floorsNum}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='singleQuestion'>
                          <label>რამდენი სადარბაზოა თქვენს კორპუსში</label>
                          <input
                            type="number"
                            name="entracesNum"
                            placeholder="სადარბაზო"
                            value={values.entraces}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='singleQuestion'>
                          <label>რამდენი ბინაა სადარბაზოს ერთ სართულზე?</label>
                          <input
                            type="number"
                            name="apartmentsNum"
                            placeholder="რაოდენობა"
                            value={values.apartmentsNum}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='singleQuestion'>
                          <label>რა სიხშირით გსურთ დასუფთავება</label>
                          <select name="frequency" value={values.frequency} onChange={handleChange}>
                            <option value="">აირჩიეთ სიხშირე</option>
                            <option value="once in a week">კვირაში ერთხელ</option>
                            <option value="once in a two weeks">ორ კვირაში ერთხელ</option>
                          </select>
                        </div>
                      </form>
                      {result==="გთხოვთ შეავსოთ ყველა ველი" && <p className='error'>{result}</p>}
                    </div>
                  </div>
                ) : (
                  <div className='result'>
                    <p className='resultPrice'>თქვენი კორპუსის დასუფთავების თვიური ღირებულება იქნება: <span className='price'>{`${result} ლარი`}</span></p>
                    <div>
                      <p>დამატებითი ინფორმაციისთვის დაგვიკავშირდით:</p>
                      <div className='contact'>
                        <div className='singleContact'>
                          <img src={phoneBlue} alt="logo" />
                          <p>558655253</p>
                        </div>
                        <div className='singleContact'>
                          <img src={gmailBlue} alt="logo" />
                          <p>elia@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className='buttonsBox'>
                  <a type="button" className='button' onClick={() => openCalculator()}>
                    <p>გამოსვლა</p>
                  </a>
                  <a type="button" className='button filled' onClick={calculate}>
                    {result==="გთხოვთ შეავსოთ ყველა ველი" || result===null ? (<p>დათვლა</p>) : (<p>დაბრუნება</p>)}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="box career">
          <div className='minibox'>
            <p className='text'>გახდი ჩვენი გუნდის წევრი</p>
            <a onClick={() => navigate('/Career')}>
              <p className='button darker'>დასაქმდი</p>
            </a>
            <img src={handShake} alt='hands' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorAndCareerSection;
