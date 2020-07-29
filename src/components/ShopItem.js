import React from 'react'

export default function ShopItem(props) {
    return (
        <div className="shop-item">
            <h3>{props.name}</h3>
            <span>{props.description}</span>
        </div>
    )
}
