import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/index';


// App component - represents the whole app
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin: '',
            admins: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();


        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    handleChange = (event) =>{
        this.setState({
            admin: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            admins: this.state.admins.concat(this.state.admin)
        });
    }

    displayModal() {
        document.getElementById("myModal").style.display = 'block';
    }

    closeModal() {
        document.getElementById("myModal").style.display = 'none';
    }

    render() {

        const { error } = this.state;
        const SignInPage = () => (
            <div>
                <h1>SignIn</h1>
                <SignInForm />
                <SignInGoogle />
                <PasswordForgetLink />
                <SignUpLink />
            </div>
        );

        const SignInForm = compose(
            withRouter,
            withFirebase,
        )(SignInFormBase);

        const SignInGoogle = compose(
            withRouter,
            withFirebase,
        )(SignInGoogleBase);

        //console.log(this.props.currentUser.services.google.email);
        return (
            <div className="container">
                <header>
                    {this.props.currentUser && this.props.currentUser.profile.name === 'Merle Päkko' || this.props.currentUser && this.props.currentUser.profile.services &&
                    this.props.currentUser.profile.services.google &&
                    this.state.admins.includes(this.props.currentUser.profile.services.google.email) ?
                        <div>
                            <button onClick={this.displayModal} id="myBtn" >Settings</button>
                            <div id="myModal" className="modal">

                                <div className="modal-content">
                                    <div className="modal-header">
                                        <span onClick={this.closeModal} className="close">&times;</span>
                                        <h2>Domains</h2>
                                    </div>
                                    <div>
                                        <form method="GET">
                                            <input type="text" className="form-control" id="tokenfield"/>
                                        </form>
                                        <br/>
                                        <div className="form-data"></div>
                                    </div>
                                    <div>
                                        <h2>Admins</h2>
                                        <table>
                                            <tbody>
                                            <th><h5><strong>Users list</strong></h5></th>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <th><h5><strong>Email</strong></h5></th>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <br/>
                                        <input onChange={ this.handleChange } placeholder="Add users" type="text"></input>
                                        <button onClick={this.handleClick}>Add</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        :'' }
                    <h1>Todo List</h1>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit">Sign In with Google</button>

                        {error && <p>{error.message}</p>}
                    </form>                </header>

                <ul>
                    <h1>jo</h1>
                </ul>


                { this.props.currentUser ?
                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Mis on probleemid?"
                        />
                    </form> : ''
                }
                <hr></hr>

            </div>

        );
    }
}



export default App;