# Keyland public website

## Start locally

From this folder, install dependencies once and start the Vite development server:

```powershell
npm install
npm start
```

The site runs at `http://localhost:5173`. Configure `VITE_API_URL` in `.env` to point to the backend API.

## AWS infrastructure

`infra/template.yaml` provisions this app's private S3 bucket and CloudFront distribution. Its nested workflow deploys the stack named `<AWS_STACK_NAME>-main` and publishes the built website.

Deploy the main and admin frontend infrastructure before the backend stack so the backend can configure exact CORS origins.
