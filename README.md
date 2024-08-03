# Project Setup and Running Instructions

## Prerequisites

- **Node.js** (for frontend)
- **Python** (for backend)
- **Git** (for cloning the repository)
- **Git Bash** or **Windows Subsystem for Linux (WSL)** (for running the shell script on Windows)

## Setup Instructions

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone "url of the project"
```

### 2. Install Frontend Dependencies

Navigate to the `frontend` directory and install the required Node.js packages:

```bash
cd vectorshiftcopy/frontend
npm install or npm i 
```

### 3. Install Backend Dependencies

Navigate to the `backend` directory and install the required Python packages:

```bash
cd vectorshiftcopy/backend
pip install fastapi uvicorn networkx pydantic
```

### 4. Running Servers Simultaneously

A shell script named `start-all.sh` is provided in the root directory to run both frontend and backend servers simultaneously.

#### For macOS and Linux

- Open a terminal.
- Navigate to the root directory where `start-all.sh` is located:

  ```bash
  cd path/to/root
  ```

- Make sure `start-all.sh` is executable:

  ```bash
  chmod +x start-all.sh
  ```

- Run the script:

  ```bash
  ./start-all.sh
  ```

#### For Windows

Use Git Bash or Windows Subsystem for Linux (WSL) to run the shell script.

- Open Git Bash and navigate to the root directory:

  ```bash
  cd /vectorshiftcopy
  ```

- Ensure the script has execute permissions and run it:

  ```bash
  chmod +x start-all.sh
  ./start-all.sh
  ```
```
If Error Appears 
./start-all.sh: line 2: uvicorn: command not found
The Add 
cd backend && python-m uvicorn main:app --reload &
cd frontend && npm run start
in script-sh.all file.
```
### 5. Verify Servers Are Running

Check the terminal output to ensure both frontend and backend servers are running correctly. You should see logs indicating that both servers have started successfully.

## Troubleshooting

- **Script Permissions**: If you encounter permission issues on macOS or Linux, use `chmod +x start-all.sh` to make the script executable.

- **Dependency Issues**: Ensure all dependencies are correctly listed in `package.json` (for frontend). Reinstall packages if necessary.

- **Running on Windows**: If Git Bash or WSL is not available, you can run the frontend and backend servers separately using their respective commands in different terminal windows.

## `start-all.sh` Script

Here's the content of the `start-all.sh` script for reference:

```bash
#!/bin/bash

# Start the frontend server
echo "Starting frontend server..."
cd path/to/frontend
npm start 

# Start the backend server
echo "Starting backend server..."
cd path/to/backend
uvicorn main:app --reload 
```

