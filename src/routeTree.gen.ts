/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as authRouteImport } from './routes/(auth)/route'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authSigninImport } from './routes/(auth)/signin'
import { Route as authResetPasswordImport } from './routes/(auth)/reset-password'
import { Route as authForgotPasswordImport } from './routes/(auth)/forgot-password'

// Create Virtual Routes

const Import = createFileRoute('/')()

// Create/Update Routes

const authRouteRoute = authRouteImport.update({
  id: '/(auth)',
  getParentRoute: () => Route,
} as any)

const Route = Import.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => authRouteRoute,
} as any)

const authSigninRoute = authSigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => authRouteRoute,
} as any)

const authResetPasswordRoute = authResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => authRouteRoute,
} as any)

const authForgotPasswordRoute = authForgotPasswordImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => authRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof Import
      parentRoute: typeof rootRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authRouteImport
      parentRoute: typeof Route
    }
    '/(auth)/forgot-password': {
      id: '/(auth)/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof authForgotPasswordImport
      parentRoute: typeof authRouteImport
    }
    '/(auth)/reset-password': {
      id: '/(auth)/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof authResetPasswordImport
      parentRoute: typeof authRouteImport
    }
    '/(auth)/signin': {
      id: '/(auth)/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof authSigninImport
      parentRoute: typeof authRouteImport
    }
    '/(auth)/signup': {
      id: '/(auth)/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof authRouteImport
    }
  }
}

// Create and export the route tree

interface authRouteRouteChildren {
  authForgotPasswordRoute: typeof authForgotPasswordRoute
  authResetPasswordRoute: typeof authResetPasswordRoute
  authSigninRoute: typeof authSigninRoute
  authSignupRoute: typeof authSignupRoute
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authForgotPasswordRoute: authForgotPasswordRoute,
  authResetPasswordRoute: authResetPasswordRoute,
  authSigninRoute: authSigninRoute,
  authSignupRoute: authSignupRoute,
}

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
)

interface RouteChildren {
  authRouteRoute: typeof authRouteRouteWithChildren
}

const RouteChildren: RouteChildren = {
  authRouteRoute: authRouteRouteWithChildren,
}

const RouteWithChildren = Route._addFileChildren(RouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof authRouteRouteWithChildren
  '/forgot-password': typeof authForgotPasswordRoute
  '/reset-password': typeof authResetPasswordRoute
  '/signin': typeof authSigninRoute
  '/signup': typeof authSignupRoute
}

export interface FileRoutesByTo {
  '/': typeof authRouteRouteWithChildren
  '/forgot-password': typeof authForgotPasswordRoute
  '/reset-password': typeof authResetPasswordRoute
  '/signin': typeof authSigninRoute
  '/signup': typeof authSignupRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof RouteWithChildren
  '/(auth)': typeof authRouteRouteWithChildren
  '/(auth)/forgot-password': typeof authForgotPasswordRoute
  '/(auth)/reset-password': typeof authResetPasswordRoute
  '/(auth)/signin': typeof authSigninRoute
  '/(auth)/signup': typeof authSignupRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/forgot-password'
    | '/reset-password'
    | '/signin'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/forgot-password' | '/reset-password' | '/signin' | '/signup'
  id:
    | '__root__'
    | '/'
    | '/(auth)'
    | '/(auth)/forgot-password'
    | '/(auth)/reset-password'
    | '/(auth)/signin'
    | '/(auth)/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  Route: typeof RouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  Route: RouteWithChildren,
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
        "/"
      ]
    },
    "/": {
      "filePath": "(auth)",
      "children": [
        "/(auth)"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)/route.tsx",
      "parent": "/",
      "children": [
        "/(auth)/forgot-password",
        "/(auth)/reset-password",
        "/(auth)/signin",
        "/(auth)/signup"
      ]
    },
    "/(auth)/forgot-password": {
      "filePath": "(auth)/forgot-password.tsx",
      "parent": "/(auth)"
    },
    "/(auth)/reset-password": {
      "filePath": "(auth)/reset-password.tsx",
      "parent": "/(auth)"
    },
    "/(auth)/signin": {
      "filePath": "(auth)/signin.tsx",
      "parent": "/(auth)"
    },
    "/(auth)/signup": {
      "filePath": "(auth)/signup.tsx",
      "parent": "/(auth)"
    }
  }
}
ROUTE_MANIFEST_END */