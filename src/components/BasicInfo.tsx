import React from "react";

class BasicInfoForm extends React.Component {
  //setUserProfile(prev => ({...prev, name: "hello"});)
  //const { setUserProfile } = this.state;

  handleSubmit = (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ FIRST_NAME: event.target.FIRST_NAME.value,
                             LAST_NAME: event.target.LAST_NAME.value,
                             EMAIL_ADDRESS: event.target.EMAIL_ADDRESS.value,
                             PRONOUNS: event.target.PRONOUNS.value,
                             INDUSTRY: event.target.INDUSTRY.value,
                             INTERESTS: event.target.INTERESTS.value,
                             ABOUT_ME: event.target.ABOUT_ME.value,
                       })
  };

  fetch("http://localhost:3000/user", requestOptions).then(result=> {
       console.log(result)
    })
}

  render() {
    console.log('it be rendering')
  return (
    <form onSubmit = {this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="FIRST_NAME">*First Name: </label>
        <input
          type="text"
          className="form-control"
          id="FIRST_NAME"
          //value = {this.state.FIRST_NAME}
          placeholder="Jane"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="LAST_NAME">*Last Name: </label>
        <input
          type="text"
          className="form-control"
          id="LAST_NAME"
          placeholder="Doe"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="EMAIL_ADDRESS">*Email address: </label>
        <input
          type="email"
          className="form-control"
          id="EMAIL_ADDRESS"
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="PRONOUNS">Pronouns: </label>
        <input
          type="text"
          className="form-control"
          id="PRONOUNS"
        />
      </div>

      <div className="form-group">
        <label htmlFor="INDUSTRY">*Industry: </label>
        <input
          type="text"
          className="form-control"
          id="INDUSTRY"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="INTERESTS">Interests: </label>
        <input
          type="text"
          className="form-control"
          id="INTERESTS"
        />
      </div>

      <div className="form-group">
        <label htmlFor="ABOUT_ME">About Me: </label>
        <textarea
          className="form-control"
          id="ABOUT_ME"
          placeholder="(50 word limit)"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="PHOTO_LINK">
          Upload Profile Picture:{" "}
        </label>
        <input
          type="file"
          className="form-control-file"
          id="PHOTO_LINK"
        />
      </div>

      <div className="float-end">
      <a href="/workStyle">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </a>
        </div>
    </form>
  );
}
}
export default BasicInfoForm;
