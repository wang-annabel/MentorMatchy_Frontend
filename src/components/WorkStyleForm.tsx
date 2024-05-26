import React from "react";

class WorkStyleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ WORK_STYLE: event.target.Collaboration.value,
                             FOCUS_STYLE: event.target.Scope.value,
                             SOLVE_PROBLEM_STYLE: event.target.Planning.value,
                             LEAD_STYLE: event.target.Collaboration.value,
                             EXPERIENCE: event.target.Experience.value
                       })
  };
  
  fetch(`http://localhost:3000/user/${event.target.EMAIL_ADDRESS.value}`, requestOptions).then(result=> {
    console.log(result)
 })
}
  render() {

    return(
    <form onSubmit = {this.handleSubmit}>
           <div className="form-group">
        <label htmlFor="EMAIL_ADDRESS">*Please Re-Enter Your Email: </label>
        <input
          type="text"
          className="form-control"
          id="EMAIL_ADDRESS"
          //value = {this.state.FIRST_NAME}
          placeholder="JaneDoe@gmail.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Collaboration">
          Collaboration: 1-very independent/ 10-very collaborative
        </label>
        <select className="form-control" id="Collaboration">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="Scope">
          Scope: 1-very detail-oriented/ 10-very big-picture
        </label>
        <select className="form-control" id="Scope">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="Planning">
          Planning: 1-very planned/ 10-very sponatenous
        </label>
        <select className="form-control" id="Planning">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="Leadership">
          Leadership: 1-usually a leader/ 10-usually a follower
        </label>
        <select className="form-control" id="Leadership">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        </div>

        <div className="form-group">
        <label htmlFor="Experience">
          Experience: 1-Entry-Level/ 10-Advanced
        </label>
        <select className="form-control" id="Experience">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        </div>
        <div className="float-end">
      <a href="/profile">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </a>
        </div>
    </form>
  
  );
    }
}

export default WorkStyleForm;
