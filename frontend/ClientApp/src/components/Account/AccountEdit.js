import React, { Component } from "react";
import { EditAccount, GetAccountById } from "../../services/AccountService";

export default class AccountEdit extends Component {
  constructor(props) {
    super(props);

    this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this);
    this.onChangeAccountHolderName = this.onChangeAccountHolderName.bind(this);
    this.onChangeBalance = this.onChangeBalance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

  onUpdateCancel() {
    window.location.replace("/accounts");
  }

  onSubmit(e) {
    e.preventDefault();
    const id = window.location.href.split("/")[4];
    let accountObj = {
      id: this.state.id,
      accountNumber: this.state.accountNumber,
      accountHolderName: this.state.accountHolderName,
      balance: this.state.balance
    };

    EditAccount(id, accountObj).then((result) => {
      window.location.replace("/accounts");
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Edit Account</h3>
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
