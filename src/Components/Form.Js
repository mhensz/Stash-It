import React, {Component} from 'react';
import '../CSS/Form.css';
//form that will take and display yarn information

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: '',
            name: '',
            color: '',
            dyeLot: '',
            yarnType: '',
            yards: '',
            weight: '',
            comments: '',
            tagInput: '',
            tags: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddTag = this.handleAddTag.bind(this);
    };

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleAddTag(currentState,e) {
        e.preventDefault();
        this.setState((currentState) => {
            return {
                tags: currentState.tags.concat([this.state.tagInput])
            };
        });

    }

    // To-Dos: Change brand to be a drop down instead of a text box?
    //Finish the yarn type dropdown
    render() {
        console.log(this.state);
        return(
            <div>
                <form className='form-container'>
                    <label className='label'>Brand:
                      <input type='text' name='brand' onChange={this.handleChange}/>
                    </label>
                    <label>Name:
                      <input type='text' name='name' onChange={this.handleChange}/>
                    </label>
                    <label>Color:
                      <input type='text' name='color' onChange={this.handleChange}/>
                    </label>
                    <label>Dye Lot:
                      <input type='text' name='dyeLot' onChange={this.handleChange}/>
                    </label>
                    <label>Yarn Type:
                        <select name='yarnType' onChange={this.handleChange}>
                            <option value='1'>1-Lace Weight</option>
                            <option value='2'>2-Finger Weight</option>
                        </select>
                    </label>
                    <label>Yards:
                      <input type='text' name='yards' onChange={this.handleChange}/>
                    </label>
                    <label>Skein Weight:
                      <input type='text' name='weight' onChange={this.handleChange}/>
                    </label>
                    <label>Tags:
                      <input type='text' name='tagInput' onChange={this.handleChange} />
                      <button  onClick={(e) => this.handleAddTag(this, e)}>Add</button>
                    </label>
                    <label>Comments:
                      <textarea name='comments'onChange={this.handleChange}></textarea>
                    </label>
                </form>
            </div>
        );
    };

    
}

export default Form;