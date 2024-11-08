import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";

import { markAsDone, markAsPending, remove } from "../todo/todoActions";

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(item => (
            <tr key={item._id}>
                <td className={item.done ? "markAsDone" : ""}>{item.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={item.done} onClick={() => props.markAsDone(item)} />
                    <IconButton style="warning" icon="undo" hide={!item.done} onClick={() => props.markAsPending(item)} />
                    <IconButton style="danger" icon="trash-o" onClick={() => props.remove(item)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
