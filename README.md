# viz-types

[![npm version](https://badge.fury.io/js/viz-types.svg)](https://badge.fury.io/js/viz-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript package that provides common type definitions for the VizHub ecosystem. This package serves as the foundation for type safety and consistency across all VizHub projects.

## Overview

`viz-types` is a types-only package - it exports TypeScript type definitions without any JavaScript runtime code, making it extremely lightweight. It defines the core data structures used throughout the VizHub ecosystem, ensuring type consistency across all dependent projects.

## Installation

```bash
npm install viz-types
```

## Usage

Import the types you need in your TypeScript files:

```typescript
import { VizFile, VizFiles, VizContent, VizId } from 'viz-types';

// Use the types in your code
const myFile: VizFile = {
  name: 'index.html',
  text: '<body>Hello World</body>'
};
```

## Core Types

The package provides several core types:

- **FileCollection**: A simple key-value collection of files
- **VizFiles**: A collection of VizFile objects with unique IDs
- **VizFile**: Represents a single file with name and content
- **VizId**: Unique identifier for a visualization
- **VizContent**: The complete content of a visualization
- **VizLicense**: SPDX license identifier

### FileCollection

A simple collection of files where:
- Keys are file names (e.g., "index.html")
- Values are file contents (e.g., "<body>Hello</body>")
- Used for scenarios requiring simple file operations without the complexity of a full VizFile structure

```typescript
type FileCollection = Record<string, string>;
```

### VizFiles

A collection of VizFile objects where:
- Keys are unique file IDs (VizFileId), not file names or array indices
- This design simplifies Operational Transformation with ShareDB when files are renamed or deleted
- The file ID remains stable even when the file name changes or files are added/deleted

```typescript
type VizFiles = {
  [fileId: VizFileId]: VizFile;
};
```

### VizFileId

A unique identifier for a file:
- Represented as a random string
- Provides stability for tracking files even when they're renamed or moved

```typescript
type VizFileId = string;
```

### VizFile

Represents a single file with:
- **name**: The file name (e.g., "index.html")
- **text**: The text content of the file (e.g., "<body>Hello</body>")

```typescript
type VizFile = {
  name: string;
  text: string;
};
```

### VizId

A unique identifier for a visualization:
- Common between Info and Content for a given visualization
- Implemented as a UUID v4 string with dashes removed (for ease of URL copying)

```typescript
type VizId = string;
```

### VizLicense

The license associated with a visualization:
- Represented as an SPDX License Identifier
- References the "Identifier" column in the SPDX license list (https://spdx.org/licenses/)

```typescript
type VizLicense = string;
```

### VizContent

The complete content of a visualization:
- **id**: The VizId that this content is associated with
- **files**: The VizFiles in the visualization
- **title**: The title of the visualization (same as Info.title)
  - Tracked here so it can be versioned
  - Restoring an old version should restore its old title
  - Optional field
- **height**: The customized height of the visualization in pixels
  - Not defined if the user hasn't customized it
  - If not defined, the default height is used
  - Optional field
- **license**: The customized license associated with this visualization
  - Not defined if the user hasn't customized it
  - Optional field
- **isInteracting**: Indicates user interaction state
  - `true` when the user is interacting via interactive code widgets (e.g., Alt+drag)
    - Hot reloading is throttled when this is `true`
  - `false` or `undefined` when they are not (e.g., normal typing)
    - Hot reloading is debounced when this is `false`
  - Optional field

```typescript
type VizContent = {
  id: VizId;
  files: VizFiles;
  title?: string;
  height?: number;
  license?: VizLicense;
  isInteracting?: boolean;
};
```

## Design Philosophy

The types in this package are designed with specific considerations:

- **Operational Transformation (OT) Friendly**: File IDs remain stable even when files are renamed or moved, simplifying OT with ShareDB
- **Lightweight**: Zero runtime footprint
- **Consistent**: Provides a single source of truth for types across the ecosystem

## Projects Using viz-types

This package is a core dependency for the following VizHub projects:

* [viz-utils](https://github.com/vizhub-core/viz-utils) - Utility functions for the VizHub ecosystem
* [vizhub-runtime](https://github.com/vizhub-core/vizhub-runtime) - Runtime environment for VizHub visualizations
* [editcodewithai](https://github.com/vizhub-core/editcodewithai) - AI-powered code editor for VizHub
* [vzcode](https://github.com/vizhub-core/vzcode) - Manual code editor for VizHub
* [vizhub](https://github.com/vizhub-core/vizhub) - Main VizHub application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
