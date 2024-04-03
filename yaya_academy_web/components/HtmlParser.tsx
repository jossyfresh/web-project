import { home_data_entry_type } from "@/app/(client)/data/dumy";
import React from "react";
import parse from "html-react-parser";

function HtmlParser({
  data,
  fontSize = "md",
  fontWeight = "normal",
}: {
  data: home_data_entry_type;
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  fontWeight?: "light" | "bold" | "extrabold" | "extralight" | "normal";
}) {
  const responsive_text_size_mapper = {
    sm: "sm",
    md: "sm",
    lg: "md",
    xl: "lg",
    "2xl": "xl",
  };
  return data["html"] == null ? (
    <div
      className={`lg:text-${fontSize} text-${responsive_text_size_mapper[fontSize]} flex-1 text-center font-${fontWeight}`}
    >
      {data["en"]}
    </div>
  ) : (
    parse(data["html"]!)
  );
}

export default HtmlParser;
