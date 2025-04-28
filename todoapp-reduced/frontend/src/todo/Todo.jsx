import React, { Component } from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { search } from './todoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 class Todo extends Component {
    componentDidMount() {
        this.props.search(); 
    }
    render(){
        return(
            <div>
                <PageHeader/>
                <TodoForm />
                <TodoList/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch);

export default connect(null, mapDispatchToProps)(Todo);