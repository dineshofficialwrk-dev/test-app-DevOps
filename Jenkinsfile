pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "dineshofficialwrk/devops-app"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/dineshofficialwrk-dev/test-app-DevOps.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:v1 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:v1'
            }
        }
    }
}