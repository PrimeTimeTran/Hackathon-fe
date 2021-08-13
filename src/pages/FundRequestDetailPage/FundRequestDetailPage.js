import React from "react";
import FundCommentBox from "../../components/FundCommentBox/FundCommentBox";
import FunSummaryBox from "../../components/FundSummaryBox/FunSummaryBox";
import FundRequestDetailContent from "../../components/FundRequestDetailContent/FundRequestDetailContent";
function FunDetailQuestPage() {
  return (
    <div>
      <div className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4">
              <FunSummaryBox />
            </div>
            <div className="col-lg-8">
              <FundRequestDetailContent />
              <FundCommentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunDetailQuestPage;
