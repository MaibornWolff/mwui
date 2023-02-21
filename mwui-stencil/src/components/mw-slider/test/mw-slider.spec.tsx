import { newSpecPage } from "@stencil/core/testing";
import { MwSlider } from "../mw-slider";

describe("mw-slider", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwSlider],
      html: `<mw-slider></mw-slider>`,
    });
    expect(page.root).toEqualHtml(`
    <mw-slider value="0">
    <mock:shadow-root>
     <div class="mw-slider-container">
       <div class="mw-slider">
         <div class="mw-slider-input-wrapper">
          <div class="mw-slider-input">
          <input max="100" min="0" step="1" type="range" value="0">
          <label id="mw-slider-range-value" style="transform: translateX(0px);">
               0
             </label>
           </div>
         </div>
       </div>
     </div>
    </mock:shadow-root>
  </mw-slider>
    `);
  });
});
