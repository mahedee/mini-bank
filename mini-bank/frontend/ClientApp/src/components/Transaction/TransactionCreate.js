import React, { Component } from "react";
import axios from "axios";
import { AddTransaction } from "../../services/TransactionService";

export default class TransactionCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeAccountId = this.onChangeAccountId.bind(this);
    this.onChangeTransactionAmount = this.onChangeTransactionAmount.bind(this);
    this.onChangeTransactionMode = this.onChangeTransactionMode.bind(this);
    this.onChangeTransactionDate = this.onChangeTransactionDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      accountID: "",
      transactionAmount: "",
      transactionMode: "",
      transactionDate: "",
    };
  }

  // onChangeName(e) {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // }

  onChangeAccountId(e) {
    this.setState({
      accountID: e.target.value,
    });
  }

  onChangeTransactionAmount(e) {
    this.setState({
      transactionAmount: e.target.value,
    });
  }

  onChangeTransactionMode(e) {
    this.setState({
      transactionMode: e.target.value,
    });
  }

  onChangeTransactionDate(e) {
    this.setState({
      transactionDate: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { history } = this.props;

    let transactionObj = {
      accountID: this.state.accountID,
      transactionAmount: this.state.transactionAmount,
      transactionMode: this.state.transactionMode,
      transactionDate: this.state.transactionDate
    };

    AddTransaction(transactionObj).then((result) => {
      window.location.replace("/transactions");
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Add new transaction</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="control-label">Account Id: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.accountID}
                onChange={this.onChangeAccountId}
              ></input>
            </div>

            <div className="form-group">
              <label className="control-label">Transaction Amount: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.transactionAmount}
                onChange={this.onChangeTransactionAmount}
              ></input>
            </div>

            
            <div className="form-group">
              <label className="control-label">Transaction Mode: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.transactionMode}
                onChange={this.onChangeTransactionMode}
              ></input>
            </div>

            <div className="form-group">
              <label className="control-label">Transaction Date: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.transactionDate}
                onChange={this.onChangeTransactionDate}
              ></input>
            </div>

            <div className="form-group">
              <br></br>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add Transaction"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
