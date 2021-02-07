import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import NavBar from "./Navbar.jsx";


function App() {
  useEffect(() => {
    axios.get('/api/get')
      .then(res => setState(JSON.parse(res.data.body)))
  }, []);

  
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  const [state, setState] = useState([])
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <NavBar onChange={(value) => setSearchTerm(value)} />
      <div>
        <Gallery photos={state.filter((val) => {
          if(searchTerm == ""){
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                caption="Sid"
                views={state.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: "Description: " + x.title + " || Keys are: " + x.wordset,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <Footer />
    </div>
  );
}
export default App;
