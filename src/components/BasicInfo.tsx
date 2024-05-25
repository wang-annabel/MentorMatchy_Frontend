function BasicInfoForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">*First Name: </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Jane"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">*Last Name: </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Doe"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">*Email address: </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Pronouns: </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">*Industry: </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Interests: </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">About Me: </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="(50 word limit)"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </form>
  );
}
export default BasicInfoForm;
