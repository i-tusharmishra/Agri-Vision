pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials' 
        DOCKER_USER           = 'your-dockerhub-username' // Change to your Docker Hub username
        REGISTRY              = 'docker.io'
        APP_NAME              = 'agri-vision'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_USER}/${APP_NAME}-client:${BUILD_NUMBER} ./client"
                    sh "docker build -t ${DOCKER_USER}/${APP_NAME}-server:${BUILD_NUMBER} ./server"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo \$PASS | docker login ${REGISTRY} -u \$USER --password-stdin"
                        sh "docker push ${DOCKER_USER}/${APP_NAME}-client:${BUILD_NUMBER}"
                        sh "docker push ${DOCKER_USER}/${APP_NAME}-server:${BUILD_NUMBER}"
                        sh "docker tag ${DOCKER_USER}/${APP_NAME}-client:${BUILD_NUMBER} ${DOCKER_USER}/${APP_NAME}-client:latest"
                        sh "docker tag ${DOCKER_USER}/${APP_NAME}-server:${BUILD_NUMBER} ${DOCKER_USER}/${APP_NAME}-server:latest"
                        sh "docker push ${DOCKER_USER}/${APP_NAME}-client:latest"
                        sh "docker push ${DOCKER_USER}/${APP_NAME}-server:latest"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh "docker compose down"
                    sh "docker compose up -d --build"
                }
            }
        }
    }
}
