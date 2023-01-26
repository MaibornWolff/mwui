import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwCardImage } from "./mw-card-image";
import { MwCard } from "../mw-card/mw-card";

describe("GIVEN MwCardImage", () => {
  const setup = async (
    { src, alt }: Pick<MwCardImage, "src" | "alt"> = {
      src: "",
      alt: "",
    },
  ) => {
    return await newSpecPage({
      components: [MwCardImage],
      template: () => <mw-card-image src={src} alt={alt}></mw-card-image>,
    });
  };

  it("SHOULD render MwCardImage", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD set src & alt on MwCardImage WHEN values are given", async () => {
    const src = "example-img.png";
    const alt = "alt-text";
    const page = await setup({
      src,
      alt,
    });
    expect(page.root.shadowRoot.querySelector("img").getAttribute("alt")).toEqual(alt);
    expect(page.root.shadowRoot.querySelector("img").getAttribute("src")).toEqual(src);
  });

  it("SHOULD set position class single WHEN only part of MwCard", async () => {
    const page = await newSpecPage({
      components: [MwCardImage, MwCard],
      template: () => (
        <mw-card>
          <mw-card-image></mw-card-image>
        </mw-card>
      ),
    });
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).toHaveClass("single");
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).not.toHaveClasses(["top", "bottom"]);
  });

  it("SHOULD set position class bottom WHEN bottom part of MwCard", async () => {
    const page = await newSpecPage({
      components: [MwCardImage, MwCard],
      template: () => (
        <mw-card>
          <div></div>
          <mw-card-image></mw-card-image>
        </mw-card>
      ),
    });
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).toHaveClass("bottom");
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).not.toHaveClasses(["top", "single"]);
  });

  it("SHOULD set position class top WHEN bottom part of MwCard", async () => {
    const page = await newSpecPage({
      components: [MwCardImage, MwCard],
      template: () => (
        <mw-card>
          <mw-card-image></mw-card-image>
          <div></div>
        </mw-card>
      ),
    });
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).toHaveClass("top");
    expect(page.root.querySelector("mw-card-image").shadowRoot.querySelector(".card-image")).not.toHaveClasses(["single", "bottom"]);
  });
});
