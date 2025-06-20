# GitHub Actions Setup Guide

This repository uses GitHub Actions for continuous integration, database management, and type generation.

## Required Secrets

To make the workflow function properly, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository.
2. Click on "Settings" > "Secrets and variables" > "Actions".
3. Add the following secrets:

| Secret Name | Description |
|-------------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | https://lsrsobabbkietyplwbny.supabase.co |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcnNvYmFiYmtpZXR5cGx3Ym55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDU2NDAsImV4cCI6MjA2NTA4MTY0MH0.l6PeOk-H30U9X6nh7IR35O4tfhAPSBMvCdZC27jP1SI |
| `SUPABASE_ACCESS_TOKEN` | 6G7EqMStGYJWaRis+Ntm1hGtl+SoPNtCqeGjNa2jcF39Funy3fgpb4bDlWbpxyS4XX8amaBPn2RJV++dUNX/Tg== |
| `SUPABASE_PROJECT_REF` | lsrsobabbkietyplwbny |

## How to Get These Values

### Supabase URL and Anon Key
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Go to "Project Settings" > "API"
4. Copy the URL and anon key from the "Project URL" and "anon/public" fields

### Supabase Access Token
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Click on your profile icon in the bottom left
3. Select "Account"
4. Go to "Access Tokens"
5. Generate a new token with an appropriate name (e.g., "GitHub Actions")

### Supabase Project Reference
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. The project reference is in the URL: `https://app.supabase.com/project/[project-ref]`

## Workflow Features

This GitHub Actions workflow:

1. Builds and tests your Next.js application
2. Seeds your Supabase database with ingredients data
3. Regenerates TypeScript types based on your current Supabase schema
4. Automatically commits the updated types to your repository

## Extending the Workflow

When you're ready to add automatic deployments:
1. Uncomment the "deploy" job in the workflow file
2. Add the necessary Vercel secrets to your GitHub repository
