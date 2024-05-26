function WorkStyleForm() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">
          Collaboration: 1-very independent/ 10-very collaborative
        </label>
        <select className="form-control" id="exampleFormControlSelect1">
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
        <label htmlFor="exampleFormControlSelect1">
          Scope: 1-very detail-oriented/ 10-very big-picture
        </label>
        <select className="form-control" id="exampleFormControlSelect1">
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
        <label htmlFor="exampleFormControlSelect1">
          Planning: 1-very planned/ 10-very sponatenous
        </label>
        <select className="form-control" id="exampleFormControlSelect1">
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
        <label htmlFor="exampleFormControlSelect1">
          Leadership: 1-usually a leader/ 10-usually a follower
        </label>
        <select className="form-control" id="exampleFormControlSelect1">
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
    </>
  );
}

export default WorkStyleForm;
