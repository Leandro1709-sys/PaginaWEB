import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [gallery, setGallery] = useState("");

  const data = [
    { thumb: "img/portfolio/BCSJ/BS1.jpg", title: "BCSJ",sub: "bolsa de comercio de San Juan" },
    { thumb: "img/portfolio/BITREA/BI1.jpg", title: "BITREA",sub: "café" },
    { thumb: "img/portfolio/ALKAZAR/HA1.jpg", title: "ALKAZAR",sub: "hotel" },
    { thumb: "img/portfolio/LIDERAR/LI1.jpg", title: "LIDERAR",sub: "oficinas" },
    { thumb: "img/portfolio/MAPAL/MA1.jpg", title: "MAPAL",sub: "oficinas" },
    { thumb: "img/portfolio/MOKKA/MO1.jpg", title: "MOKKA", sub: "mza bar café" },
    { thumb: "img/portfolio/SPORTOTAL/SP1.jpg", title: "SPORT TOTAL",sub: "local comercial" },
    { thumb: "img/portfolio/VER/VE1.jpg", title: "VER",sub: "local comercial" },
    { thumb: "img/portfolio/VINITO/VI1.jpg", title: "VINITO",sub: "bar" },
   
  ];

  const ha=[
    { thumb: "img/portfolio/ALKAZAR/1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/2.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/3.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/4.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/5.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/ALKAZAR/6.jpg", title: "Alcazar Hotel" },
  ];

  const st=[
    { thumb: "img/portfolio/SPORTOTAL/1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/2.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/3.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/4.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/SPORTOTAL/5.jpg", title: "Sport Total" },
  ];

  const vi=[
    { thumb: "img/portfolio/VINITO/1.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/2.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/3.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/4.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/5.jpg", title: "VINITO" },
  ];

  const bs=[
    { thumb: "img/portfolio/BCSJ/1.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/2.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/3.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/4.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/5.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/6.jpg", title: "Banco San Juan" },
  ];

  const bi=[
    { thumb: "img/portfolio/BITREA/1.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/2.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/3.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/4.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/5.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/6.jpg", title: "Café Bitrera" },
    { thumb: "img/portfolio/BITREA/7.jpg", title: "Café Bitrera" },
  ];
  
  const mo=[
    { thumb: "img/portfolio/MOKKA/1.jpg", title: "MOKKA" },
    { thumb: "img/portfolio/MOKKA/2.jpg", title: "MOKKA" },
    { thumb: "img/portfolio/MOKKA/3.jpg", title: "MOKKA" },
    { thumb: "img/portfolio/MOKKA/4.jpg", title: "MOKKA" },
    { thumb: "img/portfolio/MOKKA/5.jpg", title: "MOKKA" },
  ];

  const ve=[
    { thumb: "img/portfolio/VER/1.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/3.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/4.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/5.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/6.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/7.png", title: "VER" },
  ];

  const ma=[
    { thumb: "img/portfolio/MAPAL/1.jpg", title: "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/2.jpg", title: "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/3.jpg", title: "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/4.jpg", title:  "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/5.jpg", title:  "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/6.jpg", title: "Mapal oficinas"},
    { thumb: "img/portfolio/MAPAL/7.jpg", title:  "Mapal oficinas" },
    { thumb: "img/portfolio/MAPAL/8.png", title:  "Mapal oficinas" },


  ];
  const li=[
    { thumb: "img/portfolio/LIDERAR/1.jpg", title: "Liderar" },
    { thumb: "img/portfolio/LIDERAR/2.jpg", title: "Liderar" },
    { thumb: "img/portfolio/LIDERAR/3.jpg", title: "Liderar" },
    { thumb: "img/portfolio/LIDERAR/4.jpg", title: "Liderar" },
    { thumb: "img/portfolio/LIDERAR/5.jpg", title: "Liderar" },
    { thumb: "img/portfolio/LIDERAR/6.jpg", title: "Liderar" },

  ];


  const imagesHA = ha.map(obj => obj.thumb);
  const imagesST = st.map(obj => obj.thumb);
  const imagesVI = vi.map(obj => obj.thumb);
  const imagesBS = bs.map(obj => obj.thumb);
  const imagesBI = bi.map(obj => obj.thumb);
  const imagesMO = mo.map(obj => obj.thumb);
  const imagesLI = li.map(obj => obj.thumb);
  const imagesMA = ma.map(obj => obj.thumb);
  const imagesVE = ve.map(obj => obj.thumb);

 

  const openImageViewer = useCallback(gal=> {
    
    setIsViewerOpen(true);
    if(gal==="ALKAZAR")
    setGallery(imagesHA)
    else if(gal==="SPORT TOTAL"){
      setGallery(imagesST)
    }
    else if(gal==="VINITO"){
      setGallery(imagesVI)
    }
    else if(gal==="BCSJ"){
      setGallery(imagesBS)
    }
    else if(gal==="BITREA"){
      setGallery(imagesBI)
    }
    
    else if(gal==="LIDERAR"){
      setGallery(imagesLI)
    }
    else if(gal==="MAPAL"){
      setGallery(imagesMA)
    }
    else if(gal==="MOKKA"){
      setGallery(imagesMO)
    } 
    else if(gal==="VER"){
      setGallery(imagesVE)
    } 


  },   );

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setGallery([])
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>PORTFOLIO</h2>
       
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb, sub }, index) => (
              
              <div key={index} onClick={() => openImageViewer(title)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                      <h6>{sub}</h6>
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
