pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Stopping older deployments if any...'
                    sh "docker compose down --remove-orphans"
                    
                    echo 'Building and starting Agri-Vision Containers...'
                    sh "docker compose up -d --build"
                }
            }
        }
    }

    post {
        success {
            echo 'Agri-Vision successfully deployed live on AWS!'
        }
        failure {
            echo 'Deployment failed. Check configurations.'
        }
    }
}
