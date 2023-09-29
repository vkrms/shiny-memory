import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  createStylesContext,
  useMultiStyleConfig,
  Spinner
} from '@chakra-ui/react'
import { useRef } from 'react';

import Lorem from 'react-lorem-component'

const [StylesProvider] = createStylesContext('Menu');


export default function Temp() {
  console.log('rerererendered')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const videoRef = useRef(null);
  const randomImage = 'https://picsum.photos/700/467'
  const srcRef = useRef(randomImage);

  function videoHandler(e) {
      const video = e.target
      const targetTime = 2.4;
      
      const rounded = Math.round(video.currentTime * 10) / 10;

      if (rounded == targetTime) {
        e.target.pause();
        handleOpen();
      }
  }

  function closeHandler() {
    onClose()
    videoRef.current.play();
  }

  function handleOpen() {
    onOpen()
    fetch(randomImage)
      .then(res => res.blob())
      .then(blob => {
          srcRef.current = URL.createObjectURL(blob)
          console.log({srcRef})
      })
  }

  const styles = useMultiStyleConfig('Modal', {
    variant: 'no-scroll',
  })

  return (
    <div className="my-thing">
      <h1>Hello, Igora</h1>

      <div className="map">
        <video className="bg-video" autoPlay muted loop>
          <source type='video/mp4' src="koi.mp4" />
        </video>   
        <video className="bg-video blend" autoPlay muted loop onTimeUpdate={videoHandler} ref={videoRef}>
          <source type='video/webm' src="demo.webm" />
        </video>        
      </div>

      <div className="btn-wrapper">
        <button className="link" onClick={handleOpen}>open</button>
      </div>

      <StylesProvider value={styles.modal}>
        <Modal isOpen={isOpen} onClose={closeHandler}>
          <ModalOverlay />
          <ModalContent sx={{'--chakra-sizes-md': '1024px'}}>
            <ModalHeader>Открой еще раз, и будет новый контент</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="modal-flex">
                <div className="modal__img-wrap">
                  <img src={srcRef.current} className="modal-img"/>
                  <Spinner color='red.500' className="modal-spinner"/>
                </div>
                <Lorem count={5} seed={Math.floor(Math.random() * 100)}/>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </StylesProvider>
    </div>
  )
}