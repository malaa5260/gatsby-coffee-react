import React from "react"

export default function Product({ product }) {
  return (
    <div className="col-lg-4 col-sm-8 col-md-6 mx-auto my-3 text-center">
      <img
        src={product.image.fluid.src}
        alt="coffeeitem"
        className="imgproduct"
      />
    </div>
  )
}
