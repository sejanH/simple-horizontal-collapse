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
<section class="collapse">
  <button class="panel is-active" type="button" aria-pressed="true">
    <span class="panel__title">Overview</span>
    <div class="panel__body">Content</div>
  </button>
  <button class="panel" type="button" aria-pressed="false">
    <span class="panel__title">Details</span>
    <div class="panel__body">More content</div>
  </button>
</section>
```

```js
import { createHorizontalCollapse } from "simple-horizontal-collapse";

createHorizontalCollapse();
```

## Options

```js
createHorizontalCollapse({
  root: ".collapse", // selector, element, or list of elements
  panelSelector: ".panel",
  activeClass: "is-active",
  allowArrowKeys: true,
});
```

## Notes

- The CSS handles horizontal behavior on desktop and vertical accordion behavior on mobile.
- Use `type="button"` for panel buttons to avoid unintended form submits.
