interface AddressProps {
  address: string;
}

export const shortenAddress = ({ address }: AddressProps) => {
  return ( 
    `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
  );
}
