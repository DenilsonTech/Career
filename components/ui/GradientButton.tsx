import React from 'react'

const GradientButton = ( {title, icon, position, handleClick, otherClasses}: { title: string, icon?: React.ReactNode, handleClick?: () => void; otherClasses?: string, position: string}) => {
    return (
        <button className={`w-full px-12 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>
    )
}

export default GradientButton
