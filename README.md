# PokeAPI to SQL Data Fetcher

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)](https://bun.sh/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?logo=sqlite&logoColor=white)](https://sqlite.org/)

A robust and efficient tool for fetching Pokemon data from the [PokeAPI](https://pokeapi.co/) and storing it in a structured SQLite database using Drizzle ORM. Perfect for developers who need offline access to Pokemon data or want to build applications with Pokemon information.

## 🚀 Features

- **Fast Data Fetching**: Efficiently retrieves Pokemon data from PokeAPI
- **Structured Storage**: Stores data in a well-organized SQLite database
- **Type Safety**: Built with TypeScript for enhanced development experience
- **Database Management**: Powered by Drizzle ORM for robust database operations
- **Modern Runtime**: Utilizes Bun for superior performance
- **Code Quality**: Includes ESLint configuration for consistent code style

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Bun](https://bun.sh/) (latest version recommended)
- [Node.js](https://nodejs.org/) (for compatibility)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sain-Biswas/pokeapi-to-sql-data-fetcher.git
   cd pokeapi-to-sql-data-fetcher
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file (if it exists) or create a new one
   cp .env.example .env
   # Edit the .env file with your configuration
   ```

## 🚀 Usage

### Basic Usage

Run the application to start fetching Pokemon data:

```bash
bun start
```

### Development

Start the application in development mode:

```bash
bun run dev
```

### Database Operations

The project includes several database management commands:

```bash
# Open Drizzle Studio for database inspection
bun run db:studio

# Push schema changes to the database
bun run db:push

# Generate migration files
bun run db:generate

# Run database migrations
bun run db:migrate
```

### Code Quality

Maintain code quality with the included linting tools:

```bash
# Run ESLint
bun run lint

# Auto-fix linting issues
bun run lint:fix
```

## 📁 Project Structure

```
pokeapi-to-sql-data-fetcher/
├── src/
│   ├── constants/          # Application constants and environment variables
│   ├── database/           # Database configuration and schema
│   │   └── schema/         # Drizzle schema definitions
│   └── index.ts           # Main application entry point
├── drizzle/               # Generated migration files
├── temp/                  # Temporary files
├── drizzle.config.ts      # Drizzle ORM configuration
├── eslint.config.js       # ESLint configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## 🔧 Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory:

```env
DATABASE_URL=./pokemon.db
```

## 📊 Database Schema

This project uses Drizzle ORM to manage the SQLite database schema. The schema files are located in `src/database/schema/` and define the structure for storing Pokemon data efficiently.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and linting rules
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/Sain-Biswas/pokeapi-to-sql-data-fetcher)
- **PokeAPI**: [Official Documentation](https://pokeapi.co/)
- **Drizzle ORM**: [Documentation](https://orm.drizzle.team/)
- **Bun**: [Official Website](https://bun.sh/)

## 👤 Author

**Sain-Biswas**

- GitHub: [@Sain-Biswas](https://github.com/Sain-Biswas)

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the comprehensive Pokemon data
- The Drizzle team for the excellent ORM
- The Bun team for the fast JavaScript runtime
- The Pokemon Company for creating the amazing world of Pokemon

---

<div align="center">
  <strong>Built with ❤️ for Pokemon enthusiasts and developers</strong>
</div>
