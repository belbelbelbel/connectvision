import React from 'react'

function Button({ title }: { title: string }) {
    return (
        <div>
            <a href="mailto:ConnectVisionEyeCare@gmail.com?subject=Inquiry%20About%20Services&body=Hello,%20I%20would%20like%20to%20know%20more%20about..">
                <button className="bg-[#3794C7] text-white font-semibold px-7 py-3 rounded-md hover:bg-opacity-60 hover:cursor-pointer">{title}</button>
            </a>
        </div>
    )
}

export default Button
