import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started!</div>
        }

        const book = this.props.book;

        return (
            <div>
                <h3>{book.title}</h3>
                <h4>by {book.author}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);