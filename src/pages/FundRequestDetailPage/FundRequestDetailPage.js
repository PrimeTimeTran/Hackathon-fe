import React from "react";
import FundCommentBox from "../../components/FundCommentBox/FundCommentBox";
import FunSummaryBox from "../../components/FundSummaryBox/FunSummaryBox";
import FundRequestDetailContent from "../../components/FundRequestDetailContent/FundRequestDetailContent";
import ShareBox from "../../components/ShareBox/ShareBox";
function FunDetailQuestPage() {
  return (
    <div>
      <div className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-8">
              <FundRequestDetailContent />
              <FundCommentBox />
            </div>
            <div className="col-lg-4">
              <FunSummaryBox />
              <br></br>
              <ShareBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunDetailQuestPage;
