import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    // One time call to load google api OAuth library
    window.gapi.load('client:auth2', () => {
      // Call back promise function to set our credentials
      window.gapi.client
        .init({
          clientId:
            '660520159090-u6hgbqtam799ireco5vhgm96n45bam0c.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          // get instance of authentication and set our react state for isSignedIn
          this.auth = window.gapi.auth2.getAuthInstance(); // Get gogl auth obj
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // Set state so we can access
          this.auth.isSignedIn.listen(this.onAuthChange); // Setup listener to see login/out
        });
    });
  }

  onAuthChange = () => {
    // Listen for changes in Google Login state
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // Give some feed back to UI
    switch (this.state.isSignedIn) {
      case null:
        return null;
      case true:
        return (
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign Out
          </button>
        );
      default:
        return (
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In w/ Google
          </button>
        );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
