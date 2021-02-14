import { connect } from 'react-redux';
import React, { Component } from 'react'
import {webScrape} from '../../actions'
import '../styles/News.css'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
          link : ''
        };
    }

    onSubmit = () => {
        this.props.webScrape(this.state.link)
    };

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }

    render() {
        if (this.props.data.images && this.props.data.links) {
            return (
                <div>
                    <h3>WEB SCRAPE:</h3>
                    <h4>{this.props.data.title}</h4>
                    <h5>Images:</h5>
                    { this.props.data.images.map(image =>
                        <p>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src={image}/>
                        </p>
                    )}
                    <h5>Links:</h5>
                    { this.props.data.links.map(link =>
                        <p>
                            <a href={link}>{link}</a>
                        </p>
                    )}
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'suggestedLinks'}>
                        <h2 style={{color:'#5669AE'}}>SUGGESTED LINKS</h2>
                        <button className={'suggestedButton'} onClick={()=> this.props.webScrape('https://www.bbc.com/news/world-us-canada-56035306')}>VACCINES</button>
                        <button className={'suggestedButton'} onClick={()=> this.props.webScrape('https://cmha.ca/news/covid-19-and-mental-health')}>MENTAL HEALTH</button>
                        <button className={'suggestedButton'} onClick={()=> this.props.webScrape('https://www.ctvnews.ca/health/coronavirus/cdc-study-finds-two-masks-are-better-than-one-vs-covid-19-1.5303383')}>MASKS</button>
                        <button className={'suggestedButton'} onClick={()=> this.props.webScrape('https://www.ontario.ca/page/covid-19-response-framework-keeping-ontario-safe-and-open?gclid=CjwKCAiAjp6BBhAIEiwAkO9WujliUVzwFDWEAUjzNlNo5Ap8M5vSFOkPVR_rNwYCHsOek4OdQ8L5CxoCkyUQAvD_BwE&gclsrc=aw.ds')}>RESTRICTIONS</button>
                    </div>
                    <div className={'inputBox'}>
                        <h3 style={{textAlign: 'center', color: 'white'}}>Web Scrape a News Link:</h3>
                        <input
                            className="linkInput"
                            type="link"
                            name="link"
                            placeholder="Enter Link"
                            value={this.state.link}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br/>
                        <button className={'button'} onClick={this.onSubmit}>Scrape</button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {data: state.webScrape}
}

export default connect(mapStateToProps, {webScrape})(News)