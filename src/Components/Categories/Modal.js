import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import ReactPortal from "../ReactPortal";
function Modal({ children, handleClose, isOpen }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered

        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        <div
          onClick={handleClose}
          className="fixed h-screen overflow-hidden top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-95"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative min-h-max flex flex-col items-center max-w-lg gap-4  rounded-md shadow-2xl  dark:bg-bgPrimary dark:text-gray-100">
              <button className="absolute top-6 right-6" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-100"
                >
                  <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
              </button>

              {children}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </ReactPortal>
  );
}

export default Modal;
