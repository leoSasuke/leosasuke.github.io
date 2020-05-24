import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoFrom from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description:'', List:[]}

        this.handleChange=this.handleChange.bind(this)       
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
         .then(resp => this.setState({...this.state, description:'', List: resp.data})
        )
    }
    
    handleChange(e){
        this. setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
        .then (resp => this.refresh())
    }
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoFrom description={this.state.description}
                    handleChange ={this.handleChange}
                    handleAdd={this.handleAdd }/>
                <TodoList list={this.state.list} />
            </div>
        )
    }
}
    