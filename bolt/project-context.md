# Project Context

## Project Overview
This is a DiceUI-based React application showcasing advanced UI components, particularly the Data Table component with filtering, sorting, and pagination capabilities.

## Key Technologies
- React 19
- TypeScript
- Vite
- TanStack Table
- Tailwind CSS
- DiceUI Component Library
- Radix UI Primitives
- Lucide Icons

## Project Structure

### Main Application
- `src/pages/` - Application pages (Home, Members)
- `src/components/` - Reusable components
  - `src/components/data-table/` - DiceUI Data Table components
  - `src/components/members/` - Member-specific components
  - `src/components/ui/` - Base UI components
- `src/data/` - Mock data
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/types/` - TypeScript type definitions

### Important Files
- `src/pages/Members.tsx` - Team members page with data table
- `src/components/members/members-columns.tsx` - Data table column definitions
- `src/components/data-table/data-table.tsx` - Main data table component
- `src/components/data-table/data-table-toolbar.tsx` - Toolbar with filters
- `src/hooks/use-data-table.ts` - Data table state management hook

## Key Features

### Data Table
- Automatic filtering via URL state
- Multi-select faceted filters for Department and Status
- Text search for Name and Email
- Column sorting and visibility control
- Row selection
- Pagination
- Column pinning (actions column pinned to right)
- Responsive design

### Filter System
The DiceUI Data Table uses automatic filtering based on column metadata:
- `variant: "text"` - Text input filter
- `variant: "multiSelect"` - Faceted multi-select dropdown
- Filters sync with URL query parameters automatically
- No manual filter management needed

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
npm run lint:fix     # Fix linting issues
npm run typecheck    # Check TypeScript types
```

## Recent Changes
- Implemented DiceUI Data Table with proper filtering system
- Added column metadata with variants for automatic filter rendering
- Configured multi-select faceted filters for Department and Status
- Added icons to badges and filter options
- Removed manual filter management (useDataTable handles it)
- Added column pinning for actions column
- Set proper column sizing (32px for select and actions)
