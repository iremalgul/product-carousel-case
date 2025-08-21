# Product Carousel Case for E-Bebek

This project implements a **dynamic product carousel** for the [E-Bebek](https://www.e-bebek.com/) website. It is designed to display recommended products, allow users to mark favorites, and maintain user preferences across sessions.

## Features

- **Dynamic Product Loading**: Fetches product data from a JSON endpoint.
- **Favorites Management**: Users can click the heart icon to mark products as favorites. Favorites are stored in local storage.
- **Persistent Preferences**: Favorites remain saved even after page reloads.
- **Discount & Price Display**: Shows original prices, discounted prices, and percentage discounts.
- **Homepage-only Execution**: The script runs only on the E-Bebek homepage to prevent conflicts.
- **New Tab Navigation**: Clicking on a product opens its page in a new tab.

## Technologies Used

- JavaScript (ES6)
- jQuery
- HTML / CSS
- Local Storage API

## Usage on E-Bebek

1. Include the script in the homepage.
2. Ensure there is a container element where the carousel should be rendered.
3. The script automatically fetches product data, builds the carousel, and handles favorites.

## Notes

- Only works on the homepage (`/` path) of E-Bebek.
- Favorites are stored in the browser's `localStorage`, so they are domain-specific.
- Ensure the JSON endpoint for products is accessible.

---

**Author:** Irem Algül  
**Project:** Product Carousel Case for E-Bebek
