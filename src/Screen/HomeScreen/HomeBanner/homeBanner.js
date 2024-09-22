import React from "react";
import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

function HomeBanner() {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/GW/J24_GW_PC_Hero_KSD_EN_V2_2x._CB563840302_.jpg"
        alt="Diwali Sale"
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItem">
        {homeBannerItemProduct.product.map((item, idx) => {
          return (
            <div className="homeBannerItemCard">
              <div className="homeBannerItemCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemCard">
                {item.imgs.map((it, idx) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img
                        className="imgBannerHomeDivImg"
                        src={it}
                      />
                      <div className="imgBannerImgName">Sample Image</div>
                    </div>
                  );
                })}
              </div>
              <div className="exploreAll">Explore all</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeBanner;
