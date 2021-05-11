# How to Contribute

## Styling

We are using BEM convention to organize our styles.

As Mark McDonnell says in **Maintainable CSS with BEM**, BEM stands for “Block, Element, Modifier” and is a simple but effective way to group together different components/widgets. You can read more here: https://www.integralist.co.uk/posts/bem/#4


**Example**

Suppose you have block form with modifiers theme: `xmas` and `simple: true` and with elements input and submit, and element submit with its own modifier disabled: true for not submitting form while it is not filled:

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

More info about BEM convention: http://getbem.com/

## Design Architecture

We are using Atomic Design convention to organize components ecosystem.

So let's have some concepts clear here:

- **Atom** – the basic, easily reusable building block. For example label or button. `src/components/atoms/**`
- **Molecule** – a group of atoms bonded together. Designed to do one thing. For example a single form field. `src/components/molecules/**`
- **Organism** – a group of molecules (or even atoms) to create a more complex part of your application (for example, form). `src/components/organisms/**`
- **Page** – the instance of a template. `src/pages/**`
- **Template** – a template is just a layout. `src/layouts/**`

More info about Atomic Design convention: https://tsh.io/blog/atomic-design-explained-by-ryan-reynolds/

**Ground rules to play**

- All of molecules should be built using atoms only. No outsider components.
- An atom should be easy to predict its behavior. Never override any atom behavior inside other components.
- Molecules and atoms should not access the store directly. They only recieve props from organisms.

## Design Color Palette

Using a grayscale plain and simple.

![Grayscale color Palette](docs/img/grayscale-scheme.png)
