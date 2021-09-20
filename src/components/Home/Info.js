import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            {/* <p className="text-muted lead mb-5">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species. From the coffee
              fruit, the seeds are separated to produce a stable, raw product:
              unroasted green coffee. The seeds are then roasted, a process
              which transforms them into a consumable product: roasted coffee,
              which is ground into a powder and typically steeped in hot water
              before being filtered out, producing a cup of coffee.
            </p> */}
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
