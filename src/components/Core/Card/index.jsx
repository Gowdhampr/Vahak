import React from 'react'

const Card = ({children}) => {
    return (
        <div className="card">
            <div className="cardBody">
                {children}
            </div>
        </div>
    )
}

export default Card