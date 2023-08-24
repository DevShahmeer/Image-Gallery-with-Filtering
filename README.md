# Image Gallery with Unsplash API

This is a simple React app that fetches and displays images from the Unsplash API based on categories.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-gallery-unsplash.git
   ```

2. Navigate to the project directory:
   ```bash
   cd image-gallery-unsplash
   ```

3. Install the dependencies using Yarn:
   ```bash
   yarn install
   ```

4. Replace `'YOUR_UNSPLASH_ACCESS_KEY'` in `src/components/ImageGallery.js` with your actual Unsplash API access key. The line to replace is:
   ```js
   const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your actual Unsplash access key
   ```

5. Start the development server:
   ```bash
   yarn dev
   ```

6. Open your browser and go to `http://localhost:3000` to see the app in action.

## Technologies Used

- [React](https://reactjs.org/)
- [axios](https://axios-http.com/)
- [Unsplash API](https://unsplash.com/developers)

## Folder Structure

```
image-gallery-unsplash/
├── src/
│   ├── components/
│   │   ├── ImageGallery.jsx
|   |   ├── FilterButtons.jsx
│   │   └── ...
│   │── App.css
│   ├── App.jsx
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── ...
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to follow the provided instructions to replace the `'YOUR_UNSPLASH_ACCESS_KEY'` placeholder with your actual Unsplash API access key.
