import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, clear, search } from "./todoActions";

class TodoForm extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.search();
    }

    render() {

        const { add, search, clear, description } = this.props;

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                    />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() => add(description)}
                    />
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={search}
                    />
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={() => clear() }
                    />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
