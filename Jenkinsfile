#!/usr/bin/env groovy

pipeline {
    agent { label 'master' }

    stages {

        stage('Build Container') {

            steps {
                sh "docker build -t jgaafromnorth/rest-diag-svc:v${env.BUILD_ID} ."
                sh "docker tag jgaafromnorth/rest-diag-svc:v${env.BUILD_ID} jgaafromnorth/rest-diag-svc:latest"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([ credentialsId: "8cb91394-2af2-4477-8db8-8c0e13605900", url: "" ]) {
                    sh "docker push jgaafromnorth/rest-diag-svc:v${env.BUILD_ID}"
                    sh 'docker push jgaafromnorth/rest-diag-svc:latest'
                }
            }
        }
    }
}
