// Configure Amplify with Cognito
aws_amplify.Amplify.configure({
    Auth: {
        region: 'us-east-1', 
        userPoolId: 'us-east-1_gSbkx5X2b',
        userPoolWebClientId: '6qctd02asn0l4eg7ve84ldslv9'
    }
});

// Function to handle login
//college.aj.18@gmail.com
//Marist2024!
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    try {
        const user = await aws_amplify.Auth.signIn(username, password);
        message.style.color = 'green';
        message.textContent = 'Login successful! Redirecting...';
        // Redirect to the main application page after login
        setTimeout(() => window.location.href = 'main.html', 2000);
    } catch (error) {
        console.error('Login failed:', error);
        message.style.color = 'red';
        message.textContent = 'Login failed: ' + error.message;
    }
        console.log("Login function called");
   
}
