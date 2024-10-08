import React from "react"
export default function Product({ product }) {
  return (
    <div className="col-lg-4 col-sm-8 col-md-6 mx-auto my-3 text-center">
      <div className="card">
        <img
          src={product.image.fluid.src}
          alt="coffeeitem"
          className="card-img-top"
        />
        <div className="card-body">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-image={product.image.fluid.src}
            data-item-url="https://gatsby-coffee-react.netlify.app/"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
