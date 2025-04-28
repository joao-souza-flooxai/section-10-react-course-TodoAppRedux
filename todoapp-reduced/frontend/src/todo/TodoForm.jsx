import React, { Component } from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        const { add, description, search, clear } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const{ add , description ,search} = this.props;
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input 
                        id='description' 
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyDown={this.keyHandler}
                        value={this.props.description} 
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton 
                        btnStyle='primary' 
                        icon='plus'
                        onClick={()=>add(description)}
                    />
                    <IconButton 
                        btnStyle='info' 
                        icon='search'
                        onClick={()=>search()}
                    />
                    <IconButton 
                        btnStyle='default' 
                        icon='close'
                        onClick={this.props.clear}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
