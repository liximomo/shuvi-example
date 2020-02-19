import Link from "@shuvi/runtime-react/link";

export default class User extends React.Component {
  static getInitialProps() {
    console.log("getInitialProps");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          User: 1
        });
      }, 1 * 1000);
    });
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("User render", this.props);

    return (
      <div>
        <h1>Page users</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
