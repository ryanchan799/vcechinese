import React from "react";
import TextLogo from "./TextLogo";
import { Divider } from "../_assets/Icons";
import {
  HEADER_BAR_WIDTHS,
  HEADER_BAR_HEIGHT,
  PAGE,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";

export default function HeaderBar(props: {
  page: PAGE;
  caption: string;
  rhs: React.JSX.Element;
  sidebar?: React.JSX.Element;
}) {
  return (
    <div className="flex flex-col w-full items-center overflow-visible">
      <div
        className={HEADER_BAR_WIDTHS.get(props.page)}
        style={{ height: HEADER_BAR_HEIGHT }}
      >
        <div className="w-full">
          <div>
            <div className="flex flex-row items-center bg-white">
              <TextLogo
                heading={props.page.toString()}
                caption={props.caption}
              />
              {props.rhs}
            </div>
          </div>
          {props.sidebar}
        </div>
      </div>
      <Divider />
    </div>
  );
}
