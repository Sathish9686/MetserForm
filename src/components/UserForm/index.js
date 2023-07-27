import React, { useState } from 'react';

import Header from "../Header";
import "./index.css";


const UserForm = ()=> {
  
  const instrumentOptions = [
    'SSPRT Sensor with Indicator',
    'R-Type Thermocouple with Indicator',
    'S-Type Thermocouple',
    '4 Wire RTD with Indicator',
    'Multi-stem Thermometer',
  ];

  const instrumentSrNoOptions = {
    'SSPRT Sensor with Indicator': ['DEMO 1', 'DEMO 2', 'DEMO 3'],
    'R-Type Thermocouple with Indicator': ['DEMO 4', 'DEMO 5', 'DEMO 6'],
    'S-Type Thermocouple': ['DEMO 7', 'DEMO 8', 'DEMO 9'],
    '4 Wire RTD with Indicator': ['DEMO 10', 'DEMO 11', 'DEMO 12'],
    'Multi-stem Thermometer': ['DEMO 13', 'DEMO 14', 'DEMO 15'],
  };

  const certificateNoOptions = {
    'SSPRT Sensor with Indicator': ['DEMO-EQUIPMENT NAME 1', 'DEMO-EQUIPMENT NAME 2'],
    'R-Type Thermocouple with Indicator': ['DEMO-EQUIPMENT NAME 3', 'DEMO-EQUIPMENT NAME 4'],
    'S-Type Thermocouple': ['DEMO-EQUIPMENT NAME 5', 'DEMO-EQUIPMENT NAME 6'],
    '4 Wire RTD with Indicator': ['DEMO-EQUIPMENT NAME 7', 'DEMO-EQUIPMENT NAME 8'],
    'Multi-stem Thermometer': ['DEMO-EQUIPMENT NAME 9', 'DEMO-EQUIPMENT NAME 10'],
  };

  const initialRow = {
    instrumentName: 'SSPRT Sensor with Indicator',
    instrumentSrNo: instrumentSrNoOptions['SSPRT Sensor with Indicator'][0],
    certificateNo: certificateNoOptions['SSPRT Sensor with Indicator'][0],
    calibrationDueOn: '',
  };

  const [rows, setRows] = useState([initialRow]);

  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, initialRow ]);
  };

  const handleChange = (index, key, value) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index][key] = value;
      if (key === 'instrumentName') {
        updatedRows[index]['instrumentSrNo'] = instrumentSrNoOptions[value][0];
        updatedRows[index]['certificateNo'] = certificateNoOptions[value][0];
      }
      return updatedRows;
    });
  };

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
                  <input />
                  </td>
                </tr>
                <tr>
                  <th>Equipment Condition</th>
                  <td>
                  <input/>
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
        <th className="mobile-hides">Instrument Name</th>
        <th className="mobile-hides">Instrument Sr.No / Id No.</th>
        <th className="mobile-hides">Certificate No.</th>
        <th className="mobile-hides">Calibration Due On</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => ( 
        <React.Fragment key={index}> 
          <tr key={index}>
            <th className="desktophide">Instrument Name</th>
            <td>
              <select
                className="input-width unit"
                value={row.instrumentName}
                onChange={(e) => handleChange(index, 'instrumentName', e.target.value)}
              >
                {instrumentOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </td>
            <th className="desktophide">Instrument Sr.No / Id No.</th>
            <td>
              <select
                value={row.instrumentSrNo}
                onChange={(e) => handleChange(index, 'instrumentSrNo', e.target.value)}
              >
                {instrumentSrNoOptions[row.instrumentName].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </td>
            <th className="desktophide">Certificate No.</th>
            <td>
              <select
                className="input-width unit"
                value={row.certificateNo}
                onChange={(e) => handleChange(index, 'certificateNo', e.target.value)}
              >
                {certificateNoOptions[row.instrumentName].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </td>
            <th className="desktophide">Calibration Due On</th>
            <td>
              <input
                type="date"
                className="dateInput"
                value={row.calibrationDueOn}
                onChange={(e) => handleChange(index, 'calibrationDueOn', e.target.value)}
              />
            </td>
            <th>
                <button onClick={handleAddRow}>Add</button>
            </th>
          </tr>
          {/*<tr className="mobile-hides">
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input type="date" className="dateInput" />
            </td>
                </tr>*/}
        </React.Fragment>
      ))}
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
                <input  value={`${""}°C`}  readOnly  style={{ textAlign: "center" }}/>
              </td>
              <td>
                <input  value={`${""}%RH`} readOnly  style={{ textAlign: "center" }} />
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


export default UserForm;



