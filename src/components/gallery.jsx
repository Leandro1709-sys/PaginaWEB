import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [gallery, setGallery] = useState("");

  const data = [
    { thumb: "img/portfolio/SPORTOTAL/1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/ALKAZAR/1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/BCSJ/1.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BISTREA/1.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BURGUE/1.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/VER/1.jpg", title: "VER" },
    { thumb: "img/portfolio/VINITO/1.jpg", title: "Vinito" },
    { thumb: "img/portfolio/MARIO/1.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MOCKA/3.jpg", title: "Mocka" }
  ];

  const ha=[
    { thumb: "img/portfolio/ALKAZAR/1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/2.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/3.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/4.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/5.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/6.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/7.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/8.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/9.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/10.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/11.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/12.jpg", title: "Alcazar Hotel" }

  ];

  const st=[
    { thumb: "img/portfolio/SPORTOTAL/1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/2.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/3.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/4.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/5.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/6.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/7.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/8.jpg", title: "Sport Total" },


  ];



  const imagesHA = ha.map(obj => obj.thumb.replace("-small", ""));
  const imagesST = st.map(obj => obj.thumb.replace("-small", ""));
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
          <h2>PORTFOLIO DE OBRAS</h2>
       
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
