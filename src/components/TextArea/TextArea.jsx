import * as React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function TextArea({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <TextareaAutosize
        defaultValue={children}
        className=" w-full text-sm font-normal bg-transparent  leading-normal  resize-none"
        aria-label="empty textarea"
        placeholder="Empty"
        cols={100}
        disabled
        data-testid="text-area"
      />
    </div>
  );
}
