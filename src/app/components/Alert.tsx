import "@/assets/componentstyle/alert.css"

import React from 'react';  
import { useState } from 'react';  
  
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {  
  const handleClose = () => {  
    onClose();  
  };  
  
  return (  
    <div className={`modal ${isOpen ? 'open' : ''}`}>  
      <div className="modal-content">
        {children}  
      </div>  
    </div>  
  );  
};  
  
export default Modal;