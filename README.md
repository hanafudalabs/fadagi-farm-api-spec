# Fadagi Farm API

## Overview

This repository contains the backend API services for the Fadagi Farm B2B cattle investment platform. It is built with [Nuxt 3](https://nuxt.com/) in integrated server mode, using [Prisma](https://www.prisma.io/) as the ORM.

The project defines all necessary endpoints, handles request/response logic, and manages authentication mechanisms.

## Project Structure & Features

The API is designed based on a detailed **[OpenAPI Specification](/api/)**, which outlines all endpoints for different user roles (Admin and Investor).

Key features include:
- User Authentication (Registration & Login)
- Cattle Management (for Admins)
- Investment Portfolio Management (for Investors)
- Savings Account Management (for Investors)
- Transaction Verification and Monitoring

For a complete and detailed list of features to be implemented, please see our **[Project Backlog](./BACKLOG.md)**.

## Requirements

- Node.js 18+
- A running MySQL database instance

## Installation & Setup

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/hanafudalabs/fadagi-farm-api-spec.git
    cd fadagi-farm-api-spec
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    -   Copy the example file: `cp .env-example .env`
    -   Edit the `.env` file and set your `DATABASE_URL` and other required variables.

4.  **Run database migrations:**
    This will set up the database schema based on `prisma/schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

## Usage

### Development
To start the development server with hot-reloading:
```bash
npm run start