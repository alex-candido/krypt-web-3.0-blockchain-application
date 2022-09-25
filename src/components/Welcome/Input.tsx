interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: () => void;
}

const Input = ({ placeholder, name, type, value, handleChange }: InputProps) => {
  return (
    <input
    placeholder={placeholder}
    name= {name}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange()}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
  )
}

export default Input;