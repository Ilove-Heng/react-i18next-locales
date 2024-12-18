/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LangIndexImport } from './routes/$lang.index'
import { Route as LangUiImport } from './routes/$lang.ui'
import { Route as LangProjectImport } from './routes/$lang.project'
import { Route as LangProductImport } from './routes/$lang.product'
import { Route as LangAboutImport } from './routes/$lang.about'

// Create/Update Routes

const LangIndexRoute = LangIndexImport.update({
  id: '/$lang/',
  path: '/$lang/',
  getParentRoute: () => rootRoute,
} as any)

const LangUiRoute = LangUiImport.update({
  id: '/$lang/ui',
  path: '/$lang/ui',
  getParentRoute: () => rootRoute,
} as any)

const LangProjectRoute = LangProjectImport.update({
  id: '/$lang/project',
  path: '/$lang/project',
  getParentRoute: () => rootRoute,
} as any)

const LangProductRoute = LangProductImport.update({
  id: '/$lang/product',
  path: '/$lang/product',
  getParentRoute: () => rootRoute,
} as any)

const LangAboutRoute = LangAboutImport.update({
  id: '/$lang/about',
  path: '/$lang/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$lang/about': {
      id: '/$lang/about'
      path: '/$lang/about'
      fullPath: '/$lang/about'
      preLoaderRoute: typeof LangAboutImport
      parentRoute: typeof rootRoute
    }
    '/$lang/product': {
      id: '/$lang/product'
      path: '/$lang/product'
      fullPath: '/$lang/product'
      preLoaderRoute: typeof LangProductImport
      parentRoute: typeof rootRoute
    }
    '/$lang/project': {
      id: '/$lang/project'
      path: '/$lang/project'
      fullPath: '/$lang/project'
      preLoaderRoute: typeof LangProjectImport
      parentRoute: typeof rootRoute
    }
    '/$lang/ui': {
      id: '/$lang/ui'
      path: '/$lang/ui'
      fullPath: '/$lang/ui'
      preLoaderRoute: typeof LangUiImport
      parentRoute: typeof rootRoute
    }
    '/$lang/': {
      id: '/$lang/'
      path: '/$lang'
      fullPath: '/$lang'
      preLoaderRoute: typeof LangIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/$lang/about': typeof LangAboutRoute
  '/$lang/product': typeof LangProductRoute
  '/$lang/project': typeof LangProjectRoute
  '/$lang/ui': typeof LangUiRoute
  '/$lang': typeof LangIndexRoute
}

export interface FileRoutesByTo {
  '/$lang/about': typeof LangAboutRoute
  '/$lang/product': typeof LangProductRoute
  '/$lang/project': typeof LangProjectRoute
  '/$lang/ui': typeof LangUiRoute
  '/$lang': typeof LangIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/$lang/about': typeof LangAboutRoute
  '/$lang/product': typeof LangProductRoute
  '/$lang/project': typeof LangProjectRoute
  '/$lang/ui': typeof LangUiRoute
  '/$lang/': typeof LangIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/$lang/about'
    | '/$lang/product'
    | '/$lang/project'
    | '/$lang/ui'
    | '/$lang'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/$lang/about'
    | '/$lang/product'
    | '/$lang/project'
    | '/$lang/ui'
    | '/$lang'
  id:
    | '__root__'
    | '/$lang/about'
    | '/$lang/product'
    | '/$lang/project'
    | '/$lang/ui'
    | '/$lang/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LangAboutRoute: typeof LangAboutRoute
  LangProductRoute: typeof LangProductRoute
  LangProjectRoute: typeof LangProjectRoute
  LangUiRoute: typeof LangUiRoute
  LangIndexRoute: typeof LangIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  LangAboutRoute: LangAboutRoute,
  LangProductRoute: LangProductRoute,
  LangProjectRoute: LangProjectRoute,
  LangUiRoute: LangUiRoute,
  LangIndexRoute: LangIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$lang/about",
        "/$lang/product",
        "/$lang/project",
        "/$lang/ui",
        "/$lang/"
      ]
    },
    "/$lang/about": {
      "filePath": "$lang.about.tsx"
    },
    "/$lang/product": {
      "filePath": "$lang.product.tsx"
    },
    "/$lang/project": {
      "filePath": "$lang.project.tsx"
    },
    "/$lang/ui": {
      "filePath": "$lang.ui.tsx"
    },
    "/$lang/": {
      "filePath": "$lang.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
