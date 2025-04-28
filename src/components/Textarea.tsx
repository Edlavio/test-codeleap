interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label: string;
}

export default function Textarea({ className, name, label, ...props }: TextareaProps) {
  return (
    <div className='flex flex-col gap-2'>
      {name && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        className={`resize-none w-full p-2 bg-transparent text-black border border-gray-primary rounded-lg text-base outline-none transition-colors ease-in-out duration-200 placeholder:text-gray-tertiary focus:border-primary required:invalid:border-red disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  );
}