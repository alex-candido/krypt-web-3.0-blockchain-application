import { ethers } from "ethers";
import React, { createContext } from "react";

import { contractABI, contractAddress } from "../utils/constants";

interface AuthContextData {
  value: string;
}

export const TransactionContext = createContext<AuthContextData>( {} as AuthContextData );

const { ethereum } = window;

interface ContextProps {
  children: React.ReactNode;
}

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }: ContextProps) => {

  return (
    <TransactionContext.Provider
      value={{ 
        value: 'test'
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}