import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../redux/actions/form.actions";

const MatchingForm = () => {
  const matchingForm = useSelector((state) => state.form.matchingForm);
  const user = useSelector((state) => state.form.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(formActions.matchingForm(user));
  }, []);
  // console.log(matchingForm);

  return (
    <div>
      {matchingForm?.map((form) => {
        console.log(form);
        return (
          <div
            className="matching-receiver"
            onClick={() => {
              dispatch(formActions.changeSubpage("receiver"));
              dispatch(formActions.getSingleForm({ id: form._id }));
            }}
          >
            <div className="d-flex justify-content-between">
              <span
                style={{ marginBottom: "1rem", textTransform: "uppercase" }}
              >
                {form.owner.firstName} {form.owner.lastName}
              </span>
              <span>{Math.round((form.distance / 1000) * 10) / 10} km</span>
            </div>

            {form.items.map((item) => (
              <>
                <div className="d-flex justify-content-between">
                  <span> {item.name} </span>
                  <span>{item.quantity}</span>
                </div>
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default MatchingForm;
