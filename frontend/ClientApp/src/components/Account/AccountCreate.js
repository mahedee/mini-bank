import React, { Component } from "react";
import axios from "axios";
import { AddAccount } from "../../services/AccountService";

export default class AccountCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this);
    this.onChangeAccountHolderName = this.onChangeAccountHolderName.bind(this);
    this.onChangeBalance = this.onChangeBalance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      accountNumber: "",
      accountHolderName: "",
      balance: 0,
    };
  }



  onChangeAccountNumber(e) {
    this.setState({
      accountNumber: e.target.value,
    });
  }

  onChangeAccountHolderName(e) {
    this.setState({
      accountHolderName: e.target.value,
    });
  }

  onChangeBalance(e) {
    this.setState({
      balance: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { history } = this.props;

    let accountObj = {
      accountNumber: this.state.accountNumber,
      accountHolderName: this.state.accountHolderName,
      balance: this.state.balance
    };

    AddAccount(accountObj).then((result) => {
      window.location.replace("/accounts");
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Add new Account</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="control-label">Account Number: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.accountNumber}
                onChange={this.onChangeAccountNumber}
              ></input>
            </div>

            <div className="form-group">
              <label className="control-label">Account Holder Name: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.accountHolderName}
                onChange={this.onChangeAccountHolderName}
              ></input>
            </div>

            <div className="form-group">
              <label className="control-label">Balance: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.balance}
                onChange={this.onChangeBalance}
              ></input>
            </div>


            <div className="form-group">
              <br></br>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add Account"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
