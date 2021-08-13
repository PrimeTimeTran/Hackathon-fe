import React from "react";
import "./Style.css";
function FunDetailRequestInfo() {
  return (
    <div>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 box-test">
              <div className="grey-box">
                <div>
                  <div className="text-center fw-bolder mb-1">
                    <p>Collected amount (65%)</p>
                    <h2 className="fw-bold"> $7,498</h2>
                  </div>
                  <div
                    className="progress"
                    style={{ backgroundColor: "green" }}
                  >
                    <div
                      className="progress-bar success"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className=" padding2vh ">
                  <br></br>
                  <center>
                    <button
                      type="button"
                      className=" btn btn-success btn-lg btn-block"
                    >
                      Support
                    </button>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <!-- Post content--> */}
              <article>
                {/* <!-- Post header--> */}
                {/* <!-- Preview image figure--> */}
                <figure className="mb-4">
                  <img
                    className="img-fluid rounded"
                    src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    alt="..."
                  />
                </figure>
                <header className="mb-4">
                  {/* <!-- Post title--> */}
                  <h1 className="fw-bolder mb-1">
                    Help to receive treatment for a chest tumor
                  </h1>
                  {/* <!-- Post meta content--> */}
                  <div className="text-muted fst-italic mb-2">
                    January 1, 2021
                  </div>
                  {/* <!-- Post categories--> */}
                </header>
                <div className="d-flex align-items-center mt-lg-5 mb-4">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                  <div className="ms-3">
                    <div className="fw-bold">Valerie Luna</div>
                    <div className="text-muted">Ho Chi Minh</div>
                  </div>
                </div>
                {/* <!-- Post content--> */}
                <section className="mb-5">
                  <p className="fs-5 mb-4">
                    I am Luly Menéndez Marcin, I live in Mexico City I am 53
                    years old, I have two children and I am married.
                  </p>
                  <p className="fs-5 mb-4">
                    3 weeks ago I was diagnosed with a tumor of 8 cms in the
                    chest near the heart which is pressing various organs. This
                    causes a lot of pain. Therefore, it is urgent and important
                    to attend to it promptly.
                  </p>
                  <p className="fs-5 mb-4">
                    As a result of the pandemic (2020 ) my income decreased
                    significantly, which is why it was impossible for me to
                    continue with my insurance for major medical expenses that
                    pays for 30 years without interruption.
                  </p>
                </section>
              </article>
              {/* <!-- Comments section--> */}
              <section>
                <div className="card bg-light">
                  <div className="card-body">
                    {/* <!-- Comment form--> */}
                    <form className="mb-4">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Join the discussion and leave a comment!"
                      ></textarea>
                    </form>
                    {/* <!-- Comment with nested comments--> */}
                    <div className="d-flex mb-4">
                      {/* <!-- Parent comment--> */}
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-circle"
                          src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="ms-3">
                        <div className="fw-bold">Thao</div>
                        God bless you
                        {/* <!-- Child comment 1--> */}
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-circle"
                              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                              alt="..."
                            />
                          </div>
                          <div className="ms-3">
                            <div className="fw-bold">Tuan</div>
                            My house near her home
                          </div>
                        </div>
                        {/* <!-- Child comment 2--> */}
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-circle"
                              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                              alt="..."
                            />
                          </div>
                          <div className="ms-3">
                            <div className="fw-bold">Patrick</div>
                            Really?
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single comment--> */}
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-circle"
                          src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="ms-3">
                        <div className="fw-bold">Minh</div>I did help her. Her
                        son still in hospital.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunDetailRequestInfo;
