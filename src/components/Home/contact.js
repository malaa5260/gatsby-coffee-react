import React from "react"
import Title from "../Globals/Title"
export default function Contact() {
  return (
    <section className="contact py-5 ">
      <div className="container">
        <Title title="contact us" />
        <div className="row">
          <div className="col-sm-8 col-md-6 mx-auto">
            <form className="">
              {/* name */}
              <div className="form-group">
                <label htmlFor="name" className="mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  id="name"
                  placeholder="mohamed alaa"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="email@email.com"
                />
              </div>
              {/* description */}
              <div className="form-group">
                <label htmlFor="description" className="mb-1">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  id="description"
                  placeholder="your description here..."
                ></textarea>
              </div>
              {/* submit */}
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5 w-100"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
