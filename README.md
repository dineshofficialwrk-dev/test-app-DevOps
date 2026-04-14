# Node Kubernetes CI/CD Pipeline 🚀

A complete end-to-end DevOps template featuring a Node.js microservice with Docker containerization (Distroless), automated Jenkins CI/CD pipelines, and Kubernetes deployment manifests.

## 🌟 Overview
This project serves as a template for testing modern DevOps practices, including containerization, continuous integration with Jenkins, and automated deployment on Kubernetes.

## 🛠 Tech Stack
- **Backend**: Node.js (Vanilla HTTP)
- **Containerization**: Docker
- **CI/CD**: Jenkins Pipeline
- **Orchestration**: Kubernetes (Deployments, Services)
- **Infrastructure**: GitHub, Docker Hub

## 🏗 Project Structure
- `server.js`: Core Node.js application logic.
- `package.json`: Project metadata and start scripts.
- `Dockerfile`: Multi-stage build configuration for the application image.
- `Jenkinsfile`: Defines the automated build and push stages.
- `deployment.yaml`: Kubernetes Deployment manifest (2 replicas).
- `service.yaml`: Kubernetes Service manifest to expose the app.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/) or a local Kubernetes cluster.
- [Jenkins](https://www.jenkins.io/) (for CI/CD pipeline).

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/dineshofficialwrk-dev/test-app-DevOps.git
   ```
2. Install dependencies (if any):
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
   *Access at: `http://localhost:3000`*

### Docker Build
Build and run the container locally:
```bash
docker build -t devops-app:local .
docker run -p 3000:3000 devops-app:local
```

### Kubernetes Deployment
Apply the manifests to your cluster:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## 🔄 CI/CD Pipeline
The project includes a `Jenkinsfile` that automates the following stages:
1. **Build Docker Image**: Builds a production-ready image tagged `v2`.
2. **Push Docker Image**: Pushes the image to Docker Hub (`dineshofficialwrk/devops-app`).

## 📜 License
This project is licensed under the ISC License.
