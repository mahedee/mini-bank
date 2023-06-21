import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetAllAccounts } from "../../services/AccountService";

export default class Accounts extends Component {
  constructor(props) {
    super(props);

    this.OnAccountEdit = this.OnAccountEdit.bind(this);
    this.OnAccountDelete = this.OnAccountDelete.bind(this);
    this.onAccountCreate = this.onAccountCreate.bind(this);

    this.state = {
      accounts: [],
      loading: true,
      failed: false,
      error: "",
    };
  }

  componentDidMount() {
    this.populateAccountData();
    //GetAllClient().then((response) => {});
  }

  // Event handler for create button
  onAccountCreate = () => {
    const { history } = this.props;
    history.push("/account-create");
  };

  // Event handler for edit button
  OnAccountEdit(id) {
    window.location.replace("/account-edit/" + id);
  }

  // Event handler for delete button
  OnAccountDelete(id) {
    window.location.replace("/account-delete/" + id);
  }

  populateAccountData() {
    console.log("Populate account data");
    GetAllAccounts()
      .then((result) => {
        const response = result.data;
        this.setState({ accounts: response, loading: false, error: "" });
      })
      .catch((error) => {
        this.setState({
          accounts: [],
          loading: false,
          failed: true,
          error: "Accounts could not be loaded!",
        });
      });
  }

  renderAllAccountTable(accounts) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Account Number</th>
            <th>Account Holder Name</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.accountNumber}</td>
              <td>{account.accountHolderName}</td>
              <td>{account.balance}</td>
              <td>
                <Link
                  to={"/account-edit/" + account.id}
                  className="btn btn-success"
                >
                  <i className="fa fa-edit"></i> Edit
                </Link>{" "}
                ||
                <button
                  onClick={() => this.OnAccountDelete(account.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let content = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderAllAccountTable(this.state.accounts)
    );

    return (
      <div>
        <h2>Accounts Information</h2>

        <Link to={"/account-create"} className="btn btn-primary">
          Create
        </Link>
        {content}
      </div>
    );
  }
}
