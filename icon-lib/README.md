# @kunalkumar156/aura-icons

A set of beautiful, modern, and customizable **open-source React SVG icons**, crafted with love 💖 and built for seamless integration with **React** and **Next.js**.

---

## 🚀 Installation

Install the package using your preferred package manager:

```bash
npm install @kunalkumar156/aura-icons
# or
yarn add @kunalkumar156/aura-icons
```

---

## ✨ Usage

Import and use the icons in your React components:

```tsx
import { Bitcoin2 } from "@kunalkumar156/aura-icons";

function App() {
  return (
    <div>
      <Bitcoin2 width={32} height={32} color="red" />
    </div>
  );
}
```

---

## 🎨 Customization

Each icon is a fully customizable React SVG component. You can style them using:

### ✅ Props

```tsx
<Bitcoin2 width={40} height={40} color="blue" />
```

### ✅ Tailwind / `className`

```tsx
<Bitcoin2 className="w-10 h-10 text-purple-600" />
```

All icons use `stroke="currentColor"` and `fill="currentColor"` under the hood — so color will adapt based on your styles.

---

## 📦 Tree-shaking Friendly

Only import the icons you need — no extra bloat. Every icon is its own file/component.

---

## 🧪 Local Testing

If you’re working on the package locally:

- Run `npm run generate` to generate icon components.
- Run `npm run build` to compile the library.
- Link it locally using `npm link`, and then use it in another project with:

```bash
npm link @kunalkumar156/aura-icons
```

---

## 🤝 Contributing

Want to add more icons or improve the library?

- Submit a PR
- Or contact [@kunalkumar156](https://github.com/kunalkumar156)

---

## 📜 License

MIT © Kishor Kunal

---
