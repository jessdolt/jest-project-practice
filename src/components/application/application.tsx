const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="" alt="laptop logo" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="rere" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">Great Britain</option>
            <option value="JP">Japan</option>
            <option value="GM">Germany</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Application
