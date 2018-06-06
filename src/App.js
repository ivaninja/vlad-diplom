import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const companies = [
  {
    value: 'auto',
    label: 'Автомобильная',
  },
  {
    value: 'aero',
    label: 'Аэрокосмическая',
  }
];
const companySizes =[
  {
    value: 'moer500',
    label: 'Больше 500',
  },
  {
    value: 'less500',
    label: 'Меньше 500',
  }
]
const errorTypes = [{
  value: 'canelyar_error',
  label: 'канцелярская ошибка',
},
{
  value: 'lp_error',
  label: 'использование языка программирования',
},
{
  value: 'inc_error',
  label: 'неправильные или неверные требования',
},
{
  value: 'inc_project_error',
  label: 'ошибка проектирования',
}
];
const countingObj = {
  auto:{more500:1446.1, less500:277.8},
  aero:{more500:2141.4, less500:128.9},
  canelyar_error: { 
    data:[{label:"SEL 1",value:"SEL_1"},{label:"SEL 2",value:"SEL_2"},{label:"SEL 3",value:"SEL_3"}],
    SEL_1:19,
    SEL_2:7,
    SEL_3:6
  },
  lp_error: { 
    data:[{label:"SEL 1",value:"SEL_1"},{label:"SEL 2",value:"SEL_2"},{label:"SEL 3",value:"SEL_3"}],
    SEL_1:0,
    SEL_2:5,
    SEL_3:3
  },
  inc_error: { 
    data:[{label:"SEL 2",value:"SEL_2"},{label:"SEL 3",value:"SEL_3"}],
    SEL_2:0,
    SEL_3:1
  },
  inc_project_error: { 
    data:[{label:"SEL 2",value:"SEL_2"},{label:"SEL 3",value:"SEL_3"}],
    SEL_2:6,
    SEL_3:1
  }


}
class App extends Component {
  state ={company:"auto", companySize:"less500",countedInfo:"",errorType:"lp_error", classification:"SEL_1"}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Automated system for estimating error correction in software development</h1>
        </header>
        <main>
          <div>
        <TextField
          id="select-currency-native"
          select
          label="Тип компании"
          // className={classes.textField}
          value={this.state.company}
          onChange={this.handleChange('company')}
          SelectProps={{
            native: true,
            MenuProps: {
              // className: classes.menu,
            },
          }}
          helperText="Please select company type"
          margin="normal"
        >
          {companies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        
        <div>
        <TextField
          id="select-currency-native"
          select
          label="колл-во сотрудников"
          // className={classes.textField}
          value={this.state.companySize}
          onChange={this.handleChange('companySize')}
          SelectProps={{
            native: true,
            MenuProps: {
              // className: classes.menu,
            },
          }}
          helperText="Please select сompany size"
          margin="normal"
        >
          {companySizes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
        </TextField>  
        </div>
  
        <div>
        <TextField
          id="select-currency-native"
          select
          label="Тип ошибки"
          // className={classes.textField}
          value={this.state.errorType}
          onChange={this.handleChange('errorType')}
          SelectProps={{
            native: true,
            MenuProps: {
              // className: classes.menu,
            },
          }}
          helperText="Please select error type"
          margin="normal"
        >
          {errorTypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
        </TextField>  
        </div>
        <div>
        <TextField
          id="select-currency-native"
          select
          label="классификация"
          // className={classes.textField}
          value={this.state.classification}
          onChange={this.handleChange('classification')}
          SelectProps={{
            native: true,
            MenuProps: {
              // className: classes.menu,
            },
          }}
          helperText="Please select classification"
          margin="normal"
        >
          {countingObj[this.state.errorType].data.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
        </TextField>  
        </div>
        </main>
        <Button variant="raised" onClick={()=>{
          console.log(countingObj[this.state.errorType])
          this.setState({
            countedInfo: (countingObj[this.state.company][this.state.companySize] *
              (countingObj[this.state.errorType][this.state.classification]) ) / 100
          })
        }} color="primary">
      Расчет
    </Button>
    <p>{"С = (xi * e)/100 =("+countingObj[this.state.company][this.state.companySize] +"*"+ (countingObj[this.state.errorType][this.state.classification])
     +") / 100= "+ Number(this.state.countedInfo).toFixed(2)+"$"}</p>
      </div>
    );
  }
}

export default App;
