import axios from "axios";
import { Base_API_URL } from "../utils/BaseURL";

export const GetAllTransaction = () =>{
    try{
        const response = axios.get(Base_API_URL + `/Transactions/GetAll`);
        return response;

    }catch(error){
        throw error;
    }
}


export const AddTransaction = (data) =>{
    try{
        const response = axios.post(Base_API_URL + `/Transactions/Add`, data);
        return response;
    }catch(error){
        throw error;
    }
}


export const GetTransactionById = (id) =>{
    try{
        const response = axios.get(Base_API_URL + `/Transactions/` + id);
        return response;

    }catch(error){
        throw error;
    }
}

  export const EditTransaction = (id, data) => {
    try {
      const response = axios.put(Base_API_URL + `/Transactions/Edit/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  };


export const DeleteTransaction = (id) => {
    try {
      const response = axios.delete(Base_API_URL + `/Transactions/Delete/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  