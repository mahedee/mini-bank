import AccountCreate from "./components/Account/AccountCreate";
import AccountDelete from "./components/Account/AccountDelete";
import AccountEdit from "./components/Account/AccountEdit";
import Accounts from "./components/Account/Accounts";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import TransactionCreate from "./components/Transaction/TransactionCreate";
import TransactionDelete from "./components/Transaction/TransactionDelete";
import TransactionEdit from "./components/Transaction/TransactionEdit";
import Transactions from "./components/Transaction/Transactions";

const AppRoutes = [
  {
    index: true,
    // element: <Home />
    element: <Accounts/>
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/accounts',
    element: <Accounts/>
  },
  {
    path: '/account-create',
    element: <AccountCreate/>
  },
  {
    path: '/account-edit/:id',
    element: <AccountEdit/>
  },
  {
    path: '/account-delete/:id',
    element: <AccountDelete/>
  },
  {
    path: '/transactions',
    element: <Transactions/>
  },
  {
    path: '/transaction-create',
    element: <TransactionCreate/>
  },
  {
    path: '/transaction-edit/:id',
    element: <TransactionEdit/>
  },
  {
    path: '/transaction-delete/:id',
    element: <TransactionDelete/>
  },
];

export default AppRoutes;
