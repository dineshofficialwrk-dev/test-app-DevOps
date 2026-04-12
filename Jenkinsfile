pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "dineshofficialwrk/devops-app"
    }

    stages {   // ✅ MISSING BLOCK

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:v2 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:v2'
            }
        }

    }  // ✅ CLOSE stages
}