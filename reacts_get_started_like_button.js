'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}



$(document).ready(function() {
    const domContainer = document.querySelector('#reacts_get_started_like_button_container');
    const root = ReactDOM.createRoot(domContainer);

    root.render(e(LikeButton));
});
