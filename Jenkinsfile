pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "dineshofficialwrk/devops-app"
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
