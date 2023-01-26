import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { MwAvatar } from "./mw-avatar";
import { SizeEnum } from "../../shared/models/enums/size.enum";

describe("GIVEN MwAvatar", () => {
  const setup = async (
    { src, icon, alt, size }: Pick<MwAvatar, "src" | "icon" | "alt" | "size"> = {
      size: SizeEnum.MEDIUM,
    },
  ) => {
    return await newSpecPage({
      components: [MwAvatar],
      template: () => <mw-avatar src={src} icon={icon} alt={alt} size={size}></mw-avatar>,
    });
  };

  it("SHOULD render MwAvatar", async () => {
    const page = await setup({
      size: "medium",
    });
    expect(page.root).toBeTruthy();
  });

  it("SHOULD render an icon WHEN icon value is passed", async () => {
    const page = await setup({
      size: "medium",
      icon: "avatar",
    });
    expect(page.root.shadowRoot.querySelector("mw-icon")).not.toBeNull();
  });

  it("SHOULD render an image WHEN src value is passed", async () => {
    const page = await setup({
      size: SizeEnum.MEDIUM,
      src: "example.com",
      alt: "alt-text",
    });

    const image = page.root.shadowRoot.querySelector("img");

    expect(image).not.toBeNull();
    expect(image.getAttribute("alt")).toEqual("alt-text");
  });

  it("SHOULD use first letter of alt WHEN no src or icon value is passed", async () => {
    const page = await setup({
      size: SizeEnum.MEDIUM,
      alt: "alt-text",
    });
    const fallback = page.root.shadowRoot.querySelector(".fallback");

    expect(fallback).not.toBeNull();
    expect(fallback.innerHTML).toEqual("a");
  });
});
