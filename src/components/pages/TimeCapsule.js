import React from 'react';
import { connect } from 'react-redux';
import { postTimeCapsule, getTimeCapsule } from '../../actions';
import '../styles/TimeCapsule.css'

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
                    <h2 style={{color: '#7EA1D5', marginLeft: '370px'}}>GLOBAL TIME CAPSULE</h2>
                    <div className={'capsuleNotes'}>
                        <ul style={{color: 'white', textAlign: 'center', fontSize: '20px'}}>
                            { this.props.capsule.map(note =>
                            <li key={note._id}>
                                <label>
                                    {note.note}<br/>
                                    ~{note.from}<br/>
                                    {note.date.slice(0, -14)}<br/>
                                </label><br/>
                            </li>
                            )}
                        </ul>
                    </div>
                    <br/>
                    <div className={'capsuleForm'}>
                        <h3 style={{textAlign: 'center'}}>Create a Time Capsule Note</h3>
                        <form onSubmit={this.onSubmit}>
                        <h3 style={{paddingLeft: '20px'}}>From:</h3>
                        <input
                            className='from'
                            type="from"
                            name="from"
                            placeholder="Enter From"
                            value={this.state.from}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br/>
                        <h3 style={{paddingLeft: '20px'}}>Note:</h3>
                        <input
                            className='note'
                            type="note"
                            name="note"
                            placeholder="Enter Note"
                            value={this.state.note}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br/>
                        <br/>
                        <button className={'add'} type="submit">ADD</button>
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
