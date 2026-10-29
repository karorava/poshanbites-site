/* =========================================================
   PoshanBites — snack list
   This is the only file to edit when a price, ingredient or
   snack changes. Each snack is one block between { and }.
   Snacks appear on the page in the order they are listed here.

   - group:     "savoury" or "sweet" (decides which list it shows in)
   - price:     a number only, no ₹ sign
   - allergens: DRAFT until confirmed by the owner
   - image:     leave as "" to show a coloured tile with the name instead
   - imageAlt:  a short description of the photo, for blind visitors
   ========================================================= */

const PRODUCTS = [
  {
    name: "Green Goodness Bites",
    group: "savoury",
    packSize: "250 g",
    price: 245,
    ingredients: "Spinach, sooji, oats, wheat flour, desi ghee",
    allergens: "wheat/gluten, milk (ghee)",
    image: "images/products/green-goodness-bites.jpg",
    imageAlt: "Heart-shaped green spinach bites in a wooden bowl (illustration)",
  },
  {
    name: "Nutty Oat Cookies",
    group: "savoury",
    packSize: "250 g",
    price: 365,
    ingredients: "Oats, wheat flour, nuts & seeds, date powder, desi ghee",
    allergens: "wheat/gluten, tree nuts, seeds, milk (ghee)",
    image: "images/products/nutty-oat-cookies.jpg",
    imageAlt: "Round oat cookies with nuts on a plate (illustration)",
  },
  {
    name: "Masoor Crunch Nachos",
    group: "savoury",
    packSize: "250 g",
    price: 460,
    ingredients: "Masoor dal, rice flour, desi ghee",
    allergens: "milk (ghee)",
    image: "images/products/masoor-crunch-nachos.jpg",
    imageAlt: "Triangle-shaped masoor dal nachos in a bowl (illustration)",
  },
  {
    name: "Beetroot Rainbow Crackers",
    group: "savoury",
    packSize: "250 g",
    price: 330,
    ingredients: "Wheat flour, gram flour, rice flour, fresh beetroot purée, desi ghee",
    allergens: "wheat/gluten, milk (ghee)",
    image: "images/products/beetroot-rainbow-crackers.jpg",
    imageAlt: "Star-shaped pink beetroot crackers in a bowl (illustration)",
  },
  {
    name: "Coco-Nutty Laddoo",
    group: "sweet",
    packSize: "250 g",
    price: 240,
    ingredients: "Coconut, desi ghee, milk, dry fruits, date powder",
    allergens: "milk, tree nuts",
    image: "images/products/coco-nutty-laddoo.jpg",
    imageAlt: "Coconut-coated laddoos in a bowl (illustration)",
  },
  {
    name: "Power Nut Laddoo",
    group: "sweet",
    packSize: "250 g",
    price: 485,
    ingredients: "Dry fruits, makhana, homemade peanut butter, dates",
    allergens: "peanuts, tree nuts",
    image: "images/products/power-nut-laddoo.jpg",
    imageAlt: "Dry fruit and nut laddoos in a bowl (illustration)",
  },
  {
    name: "Royal Moong Delight",
    group: "sweet",
    packSize: "250 g",
    price: 265,
    ingredients: "Moong dal, dry fruits, date powder, milk, ghee",
    allergens: "milk, tree nuts",
    image: "images/products/royal-moong-delight.jpg",
    imageAlt: "Moong dal squares topped with dry fruits on a plate (illustration)",
  },
];
