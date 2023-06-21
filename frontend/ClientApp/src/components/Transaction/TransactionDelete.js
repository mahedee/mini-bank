import React, { Component } from "react";
import { DeleteTransaction, GetTransactionById } from "../../services/TransactionService";

export default class TransactionDelete extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);

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
        transactionDate: transaction.transactionDate
      });
    });
  }

  onCancel() {
    window.location.replace("/transactions");
  }

  onConfirmation(e) {
    e.preventDefault();
    const id = window.location.href.split("/")[4];
    DeleteTransaction(id).then((result) => {
      window.location.replace("/transactions");
    });
  }

  render() {
    return (
      <div>
        <h2>Delete</h2>
        <h3>Are you sure you want to delete this?</h3>
        <div>
          <h4>Client</h4>
          <dl className="row">
            <dt className="col-sm-2">Id:</dt>
            <dd className="col-sm-10">{this.state.id}</dd>
            <dt className="col-sm-2">Account Id:</dt>
            <dd className="col-sm-10">{this.state.accountID}</dd>
            <dt className="col-sm-2">Transaction Amount:</dt>
            <dd className="col-sm-10">{this.state.transactionAmount}</dd>
            <dt className="col-sm-2">Transaction Mode:</dt>
            <dd className="col-sm-10">{this.state.transactionMode}</dd>
            <dt className="col-sm-2">Transaction Date:</dt>
            <dd className="col-sm-10">{this.state.transactionDate}</dd>
          </dl>

          <form onSubmit={this.onConfirmation}>
            <input type="hidden" asp-for="Id" />
            <button type="submit" className="btn btn-danger">
              Delete
            </button>{" "}
            |
            <button
              type="button"
              onClick={this.onCancel}
              className="btn btn-primary"
            >
              Back to List
            </button>
          </form>
        </div>
      </div>
    );
  }
}
