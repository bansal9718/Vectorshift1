#!/bin/bash
cd backend && uvicorn main:app --reload &
cd frontend && npm run start
