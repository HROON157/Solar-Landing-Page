export const Button = ({children, className='',...props}) => {
  return (
    <button className={`text-white font-bold cursor-pointer ${className} {...props}`}>
        {children}
    </button>
  )
}
