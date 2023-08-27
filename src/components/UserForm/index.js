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


  const initialFormState = {
    srfNo: "",
    equipmentNo: "",
    equipmentCondition: "",
    dateOfCalibration: "",
    recommendedCalibrationDue: "",
    calibrationPoints: "",
    make: "",
    model: "",
    srNoIdNo: "",
    locationDepartment: "",
    range: "",
    resolution: "",
    accuracy: "",
    unitUnderMeasurement: "Celsius(°C)", // Default value
    standardUsedForCalibration: [ // Initial standard used for calibration data (table rows)
      {
        instrumentName: 'SSPRT Sensor with Indicator',
        instrumentSrNo: instrumentSrNoOptions['SSPRT Sensor with Indicator'][0],
        certificateNo: certificateNoOptions['SSPRT Sensor with Indicator'][0],
        calibrationDueOn: '',
      }
    ],
    temperature : "0° C",
    humidity : "0% RH",
    sopNumber :"MTPL/CL/SOP/ET/01", //default value
    observations: [
      { Row1: [] },
      { Row2: [] },
      { Row3: [] },
      { Row4: [] },
      { Row5: [] },
    ],
    remarks: "",
    calibratedBy: "", // Default value
    checkedBy: "", // Default value
  };

  // Define the state using useState hook
  const [formState, setFormState] = useState(initialFormState);
  console.log(formState)

  const handleData = (e) => {
    const { name, value } = e.target;
      setFormState((prevState) => ({ ...prevState, [name]: value}));
  };
  
  const handleAddRow = () => {
    setFormState((prevState) => ({
      ...prevState,
      standardUsedForCalibration: [...prevState.standardUsedForCalibration, initialFormState.standardUsedForCalibration[0]],
    }));
  };

  const handleDeleteRow = (index) => {
    if (formState.standardUsedForCalibration.length > 1) {
      setFormState((prevState) => ({
        ...prevState,
        standardUsedForCalibration: prevState.standardUsedForCalibration.filter((row, rowIndex) => rowIndex !== index),
      }));
    }
  };
  

  const handleRowChange = (index, key, value) => {
    setFormState((prevState) => {
      const updatedRows = prevState.standardUsedForCalibration.map((row, rowIndex) => {
        if (rowIndex === index) {
          const updatedRow = { ...row, [key]: value };
          if (key === "instrumentName") {
            updatedRow.instrumentSrNo = instrumentSrNoOptions[value][0];
            updatedRow.certificateNo = certificateNoOptions[value][0];
          }
          return updatedRow;
        }
        return row;
      });
      return { ...prevState, standardUsedForCalibration: updatedRows };
    });
  };

  const HandletempHumidity = (e)=>{
    const {name, value} = e.target
    if(name === "temperature"){
      setFormState((prevState)=> ({...prevState, [name] : `${value}° C`}))
    }else{
      setFormState((prevState)=> ({...prevState, [name] : `${value}% RH`}))
    } 
  }
  
  const observationHandle1 = (e) => {
    const { name, value } = e.target;
  
    setFormState((prevState) => ({
      ...prevState,
      observations: {
        ...prevState.observations,
        Row1: {
          ...prevState.observations.Row1,
          [name]: value,
        },
      },
    }));
  };

const observationHandle2 = (e) => {
  const { name, value } = e.target;

  setFormState((prevState) => ({
    ...prevState,
    observations: {
      ...prevState.observations,
      Row2: {
        ...prevState.observations.Row2,
        [name]: value,
      },
    },
  }));
};

const observationHandle3 = (e)=>{
  const {name,value} = e.target.value

  setFormState((prevState)=>({
    ...prevState, 
    observations: {
      ...prevState.observations,
      Row3 : {
        ...prevState.observations.Row3, [name]:value
      }
    }
  }))
}

const observationHandle4=(e)=>{
  const {name,value}= e.target.value
  setFormState((prevState)=>({
    ...prevState,
    observations : {
      ...prevState.observations,
      Row4 : {
        ...prevState.observations.Row4, [name]:value
      }
    }
  }))
}

const observationHandle5 = (e)=>{
  const {name,value} = e.target.value;
  setFormState((prevState)=>({
    ...prevState.observations,
    observations : {
      ...prevState.observations,
      Row5 : {
        ...prevState.observations.Row5,[name]:value 
      }
    }
  }))
}
const onSubmitForm = (e)=>{
  e.preventDefault()
  console.log("Sent to DB")

  //const {formDetails} = formState;
  const apiUrl = "https://backendmetser.onrender.com/updatetempform/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formState),
  };


  fetch(apiUrl, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 

}


    return (
      <form className="main-form-container" onSubmit={onSubmitForm}>
        <div className="main-sub-container">
          <Header />
          <>
        <div className="top-section-container">
          <div className='mobile-width'>
            <table className="table-border">
              <tbody>
                <tr>
                  <th>SRF No.</th>
                  <td>
                    <input type="text" name='srfNo' onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Equipment No</th>
                  <td>
                  <input name="equipmentNo" onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Equipment Condition</th>
                  <td>
                  <input name='equipmentCondition' onChange={handleData}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mobile-width'>
            <table className="table-border2">
              <thead>
                <tr>
                  <th>Date of Calibration</th>
                  <td>
                    <input type="date" className="dateInput"name='dateOfCalibration' onChange={handleData} />
                  </td>
                </tr>
                <tr>
                  <th>Recomanded Calibration Due</th>
                  <td>
                    <input type="date"  className="dateInput" name="recommendedCalibrationDue" onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Calibration Points</th>
                  <td>
                    <input type="text"  pattern="[A-Za-z0-9]+" name='calibrationPoints' onChange={handleData}/>
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
                    <input name='make' onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>
                    <input  name='model' onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Sr No. /Id No.</th>
                  <td>
                    <input  name="srNoIdNo" onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>
                    Location/<br></br>Department
                  </th>
                  <td>
                    <input name='locationDepartment'  onChange={handleData} />
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
                    <input  name='range' onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th>Resolution</th>
                  <td>
                    <input name='resolution' onChange={handleData} />
                  </td>
                </tr>
                <tr>
                  <th>Accuracy</th>
                  <td>
                    <input name='accuracy' onChange={handleData}/>
                  </td>
                </tr>
                <tr>
                  <th className="text-left ">Unit Under Measurement</th>
                  <td>
                    <select className="input-width unit" name='unitUnderMeasurement' onChange={handleData}>
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
        <div className="third-section-container" style={{"width": "100%"}}>

  <table className="table-border5" style={{"width": "100%"}}>
    <thead>
      <tr>
        <th className="mobile-hides">Instrument Name</th>
        <th className="mobile-hides">Instrument Sr.No / Id No.</th>
        <th className="mobile-hides">Certificate No.</th>
        <th className="mobile-hides">Calibration Due On</th>
      </tr>
    </thead>
    <tbody>
      {formState.standardUsedForCalibration.map((row, index) => ( 
        <React.Fragment key={index
        } > 
          <tr key={index}>
            <th className="desktophide">Instrument Name</th>
            <td>
              <select
                className="input-width unit"
                value={row.instrumentName}
                onChange={(e) => handleRowChange(index, 'instrumentName', e.target.value)}
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
                onChange={(e) => handleRowChange(index, 'instrumentSrNo', e.target.value)}
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
                onChange={(e) => handleRowChange(index, 'certificateNo', e.target.value)}
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
                onChange={(e) => handleRowChange(index, 'calibrationDueOn', e.target.value)}
              />
            </td>
            <td>
            <button type="button" onClick={(e)=> handleDeleteRow(index)}>Delete</button>
            </td>
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
<div className='addrow'>
        <button  type="button" onClick={handleAddRow} className='addbutton' >Add</button>
        
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
            
                <input  type="number" style={{ textAlign: "center" }} onChange={HandletempHumidity} name='temperature'  />
                <span >°C</span>
              
              </td>
              <td>
      
                <input  type='number'style={{ textAlign: "center" }} onChange={HandletempHumidity} name='humidity'/>
                <span >% RH</span>
  
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
                <select name="sopNumber" onChange={handleData} style={{padding:"5px"}}>
                  <option>MTPL/CL/SOP/ET/01</option>
                  <option>MTPL/CL/SOP/ET/02</option>
                  <option>MTPL/CL/SOP/ET/03</option>
                  <option>MTPL/CL/SOP/ET/04</option>
                  <option>MTPL/CL/SOP/ET/05</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </>



      <>
      <div className="Observation-container">
        <p className="header-text">Observations:</p>
        <table className="Observation-table" style={{"width":"100%"}}>
      <thead>
          <tr>
              <th className="input-title" colSpan="1">Set°C</th>
              <th colSpan="2">  <input className="input-width" name='set°C1'  onChange={observationHandle1} /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  name='set°C2' onChange={observationHandle2} /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide" name='set°C3' onChange={observationHandle3} /></th>
              <th  colSpan="2"> <input className="input-width mobile-hide"  name="set°C4" onChange={observationHandle4}/></th>
              <th  colSpan="2"> <input className="input-width mobile-hide" name="set°C5" onChange={observationHandle5}/></th>
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
          
        <td><input className="input-width" name='srNo1'  onChange={observationHandle1}/></td>
          <td><input className="input-width" name='std1' onChange={observationHandle1} /></td>
          <td><input className="input-width" name='ucc1' onChange={observationHandle1}/></td>
          <td><input className="input-width mobile-hide" name='std2' onChange={observationHandle1}/></td>
          <td><input className="input-width mobile-hide" name='ucc2' onChange={observationHandle1}/></td>
          <td><input className="input-width mobile-hide" name='std3' onChange={observationHandle1}/></td>
          <td><input className="input-width mobile-hide"  name='ucc3' onChange={observationHandle1}/></td>
          <td><input className="input-width mobile-hide" name='std4' onChange={observationHandle1} /></td>
          <td><input className="input-width mobile-hide" name='ucc4' onChange={observationHandle1} /></td>
          <td><input className="input-width mobile-hide" name='std5' onChange={observationHandle1}  /></td>
          <td><input className="input-width mobile-hide" name='ucc5' onChange={observationHandle1} /></td>
        </tr>
        <tr>
          <td><input className="input-width" name='srNo2' onChange={observationHandle2} /></td>
          <td><input className="input-width" name='std1' onChange={observationHandle2} /></td>
          <td><input className="input-width"  name='ucc1' onChange={observationHandle2}/></td>
          <td><input className="input-width mobile-hide"  name='std2' onChange={observationHandle2} /></td>
          <td><input className="input-width mobile-hide"  name='ucc2' onChange={observationHandle2} /></td>
          <td><input className="input-width mobile-hide" name='std3' onChange={observationHandle2}  /></td>
          <td><input className="input-width mobile-hide"  name='ucc3' onChange={observationHandle2} /></td>
          <td><input className="input-width mobile-hide" name='std4' onChange={observationHandle2}  /></td>
          <td><input className="input-width mobile-hide"  name='ucc4' onChange={observationHandle2} /></td>
          <td><input className="input-width mobile-hide" name='std5' onChange={observationHandle2}  /></td>
          <td><input className="input-width mobile-hide"  name='ucc5' onChange={observationHandle2} /></td>
        </tr>
        <tr>
          <td><input className="input-width" name="srNo3" onChange={observationHandle3}/></td>
          <td><input className="input-width"  name="std1" onChange={observationHandle3}/></td>
          <td><input className="input-width" name="ucc1" onChange={observationHandle3} /></td>
          <td><input className="input-width mobile-hide" name='std2'onChange={observationHandle3} /></td>
          <td><input className="input-width mobile-hide" name="ucc2" onChange={observationHandle3}/></td>
          <td><input className="input-width mobile-hide" name="std3" onChange={observationHandle3}/></td>
          <td><input className="input-width mobile-hide" name="ucc3" onChange={observationHandle3} /></td>
          <td><input className="input-width mobile-hide" name='std4' onChange={observationHandle3} /></td>
          <td><input className="input-width mobile-hide" name='ucc4' onChange={observationHandle3}  /></td>
          <td><input className="input-width mobile-hide" name="std5" onChange={observationHandle3}/></td>
          <td><input className="input-width mobile-hide" name="std5" onChange={observationHandle3}/></td>
        </tr>
       <tr>
       <td><input className="input-width" name="srNo4" onChange={observationHandle4}/></td>
          <td><input className="input-width" name="std1" onChange={observationHandle4}/></td>
          <td><input className="input-width" name="ucc1"  onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="std2" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="ucc2" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="std3"  onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="ucc3" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="std4" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="ucc4" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="std5" onChange={observationHandle4}/></td>
          <td><input className="input-width mobile-hide" name="std5" onChange={observationHandle4}/></td>
        </tr>
        <tr>
        <td><input className="input-width"  name="srNo5" onChange={observationHandle5}/></td>
          <td><input className="input-width" name="std1" onChange={observationHandle5}/></td>
          <td><input className="input-width" name="ucc1" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="std2" onChange={observationHandle5} /></td>
          <td><input className="input-width mobile-hide" name="ucc2" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="std3" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="ucc3" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="std4" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="ucc4" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="std5" onChange={observationHandle5}/></td>
          <td><input className="input-width mobile-hide" name="ucc5" onChange={observationHandle5}/></td>
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
      <textarea type="text" className="remarks" cols={30} rows={2} name='remarks' onChange={handleData} value={formState.remarks}></textarea>
    </div>
    <div className="footer-sub">
      <div className="by-container">
        <h1 className="text-left left-align">Calibrated By:</h1>
        <input type="text" style={{textAlign: 'center'}} className="input-mb" name="calibratedBy" onChange={handleData}/> <br></br>
        <select className="text" name="calibratedBy" onChange={handleData}>
          <option>G Praveen</option>
          <option>CH Naresh</option>
          <option>K Mahesh</option>
          <option>K Ramesh</option>
          <option>M Johny</option>
        </select>
      </div>

      <div>
      <h1 className="text-left">Checked By:</h1>
      <input type="text" style={{textAlign: 'center'}}  onChange={handleData} name="checkedBy" className="input-mb"/> <br></br>
      <select className="text" onChange={handleData} name="checkedBy">
        <option>N Chanakya</option>
        <option>M Ram Ratan</option>
        <option>G Seshavalli Sai</option>
      </select>
      </div>
    </div>

    <div className="button">
      <div>
        <button type='submit'>Submit</button>
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



