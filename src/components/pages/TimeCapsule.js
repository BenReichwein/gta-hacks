import React from 'react';
import { connect } from 'react-redux';
import { postTimeCapsule, getTimeCapsule } from '../../actions';

class TimeCapsule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          from : '',
          note: '',
        };
    }
    onSubmit = () => {
        this.props.postTimeCapsule({
            from: this.state.from, 
            note: this.state.note
        });
    };

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }

    componentDidMount = () => {
        this.props.getTimeCapsule();
    }

    render() {
        if (this.props.capsule.length > 0) {
            return (
                <div>
                    <div>
                        <h3>Capsule Notes</h3>
                        <ul>
                            { this.props.capsule.map(note =>
                            <li key={note._id}>
                                <label>
                                    {note.from}<br/>
                                    {note.note}<br/>
                                    {note.date.slice(0, -14)}<br/>
                                </label>
                            </li>
                            )}
                        </ul>
                    </div>
                    <br/>
                    <div>
                        <h3>Create a Time Capsule Note</h3>
                        <form onSubmit={this.onSubmit}>
                        <input
                            type="from"
                            name="from"
                            placeholder="Enter From"
                            value={this.state.from}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="note"
                            name="note"
                            placeholder="Enter Note"
                            value={this.state.note}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>There's no posts to view...</p>
                    <br/>
                    <div>
                        <h3>Create a Time Capsule Note</h3>
                        <form onSubmit={this.onSubmit}>
                        <input
                            type="from"
                            name="from"
                            placeholder="Enter From"
                            value={this.state.from}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="note"
                            name="note"
                            placeholder="Enter Note"
                            value={this.state.note}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        capsule: state.capsule,
    }
}

export default connect(
  mapStateToProps,
  { postTimeCapsule, getTimeCapsule }
)(TimeCapsule);
