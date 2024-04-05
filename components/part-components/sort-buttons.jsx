import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import sortData from "@/components/part-components/data";

function SortButton() {
  return (
    <section
      className=" flex gap-3 py-4"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        marginTop: "1rem",
        marginLeft: "0.8rem",
        marginRight: "0.8rem",
      }}
    >
      {sortData.map((item, index) => (
        <Button
          key={index}
          className={buttonVariants({
            variant: "link",
            size: "",
          })}
        >
          {item}
        </Button>
      ))}
    </section>
  );
}

export default SortButton;
