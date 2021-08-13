import React from "react";

function FundCommentBox() {
  return (
    <div>
      <div>
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
                <div className="fw-bold">Minh</div>I did help her. Her son still
                in hospital.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundCommentBox;
