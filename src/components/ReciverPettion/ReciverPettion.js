
import { Badge } from "react-bootstrap";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

import "./style.css";

const ReciverPettion = ({ reciver, handleClick }) => {
  const { t } = useTranslation();
  const statusValue = () => {
    return reciver?.status === "requested" ? t("status_value") : "";
  };

  return (
    <>
      <div className="receiver_Contents">
        <div>
          <img
            src={
              "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-illustration-of-charity-logo-design-template-png-image_555252.jpg"
            }
            className="itemReceiver_Img"
            alt="img-charity"
          />
          <div className="formgiver">
            <Badge style={{ "text-indent": "0.5em" }} bg="success">
              {t("from")}
            </Badge>
            <h6>
              {reciver?.owner?.lastName} {reciver?.owner?.firstName}
            </h6>
          </div>
        </div>

        <div className="receiver_Descrip">
          <div className="receiver_body">
            <div className="itemName">
              {reciver?.items?.map((item) => (
                <>
                  <div>
                    {t("type")}: {item.type}
                  </div>
                  <div>
                    {t("name")}: {item.name}
                  </div>
                  <div>
                    {t("quantity")}: {item.weight}
                  </div>
                </>
              ))}
            </div>

            <div className="itemName">
              <div>
                {t("wishes_to_receive")}: {reciver?.receiveAmount}
              </div>
              <div>
                {t("status")}: {statusValue()}
              </div>
              <div>
                {" "}
                {t("time")}:{" "}
                <Moment fromNow ago>
                  {reciver?.isolatedDate}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReciverPettion;
