# transitionDelay

## 1. Getting Started

#### 1.1. Installation

The simplest method is to copy paste this snippet just before your closing `</body>` tag.

```html
<script src="http://eddydezuraud.fr/assets/transitionDelay/transitionDelay.js"></script>
```

The simplest method is to copy paste this snippet just before your closing <body>


## 2. Configuration

#### 2.1. Practical Example
```html
<-- Add auto increment transition delay to this elements ->
<div class="items_transition">Hello</div>
<div class="items_transition">World</div>
<div class="items_transition">Let's</div>
<div class="items_transition">Make</div>
<div class="items_transition">Nice transition !</div>
```

```js
// transitionDelay(elements, time_between_each_delay, first_delay_time);
transitionDelay($('.items_transition'), 0.1, 0);


```
