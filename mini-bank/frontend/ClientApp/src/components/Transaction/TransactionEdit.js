import React, { Component } from "react";
import { EditTransaction, GetTransactionById } from "../../services/TransactionService";

export default class TransactionEdit extends Component {
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

  componentDidMount() {
    const id = window.location.href.split("/")[4];
    GetTransactionById(id).then((response) => {
      const transaction = response.data;
      this.setState({
        id: transaction.id,
        accountID: transaction.accountID,
        transactionAmount: transaction.transactionAmount,
        transactionMode: transaction.transactionMode,
        transactionDate: transaction.transactionDate,
      });
    });
  }

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

  onUpdateCancel() {
    window.location.replace("/transactions");
  }

  onSubmit(e) {
    e.preventDefault();
    const id = window.location.href.split("/")[4];
    let transactionObj = {
      id: this.state.id,
      accountID: this.state.accountID,
      transactionAmount: this.state.transactionAmount,
      transactionMode: this.state.transactionMode,
      transactionDate: this.state.transactionDate
    };

    EditTransaction(id, transactionObj).then((result) => {
      window.location.replace("/transactions");
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Edit Transaction</h3>
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
              <br></br>
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
              <button onClick={this.onUpdateCancel} className="btn btn-default">
                Cancel
              </button>
              <input
                type="submit"
                value="Edit"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
