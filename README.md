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
