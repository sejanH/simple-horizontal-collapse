# simple-horizontal-collapse

Simple lightweight horizontal collapse using vanilla JS.

## Install

```bash
npm install simple-horizontal-collapse
```

## Usage

```html
<link rel="stylesheet" href="node_modules/simple-horizontal-collapse/styles.css" />
```

```html
<section class="shc-collapse">
  <div class="shc-panel is-active" aria-pressed="true">
    <span class="shc-panel__title">Overview</span>
    <div class="shc-panel__body">Content</div>
  </div>
  <div class="shc-panel" aria-pressed="false">
    <span class="shc-panel__title">Details</span>
    <div class="shc-panel__body">More content</div>
  </div>
</section>
```

```js
import { createHorizontalCollapse } from "simple-horizontal-collapse";
import "simple-horizontal-collapse/styles.css";

createHorizontalCollapse();
```

Note: Importing CSS in JS requires a bundler (Vite/Webpack/Parcel). Without a bundler, use the `<link>` tag above.

## Options

```js
createHorizontalCollapse({
  root: ".shc-collapse", // selector, element, or list of elements
  panelSelector: ".shc-panel",
  activeClass: "is-active",
  allowArrowKeys: true,
});
```

## Notes

- The CSS handles horizontal behavior on desktop and vertical accordion behavior on mobile.
- If you use `<button>` elements for panels, set `type="button"` to avoid unintended form submits.
- All classes are prefixed with `shc-` to avoid Bootstrap conflicts.

## Importing CSS (CSS/SCSS)

```css
@import "simple-horizontal-collapse/styles.css";
```

```scss
@use "simple-horizontal-collapse/styles.css";
```
