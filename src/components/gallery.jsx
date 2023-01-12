import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [gallery, setGallery] = useState("");

  const data = [
    { thumb: "img/portfolio/SPORTOTAL/ST1.jpg", title: "Sport Total" },
    { thumb: "img/portfolio/ALKAZAR/HA1.jpg", title: "Alcazar Hotel" },
    { thumb: "img/portfolio/BCSJ/BS1.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BISTREA/BI1.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BURGUE/BU1.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/VER/VE1.jpg", title: "VER" },
    { thumb: "img/portfolio/VINITO/VI1.jpg", title: "VINITO" },
    { thumb: "img/portfolio/MARIO/MA1.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/LIDER/LI1.jpg", title: "Lider" }
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

  const vi=[
    { thumb: "img/portfolio/VINITO/1.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/2.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/3.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/4.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/5.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/6.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/7.jpg", title: "VINITO" },
    { thumb: "img/portfolio/VINITO/8.jpg", title: "VINITO" },


  ];

  const bs=[
    { thumb: "img/portfolio/BCSJ/1.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/2.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/3.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/4.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/5.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/6.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/7.jpg", title: "Banco San Juan" },
    { thumb: "img/portfolio/BCSJ/8.jpg", title: "Banco San Juan" },


  ];

  const bi=[
    { thumb: "img/portfolio/BISTREA/1.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/2.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/3.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/4.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/5.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/6.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/7.jpg", title: "Café Bistrera" },
    { thumb: "img/portfolio/BISTREA/8.jpg", title: "Café Bistrera" },


  ];
  const bu=[
    { thumb: "img/portfolio/BURGUE/1.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/2.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/3.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/4.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/5.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/6.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/7.jpg", title: "La Burguesía" },
    { thumb: "img/portfolio/BURGUE/8.jpg", title: "La Burguesía" },


  ];
  const ve=[
    { thumb: "img/portfolio/VER/1.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/2.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/3.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/4.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/5.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/6.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/7.jpg", title: "VER" },
    { thumb: "img/portfolio/VER/8.jpg", title: "VER" },


  ];
  const ma=[
    { thumb: "img/portfolio/MARIO/1.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/2.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/3.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/4.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/5.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/6.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/7.jpg", title: "Mario Zinni" },
    { thumb: "img/portfolio/MARIO/8.jpg", title: "Mario Zinni" },


  ];
  const li=[
    { thumb: "img/portfolio/LIDER/1.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/2.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/3.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/4.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/5.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/6.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/7.jpg", title: "Lider" },
    { thumb: "img/portfolio/LIDER/8.jpg", title: "Lider" },
    

  ];


  const imagesHA = ha.map(obj => obj.thumb.replace("-small", ""));
  const imagesST = st.map(obj => obj.thumb.replace("-small", ""));
  const imagesVI = vi.map(obj => obj.thumb.replace("-small", ""));
  const imagesBS = bs.map(obj => obj.thumb.replace("-small", ""));
  const imagesBI = bi.map(obj => obj.thumb.replace("-small", ""));
  const imagesBU = bu.map(obj => obj.thumb.replace("-small", ""));
  const imagesLI = li.map(obj => obj.thumb.replace("-small", ""));
  const imagesMA = ma.map(obj => obj.thumb.replace("-small", ""));
  const imagesVE = ve.map(obj => obj.thumb.replace("-small", ""));
 // console.log(index)

  const openImageViewer = useCallback(gal=> {
    
    setIsViewerOpen(true);
    if(gal==="Alcazar Hotel")
    setGallery(imagesHA)
    else if(gal==="Sport Total"){
      setGallery(imagesST)
    }
    else if(gal==="VINITO"){
      setGallery(imagesVI)
    }
    else if(gal==="Banco San Juan"){
      setGallery(imagesBS)
    }
    else if(gal==="Café Bistrera"){
      setGallery(imagesBI)
    }
    else if(gal==="La Burguesía"){
      setGallery(imagesBU)
    }
    else if(gal==="Lider"){
      setGallery(imagesLI)
    }
    else if(gal==="Mario Zinni"){
      setGallery(imagesMA)
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
