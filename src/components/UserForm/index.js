import { Component } from "react";
import InputMask from 'react-input-mask';
import Header from "../Header";
import "./index.css";


class UserForm extends Component {
  
  render() {
    
    return (
      <form className="main-form-container">
        <div className="main-sub-container">
          <Header />
          <>
        <div className="top-section-container">
          <div>
            <table className="table-border">
              <tbody>
                <tr>
                  <th>SRF No.</th>
                  <td>
                    <input type="number" />
                  </td>
                </tr>
                <tr>
                  <th>Equipment No</th>
                  <td>
                  <InputMask mask="*******************" maskChar={""}/>
                  </td>
                </tr>
                <tr>
                  <th>Equipment Condition</th>
                  <td>
                  <InputMask mask="********************" maskChar={null} formatChars={{ '*': '[A-Za-z]' }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table className="table-border2">
              <thead>
                <tr>
                  <th>Date of Calibration</th>
                  <td>
                    <input type="date" className="dateInput"  />
                  </td>
                </tr>
                <tr>
                  <th>Recomanded Calibration Due</th>
                  <td>
                    <input type="date"  className="dateInput" />
                  </td>
                </tr>
                <tr>
                  <th>Calibration Points</th>
                  <td>
                    <input type="text"  pattern="[A-Za-z0-9]+" />
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </>





      <>
        <p className="text-left">Date Of Unit Under Calibration:</p>
        <p className="section-header"> Instrument Specification</p>
        <div className="second-section-container">
          <div>
            <table className="table-border3">
              <tbody>
                <tr>
                  <th>Make</th>
                  <td>
                    <input  />
                  </td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>
                    <input   />
                  </td>
                </tr>
                <tr>
                  <th>Sr No. /Id No.</th>
                  <td>
                    <input  />
                  </td>
                </tr>
                <tr>
                  <th>
                    Location/<br></br>Department
                  </th>
                  <td>
                    <input   />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table className="table-border4">
              <tbody>
                <tr>
                  <th>Range</th>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <th>Resolution</th>
                  <td>
                    <input  />
                  </td>
                </tr>
                <tr>
                  <th>Accuracy</th>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <th className="text-left ">Unit Under Measurement</th>
                  <td>
                    <select className="input-width unit">
                      <option>Celsius(°C)</option>
                      <option>Fahrenheit(°F)</option>
                      <option>Kelvin(K)</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>

      <>
        <p className="text-left">Standard used for Calibration:</p>
        <div className="third-section-container">
          
          <table className="table-border5">
            <thead>
              <tr>
                <th className="mobile-hides ">Instrument Name</th>
                <th className="mobile-hides ">Instrument Sr.No / Id No.</th>
                <th className="mobile-hides "> Certificate No.</th>
                <th className="mobile-hides ">Calibration Due On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="desktophide" >Instrument Name</th>
                <td>
                  <select className="input-width unit">
                    <option>SSPRT Sensor with Indicator</option>
                    <option>R-Type Thermocouple with Indicator</option>
                    <option>S-Type Thermocouple</option>
                    <option>4 Wire RTD with Indicator</option>
                    <option>Multi stem Thermometer</option>
                  </select>
                </td>
                <th className="desktophide">Instrument Sr.No / Id No.</th>
                <td>
                  <input  />
                </td>
                <th className="desktophide"> Certificate No.</th>
                <td>
                  <select className="input-width unit"> 
                    <option>DEMO-EQUIPMENT NAME 123</option>
                  </select>
                </td>
                <th className="desktophide">Calibration Due On</th>
                <td>
                  <input type="date" className="dateInput" />
                </td>
              </tr>
              <tr className="mobile-hides">
                <td>
                  <input   />
                </td>
                <td>
                  <input   />
                </td>
                <td>
                  <input   />
                </td>
                <td>
                  <input  type="date" className="dateInput"  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="forth-section-container">
        <table className="table-border6">
          <thead>
            <tr className="text-center">
              <th colSpan="2">Environment Conditions</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input  />
              </td>
              <td>
                <input   />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-border7">
          <thead>
            <tr>
              <th>SOP Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </>



      <>
      <div className="Observation-container">
        <p className="header-text">Observations:</p>
        <table className="Observation-table">
      <thead>
          <tr>
              <th className="input-title" colSpan="1">Set°C</th>
              <th colSpan="2">  <input className="input-width " /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  /></th>
          </tr>
        <tr>
          <th className="input-title">Sr.No.</th>
          <th className="input-title">STD</th>
          <th className="input-title">UCC</th>
          <th className="input-title mobile-hide" >STD</th>
          <th className="input-title mobile-hide">UCC</th>
          <th className="input-title mobile-hide">STD</th>
          <th className="input-title mobile-hide">UCC</th>
          <th className="input-title mobile-hide">STD</th>
          <th className="input-title mobile-hide">UCC</th>
          <th className="input-title mobile-hide">STD</th>
          <th className="input-title mobile-hide">UCC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
        </tr>
        <tr>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
        </tr>
        <tr>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
        </tr>
       <tr>
       <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
        </tr>
        <tr>
        <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
          <td><input className="input-width mobile-hide"  /></td>
        </tr>
      </tbody>
    </table>
        <br></br>
      </div>
      </>




      <>
  <div className="footer-container">
    <div className="remark-container">
      <h1 className="text-left">Remark's:</h1>
      <textarea type="text" className="remarks" cols={30} rows={2} ></textarea>
    </div>
    <div className="footer-sub">
      <div className="by-container">
        <h1 className="text-left left-align">Calibrated By:</h1>
        <input type="text" className="input-mb"/> <br></br>
        <select className="text">
          <option>G Praveen</option>
          <option>CH Naresh</option>
          <option>K Mahesh</option>
          <option>K Ramesh</option>
          <option>M Johny</option>
        </select>
      </div>

      <div>
      <h1 className="text-left">Checked By:</h1>
      <input type="text" className="input-mb"/> <br></br>
      <select className="text">
        <option>N Chanakya</option>
        <option>M Ram Ratan</option>
        <option>G Seshavalli Sai</option>
      </select>
      </div>
    </div>

    <div className="button">
      <div>
        <button>Submit</button>
        </div>
    </div>

    <div className="footer-sub1">
      <h1 className="text1">MTPL/CL/FF/OS/TH/TP</h1>
      <h1 className="text1">Page 1 of 1</h1>
    </div>

  </div>
  </>
        </div>
      </form>
    );
  }
}

export default UserForm;



