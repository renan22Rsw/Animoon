"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import SubTitles from "../Titles/SubTitles";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  p: 4,
};

export default function ModalContainer() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SubTitles>Pictures</SubTitles>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex justify-center">
              <Image
                src={
                  "https://cdn.myanimelist.net/images/anime/1922/134324l.jpg"
                }
                width={300}
                height={300}
                alt="modal-image"
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
