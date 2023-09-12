const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex justify-center item-center gap-2 px-7 py-4 border font-monsterrat text-lg leading-none rounded-full
    
    ${backgroundColor 
      ? `${backgroundColor} ${borderColor} ${textColor}` 
      : 'bg-coral-red text-white border-coral-red'}
      `}>
      
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button