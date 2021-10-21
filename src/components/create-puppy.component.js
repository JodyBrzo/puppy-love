import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';


export default class CreatePuppy extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMother = this.onChangeMother.bind(this);
    this.onChangeFather = this.onChangeFather.bind(this);
    this.OnChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeDeceasedDate = this.onChangeDeceasedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      name: '',
      gender: '',
      mother: '',
      father: '',
      birthDate: '',
      deceasedDate: '',
    //   tempature: [
    //     {
    //       date: new Date(),
    //       tempature: '',
    //       note: '',
    //     }
    //   ],
    //   weight: [
    //     {
    //       date: new Date(),
    //       weight: '',
    //       note: '',
    //     }
    //   ],
    //   furDescription: [
    //     {
    //       date: new Date(),
    //       furDescription: '',
    //       note: '',
    //     }
    //   ],
    //   umbilicus: [
    //     {
    //       date: new Date(),
    //       umbilicus: '',
    //       note: '',
    //     }
    //   ],
    //   eyes: [
    //     {
    //       date: new Date(),
    //       furDescription: '',
    //       note: '',
    //     }
    //   ],
    //   ears: [
    //     {
    //       date: new Date(),
    //       ears: '',
    //       note: '',
    //     }
    //   ],
    //   nails: [
    //     {
    //       date: new Date(),
    //       nails: '',
    //       note: '',
    //     }
    //   ]
    }
  }

  componentDidMount() {
    this.setState({

    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeMother(e) {
    this.setState({
      mother: e.target.value
    });
  }

  onChangeFather(e) {
    this.setState({
      father: e.target.value
    });
  }

  onChangeBirthDate(date) {
    console.log(this);
    this.setState({
      birthDate: date
    });
  }
  onChangeDeceasedChecked(date) {
    let element = document.getElementById("deceasedDatePicker");
    let checkbox = document.getElementById("flexCheckDefault");
    
    if (checkbox.checked) {
      element.classList.add("visible");
      element.classList.remove("invisible");
    }
    else {
      element.classList.remove("visible");
      element.classList.add("invisible");
    }
    
  }
  onChangeDeceasedDate(date) {
    this.setState({
      deceasedDate: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this);

    const puppy = {
      name: this.state.name,
      gender: this.state.gender,
      mother: this.state.mother,
      father: this.state.father,
      birthDate: this.state.birthDate,
      deceasedDate: this.state.deceasedDate
    }

    console.log(puppy);

    // window.location = '/';
  }

  render() {
    return(
      <div>
        <h3>Create puppy Component</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control" 
              required
              value={this.state.gender}
              onChange={this.onChangeGender}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mother's Name</label>
            <input  type="text"
              required
              className="form-control"
              value={this.state.mother}
              onChange={this.onChangeMother}
              />
          </div>
          <div className="form-group">
            <label>Father's Name</label>
            <input  type="text"
              required
              className="form-control"
              value={this.state.father}
              onChange={this.onChangeFather}
              />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <DateTimePicker 
              value={this.state.birthDate}
              onChange={this.onChangeBirthDate}
            />
          </div>
          <div className="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value={this.state.onChangeDeceasedDate} onChange={this.onChangeDeceasedChecked} id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Deceased
              </label>
            </div>
          </div>
          <div className="form-group invisible" id="deceasedDatePicker">
            <label>Deceased Date</label>
            <DateTimePicker 
              value={this.state.deceasedDate}
              onChange={this.onChangeDeceasedDate}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}