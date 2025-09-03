import React from 'react'

function Button({title}: {title: string}) {
    return (
        <div>
            <button className="bg-[#3794C7] text-white font-semibold px-7 py-3 rounded-md hover:bg-opacity-60 hover:cursor-pointer">{title}</button>
        </div>
    )
}

export default Button
