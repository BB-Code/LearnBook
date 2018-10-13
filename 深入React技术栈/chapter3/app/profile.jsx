import React, { PropTypes } from 'react';
import Hobby  from './Hobby';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['music','code']
        };
        this.likeCallback = this.likeCallback.bind(this);
        this.addHobby = this.addHobby.bind(this);
    }
    likeCallback(){
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }
    componentDidMount(){
        setTimeout(()=>{
            this.likeCallback();
        },1000);
    }
    addHobby(){
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if(val){
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies,val];
            this.setState({
                hobbies
            },()=>{
                hobbyInput.value = '';
            })
        }

    }
    render() {
        return (
            <div className="prefile-component">
                <h1>My Name is {this.props.name}</h1>
                <h2>I am {this.props.age} years old</h2>
                <button onClick={this.likeCallback}>Get Zan</button>
                <h2>total number of zan: {this.state.liked}</h2>
                <h2>My Hobby</h2>
                <ul>
                    {this.state.hobbies.map((hobby,i)=> <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" ref="hobby"/>
                <button onClick={this.addHobby}>add hobby</button>
            </div> 
        )
    }
}

Profile.propTypes = propTypes;

export default Profile;