# Front-nez

A modern web application built with Next.js for creating, managing, and sharing puzzle-based services and catalogs.

## Project Structure

### `/app`
Next.js application routes and layouts using the App Router.

- **`layout.js`** - Root layout component
- **`page.js`** - Home page
- **`/auth`** - Authentication routes
  - `login/` - User login page
  - `register-user/` - User registration page
  - `register-organization/` - Organization registration page
  - `forgot-password/` - Forgot password request page
  - `reset-password/` - Password reset page
- **`/dashboard`** - Protected dashboard routes
  - `home/` - Dashboard home
  - `catalogs/` - View catalogs
  - `create-puzzle/` - Create new puzzle
  - `list-puzzles/` - List all puzzles
  - `/puzzle` - Individual puzzle details, information, and results

### `/components`
Reusable React components organized by type.

- **Core Components**
  - `NavBar.jsx` - Navigation bar with styling
  - `ProtectedRoute.jsx` - Authentication guard component
  - `SearchBar.jsx` - Search functionality
  - `AdvancedSearchFilters.jsx` - Advanced filtering
  - `InfoTable.jsx` - Data table display
  - `Gallery.jsx` - Gallery view
  - `PuzzleRepresentation.jsx` - Puzzle visualization

- **`/buttons`** - Reusable button components
  - Action, Add, Back, Cancel, Clear, Close, Control, Create, Delete, Edit, Next, Remove, Save buttons

- **`/cards`** - Card-based components
  - `CatalogComponent.jsx` - Catalog card display
  - `PieceComponent.jsx` - Puzzle piece card
  - `RequirementComponent.jsx` - Requirement card
  - `ElementSelected.jsx` - Selected element display

- **`/createPuzzleTabsContent`** - Tab content for puzzle creation
  - Grid components for catalogs, pieces, requirements, carts, and joins

- **`/dragDrop`** - Drag and drop functionality
  - `DragNDropElement.jsx` - Draggable element
  - `DragNDropList.jsx` - Draggable list
  - `Workspace.jsx` - Drag and drop workspace

- **`/forms`** - Form components
  - Login, registration, forgot password, and reset password forms

- **`/modals`** - Modal dialogs
  - Create catalog, create piece, save service, and share modals

### `/services`
API integration and external service calls.

- `catalogAPI.js` - Catalog-related API endpoints

### `/styles`
Global styling and CSS modules.

- `globals.css` - Global styles

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start