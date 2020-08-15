import React, {Component} from 'react';





const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

  class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: null,
          breed: null,
          birthday: null,
          gender: null,
          spayedOrNeutered: null,
          weight: null,
          formErrors: {
            name: "",
            breed: "",
            birthday: "",
            gender: "",
            spayedOrNeutered: "",
            weight: "",
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            Name: ${this.state.name}
            Breed: ${this.state.breed}
            Birthday: ${this.state.birthday}
            Gender: ${this.state.gender}
            Spayed or Neutered: ${this.state.spayedOrNeutered}
            Weight: ${this.state.weight}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "name":
            formErrors.name =
              value.length < 3 ? "minimum of 3 characters is required" : "";
            break;
          case "breed":
            formErrors.breed =
              value.length < 3 ? "minimum of 3 characters is required" : "";
            break;
          case "birthday":
            formErrors.birthday =
            value.length < 3 ? "minimum of 3 characters is required" : "";
            break;
          case "gender":
            formErrors.gender =
              value.length < 6 ? "minimum of 6 characters is required" : "";
            break;
          case "spayed or neutered":
              formErrors.spayedOrNeutered =
              value.length < 3 ? "minimum of 3 characters is required" : "";
          case "weight":
              formErrors.weight =
              value.length < 3 ? "minimum of 3 characters is required" : "";    
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };

    
      render() {
        const { formErrors } = this.state;
    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>Yay, we love dogs! Give us the basics about your pup. </h1>
              <form onSubmit={this.handleSubmit} >
                <div className="name">
                  <label htmlFor="name">Pet's name</label>
                  <input
                    className={formErrors.name.length > 0 ? "error" : null}
                    placeholder="Pet's Name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
                  {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                </div>

                <div className="upload">
                    <input type="file" onChange={this.fileSelectedHandler}/>
                    <button onClick={this.fileUploadHandler}>Upload Image</button>
                </div>

                <div className="breed">
                  <label htmlFor="breed">Pet's Breed</label>
                  <input
                    className={formErrors.breed.length > 0 ? "error" : null}
                    placeholder="Pet's Breed"
                    type="text"
                    name="breed"
                    onChange={this.handleChange}
                  />
                  {formErrors.breed.length > 0 && (
                    <span className="errorMessage">{formErrors.breed}</span>
                  )}
                </div>

                <div className="birthday">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    className={formErrors.birthday.length > 0 ? "error" : null}
                    placeholder="Birthday"
                    type="birthday"
                    name="birthday"
                    onChange={this.handleChange}
                  />
                  {formErrors.birthday.length > 0 && (
                    <span className="errorMessage">{formErrors.birthday}</span>
                  )}
                </div>

                <div className="gender">
                  <label htmlFor="gender">Gender</label>
                  <input
                    className={formErrors.gender.length > 0 ? "error" : null}
                    placeholder="Gender"
                    type="gender"
                    name="gender"
                    onChange={this.handleChange}
                  />
                  {formErrors.gender.length > 0 && (
                    <span className="errorMessage">{formErrors.gender}</span>
                  )}
                </div>

                <div className="spayedorneutered">
                  <label htmlFor="spayedorneutered">Spayed or Neutered?</label>
                  <input
                    className={formErrors.spayedOrNeutered.length > 0 ? "error" : null}
                    placeholder="Please Enter 'Yes' or 'No'."
                    type="spayedorneutered"
                    name="spayedorneuetered"
                    onChange={this.handleChange}
                  />

                  {formErrors.spayedOrNeutered.length > 0 && (
                    <span className="errorMessage">{formErrors.spayedOrNeutered}</span>
                  )}

                </div>

                <div className="weight">
                    <label htmlFor="weight">Weight</label>
                    <input
                    className={formErrors.weight.length > 0 ? "error" : null}
                    placeholder="Weight"
                    type="weight"
                    name="weight"
                    onChange={this.handChange}
                    />

                    {formErrors.weight.length > 0 && (
                        <span className="errorMessage">{formErrors.weight}</span>
                    )}

                </div>
                <div className ="back">
                    <button type="Back">Back</button>
                </div>

                <div className="next">
                  <button type="Next">Next</button>
                
                </div>
              </form>
            </div>
          </div>
        );
      }
    }
    
    export default Form;
