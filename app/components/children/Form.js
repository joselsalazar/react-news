// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    this.setState({ term: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term, this.state.startDate, this.state.endDate);
    this.setState({ term: "" });
    console.log(this.state.startDate);
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <label>
                Topic
              </label>
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />

              <label>
                Start Date (YYYYMMDD)
              </label>
              <input
                value={this.state.startDate}
                type="text"
                className="form-control text-center"
                id="startDate"
                pattern="[0-9]{4}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])"
                required
              />

              <label>
                End Date (YYYYMMDD)
              </label>
              <input
                value={this.state.endDate}
                type="text"
                className="form-control text-center"
                id="endDate"
                pattern="[0-9]{4}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])"
                required
              />
             
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
