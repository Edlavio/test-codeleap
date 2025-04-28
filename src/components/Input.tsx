interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label: string;
}

export default function Input({ className, name, label, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-2'>
      {name && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        className={`w-full p-2 bg-transparent text-black border border-gray-primary rounded-lg text-base outline-none transition-colors ease-in-out duration-200 placeholder:text-gray-tertiary focus:border-primary required:invalid:border-red disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  )
}
