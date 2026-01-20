# AI Assistant Instructions

## Context
This project uses the **DiceUI component library**, which provides pre-built, production-ready React components. The Data Table implementation follows DiceUI's patterns and conventions.

## Key Principles

### 1. DiceUI Components
- Always use DiceUI components from `src/components/` or `docs/registry/`
- Components in `src/components/data-table/` are direct copies from DiceUI docs
- Do not modify DiceUI component architecture unless explicitly requested
- Refer to `docs/` examples for proper usage patterns

### 2. Data Table System
The DiceUI Data Table uses **automatic filtering** through URL state:

- **Column Metadata Variants:**
  - `variant: "text"` - Renders text input filter
  - `variant: "multiSelect"` - Renders faceted dropdown filter
  - `variant: "select"` - Renders single-select dropdown
  - `variant: "range"` - Renders slider range filter
  - `variant: "date"` - Renders date picker

- **Automatic Filter Management:**
  - `useDataTable` hook manages all filter state via URL params
  - No manual `useQueryState` needed for filters
  - Filters automatically sync with `columnFilters` state
  - Pass full dataset to `useDataTable`, filtering is handled internally

- **Column Configuration:**
  ```typescript
  {
    id: "status",  // Explicit ID required for filtering
    accessorKey: "status",
    meta: {
      label: "Status",
      variant: "multiSelect",  // Tells toolbar which filter UI to use
      options: [
        { label: "Active", value: "active", icon: CheckCircle }
      ]
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    enableColumnFilter: true
  }
  ```

### 3. Common Patterns

**Column Sizing:**
```typescript
size: 32  // For compact columns (select, actions)
```

**Column Pinning:**
```typescript
initialState: {
  columnPinning: { right: ["actions"] }
}
```

**Badge with Icons:**
```typescript
<Badge variant="outline">
  <Icon className="h-3 w-3" />
  {text}
</Badge>
```

### 4. Don't Do This
- ❌ Don't manually filter data before passing to `useDataTable`
- ❌ Don't use manual `useQueryState` hooks for filter columns
- ❌ Don't create custom filter components (use column meta variants)
- ❌ Don't modify DiceUI component internals without good reason

### 5. Do This Instead
- ✅ Define column metadata with appropriate `variant`
- ✅ Pass full dataset to `useDataTable`
- ✅ Let `DataTableToolbar` render filters automatically
- ✅ Use `filterFn` for custom filtering logic if needed
- ✅ Use explicit column `id` for filterable columns

## File Organization
- Keep component files focused and manageable
- Use proper separation of concerns
- Follow existing patterns in the codebase
- Import from existing utility functions

## Styling
- Use Tailwind CSS classes
- Follow DiceUI design system conventions
- Maintain consistent spacing and sizing
- Use semantic color tokens (e.g., `text-muted-foreground`)

## When Asked to Add Features
1. Check if DiceUI already provides the component/pattern
2. Look at examples in `docs/registry/default/examples/`
3. Follow existing patterns in the codebase
4. Maintain type safety with TypeScript
5. Keep implementations simple and maintainable
