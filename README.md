# 🛠️ Admin Panel

This is a simple admin panel built with React for managing products.
It includes basic authentication, protected routes, and product CRUD operations.

🔗 **Live Demo**: [simple-adminnn-panel.netlify.app](https://simple-adminnn-panel.netlify.app)

## Features

- **Protected Routes** for admin-only access
- **CRUD Operations**: List, Add, Delete, and Edit products
- Fetching product data from external API using `createAsyncThunk` and `axios`
- Persistent product data via `localStorage`
- Product **search and filtering**
- Performance optimization using `React.memo`, `useMemo`

## Tech Stack

- **React** (with Vite for fast development/build)
- **Redux Toolkit** for state management
- **React Router v6** for client-side routing
- **Axios** for API requests
- **UUID** for generating unique IDs
- **LocalStorage** for data persistence
