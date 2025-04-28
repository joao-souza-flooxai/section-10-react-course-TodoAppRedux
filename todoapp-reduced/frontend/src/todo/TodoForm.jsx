import React, { Component } from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.search() : this.props.handleAdd();
        } else if (e.key === 'Escape') {
            this.props.handleClear();
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input 
                        id='description' 
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={e => this.props.changeDescription(e.target.value)}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} 
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton 
                        btnStyle='primary' 
                        icon='plus'
                        onClick={this.props.handleAdd}
                    />
                    <IconButton 
                        btnStyle='info' 
                        icon='search'
                        onClick={this.props.search}
                    />
                    <IconButton 
                        btnStyle='default' 
                        icon='close'
                        onClick={this.props.handleClear}
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
    bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
