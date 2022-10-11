import React from "react";
import { useParams } from "react-router-dom";
import { useBlogDetailedData } from "../hooks/useBlogDetailedData";
import "./BlogPostDetailPage1.css";
import "./BlogPostDetailPage2.css";

const BlogPostDetailPage = () => {
  const id = useParams();
  const { isLoading, isError, data, error } = useBlogDetailedData(id);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div className="u-body u-xl-mode">
      <section
        className="u-align-center u-clearfix u-section-1"
        id="carousel_f963"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-expanded-width u-product u-white u-product-1">
            <div className="u-container-layout u-container-layout-1">
              <img
                src={data?.data.imageURL}
                alt=""
                className="u-image u-image-default u-product-control u-image-1"
                data-image-width="1000"
                data-image-height="1500"
              />
              <div className="u-align-center u-container-style u-grey-5 u-group u-shape-rectangle u-group-1">
                <div className="u-container-layout u-container-layout-2">
                  Author: {data?.data.author.toUpperCase()}
                  <div className="u-product-control u-product-price u-product-price-1">
                    <div className="u-price-wrapper u-spacing-10">
                      <div
                        className="u-hide-price u-old-price"
                        style={{ textDecoration: "line-through" }}
                        wfd-invisible="true"
                      ></div>
                      <div
                        className="u-price"
                        style={{ fontWeight: "3rem", fontWeight: "700" }}
                      >
                        {data?.data.title}
                      </div>
                    </div>
                  </div>
                  <h2 className="u-product-control u-text u-text-1">
                    {/* Title */}
                  </h2>
                  <div className="u-product-control u-product-desc u-text u-text-2">
                    <p>{data?.data.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetailPage;
