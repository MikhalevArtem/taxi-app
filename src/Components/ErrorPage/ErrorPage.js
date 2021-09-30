import React from "react";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Упс! произошло что-то страшное!!! </h2>
          <h3>попробуйте перезагрузить страницу</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorPage };
