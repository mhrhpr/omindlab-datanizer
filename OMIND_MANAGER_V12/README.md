# OMIND Manager v12

Production-ready scaffold for the OMIND Manager data-to-action product.

## Stack
- Python HTTP API
- PostgreSQL for production state/history
- S3-compatible object storage for uploads
- SQLite fallback for local development
- Docker / Render configuration

## Run
Set environment variables from `.env.example`, then run the API with Python.

## Deployment
The project is intended to be deployed as a container. Configure `DATABASE_URL` and S3-compatible storage credentials in the deployment environment. Never commit secrets.
