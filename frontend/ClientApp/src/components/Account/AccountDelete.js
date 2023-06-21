import React, { Component } from "react";
import { DeleteAccount, GetAccountById } from "../../services/AccountService";

export default class AccountDelete extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);

    this.state = {
      id: "",
      accountNumber: "",
      accountHolderName: "",
      balance: 0
    };
  }

  componentDidMount() {
    const id = window.location.href.split("/")[4];

    GetAccountById(id).then((response) => {
      const account = response.data;
      this.setState({
        id: account.id,
        accountNumber: account.accountNumber,
        accountHolderName: account.accountHolderName,
        balance: account.balance
      });
    });
  }

  onCancel() {
    window.location.replace("/accounts");
  }

  onConfirmation(e) {
    e.preventDefault();
    const id = window.location.href.split("/")[4];
    DeleteAccount(id).then((result) => {
      window.location.replace("/accounts");
    });
  }

  render() {
    return (
      <div>
        <h2>Delete</h2>
        <h3>Are you sure you want to delete this?</h3>
        <div>
          <h4>Accounts</h4>
          <dl className="row">
            <dt className="col-sm-2">Id:</dt>
            <dd className="col-sm-10">{this.state.id}</dd>
            <dt className="col-sm-2">Account Number:</dt>
            <dd className="col-sm-10">{this.state.accountNumber}</dd>
            <dt className="col-sm-2">Account Holder Name:</dt>
            <dd className="col-sm-10">{this.state.accountHolderName}</dd>
            <dt className="col-sm-2">Balance:</dt>
            <dd className="col-sm-10">{this.state.balance}</dd>
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
