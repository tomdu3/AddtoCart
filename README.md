# Add to Cart Application 🛍️
[HTML | CSS| JS | Tailwind| React] Add to Cart Task Using Modal

![Responsive Web Site Screenshot](./docs/amiresponsive.png)

This is a simple yet e-commerce application built with React, Tailwind CSS, and JavaScript.  This app demonstrates a streamlined add-to-cart experience using a modal interface. It fetches product data from the [Fake Store API](https://fakestoreapi.com/).

## Features ✨

*   **Product Display:**  Displays products fetched from the Fake Store API, showing title, image, price, and an "Add to Cart" button.
*   **Add to Cart:** Adds selected products to a shopping cart.  Displays an alert if the item is already in the cart.
*   **Responsive Design:**  Adapts seamlessly to various screen sizes.
*   **Cart Modal:** Opens a modal to view cart items.
*   **Remove from Cart:**  Allows users to remove items from the cart within the modal.
*   **Cart Count:** Displays the number of items currently in the cart in the navbar.

## Live Demo 🚀

[tom-cart.netlify.app](https://tom-cart.netlify.app)


## Installation 💻

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tomdu3/AddtoCart.git
    ```

2.  **Navigate to the directory:**

    ```bash
    cd AddtoCart
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```
    or
    ```bash
    npm run dev
    ```

## Technology Stack & Tools 🛠️

*   **Frontend Framework:** ReactJS
*   **Styling:** Tailwind CSS
*   **API:** Fake Store API ([https://fakestoreapi.com/](https://fakestoreapi.com/))


## Code Structure 🏗️

The application is structured into several components:

*   **App.jsx:** The main application component, handling state and routing.
*   **Navbar.jsx:** Displays the cart count and opens the cart modal.
*   **ProductsTable.jsx:** Displays the list of products.
*   **ProductCard.jsx:** Individual product component for rendering each product.
*   **CartModal.jsx:** The modal component for displaying and managing cart items.
*   **Alert.jsx:** A reusable component to display success or error messages.

## Acknowledgements 🙏

[Favicon.io](https://favicon.io/) - Free favicon generator used to create the site's favicon icon

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Enhancements 🚀

*   Improved error handling for API requests.
*   More robust quantity management in the cart (allow direct input).
*   Adding checkout functionality.
*   Integration with a payment gateway.
*   Implementing a more sophisticated state management solution.

## Copyright Notice
Copyright © 2025 Tomislav Dukez. All rights reserved.