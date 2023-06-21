import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetAllTransaction } from "../../services/TransactionService";

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.OnTransactionEdit = this.OnTransactionEdit.bind(this);
    this.OnTransactionDelete = this.OnTransactionDelete.bind(this);
    this.onTransactionCreate = this.onTransactionCreate.bind(this);

    this.state = {
      transactions: [],
      loading: true,
      failed: false,
      error: "",
    };
  }

  componentDidMount() {
    this.populateTransactionData();
    //GetAllClient().then((response) => {});
  }

  // Event handler for create button
  onTransactionCreate = () => {
    const { history } = this.props;
    history.push("/transaction-create");
  };

  // Event handler for edit button
  OnTransactionEdit(id) {
    window.location.replace("/transaction-edit/" + id);
  }

  // Event handler for delete button
  OnTransactionDelete(id) {
    window.location.replace("/transaction-delete/" + id);
  }

  populateTransactionData() {
    GetAllTransaction()
      .then((result) => {
        const response = result.data;
        this.setState({ transactions: response, loading: false, error: "" });

        //console.log("transactions", response);
      })
      .catch((error) => {
        this.setState({
          transactions: [],
          loading: false,
          failed: true,
          error: "Transactions could not be loaded!",
        });
      });
  }

  renderAllTransactionTable(transactions) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Account Id</th>
            <th>Transaction Amount</th>
            <th>Transaction Mode</th>
            <th>Transaction Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.accountID}</td>
              <td>{transaction.transactionAmount}</td>
              <td>{transaction.transactionMode}</td>
              <td>{transaction.transactionDate}</td>
              <td>
                <Link
                  to={"/transaction-edit/" + transaction.id}
                  className="btn btn-success"
                >
                  <i className="fa fa-edit"></i> Edit
                </Link>{" "}
                ||
                <button
                  onClick={() => this.OnTransactionDelete(transaction.id)}
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
      this.renderAllTransactionTable(this.state.transactions)
    );

    return (
      <div>
        <h2>Transactions</h2>

        <Link to={"/transaction-create"} className="btn btn-primary">
          Create
        </Link>
        {content}
      </div>
    );
  }
}
