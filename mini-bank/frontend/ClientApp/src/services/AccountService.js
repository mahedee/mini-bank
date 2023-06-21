import axios from "axios";
import { Base_API_URL } from "../utils/BaseURL";

export const GetAllAccounts = () =>{
    try{
        const response = axios.get(Base_API_URL + `/Accounts/GetAll`);
        return response;

    }catch(error){
        throw error;
    }
}


export const AddAccount = (data) =>{
    try{
        const response = axios.post(Base_API_URL + `/Accounts/Add`, data);
        return response;
    }catch(error){
        throw error;
    }
}


export const GetAccountById = (id) =>{
    try{
        const response = axios.get(Base_API_URL + `/Accounts/` + id);
        return response;

    }catch(error){
        throw error;
    }
}

  export const EditAccount = (id, data) => {
    try {
      const response = axios.put(Base_API_URL + `/Accounts/Edit/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  };


export const DeleteAccount = (id) => {
    try {
      const response = axios.delete(Base_API_URL + `/Accounts/Delete/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
