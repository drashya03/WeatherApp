pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/drashya03/WeatherApp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t drashyamalot/weather-app:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                       echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                       docker push drashyamalot/weather-app:latest'''
                }
            }
        }

        stage('Remove Container') {
            steps {
                sh 'docker rm -f weather || true'
            }
        }

        stage('Launch Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name weather drashyamalot/weather-app:latest'
            }
        }
    }
}
