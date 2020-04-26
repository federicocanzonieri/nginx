node {
   
   stage('Preparation') { // for display purposes
      // Get some code from a GitHub repository
      git 'https://github.com/federicocanzonieri/nginx.git'
     
   }
   stage('Build') {
      // Run the maven build
     
   }
   stage('Test'){
      
       parallel (firstBranch: {
        
            sh 'echo "Doing testing"'
            sh 'echo "Test PASSED"'

       },
    secondBranch: {
        
            sh 'echo "Doing testing"'
            sh 'echo "Test PASSED"'
       
      })
        
   }
   stage('Results') {
      
      archiveArtifacts '*'
   }
   stage('Deploy'){
        input 'Deploy to Production'
       sh 'echo "DEPLOY "'
   
   }
   
   
}
