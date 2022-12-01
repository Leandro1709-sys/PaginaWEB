import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [gallery, setGallery] = useState("");

  const data = [
    { thumb: "img/portfolio/SPORTOTAL/ST1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/HOTEL ALKAZAR/HA1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" }
  ];

  const ha=[
    { thumb: "img/portfolio/HOTEL ALKAZAR/HA1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/HOTEL ALKAZAR/HA2.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/HOTEL ALKAZAR/HA3.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/HOTEL ALKAZAR/HA5.jpg", title: "Alcazar Hotel" }

  ];

  const st=[
    { thumb: "img/portfolio/SPORTOTAL/ST1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/ST2.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/ST3.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/ST4.jpg", title: "Sport Total" },

  ];



  const imagesHA = ha.map(obj => obj.thumb.replace("-small", "-large"));
  const imagesST = st.map(obj => obj.thumb.replace("-small", "-large"));
 // console.log(index)

  const openImageViewer = useCallback(gal=> {
    
    setIsViewerOpen(true);
    if(gal==="Alcazar Hotel")
    setGallery(imagesHA)
    else if(gal==="Sport Total"){
      setGallery(imagesST)
    }
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setGallery([])
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(title)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={gallery}
              backgroundStyle={{ zIndex: 99999 }}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
