import React, { useState } from "react";
import Board from "../Board/Board";

export const NotionKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};
