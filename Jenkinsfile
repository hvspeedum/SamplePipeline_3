pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/erHardikVerma/my-nodejs-app'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step defined"'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                pm2 stop all || true
                pm2 start index.js --name my-nodejs-app --watch -- --port=4000
                '''
            }
        }
    }
}
