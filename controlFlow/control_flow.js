let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

// console.log("User Message:", userMessage);
// console.log("Access Level:", accessLevel);
// console.log("User Category:", userCategory);
// console.log("Authentication Status:", authenticationStatus);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

let profile = "Employee";
let authorization;

switch (profile) {
    case "Employee":
        authorization = "Dietary Services";
        break;
    case "Enrolled Member" :
        authorization = "Dietary Services and one on one interaction with a dietician";
        break;
    case "Subscriber" :
        authorization = "Limited Dietary Services";
        break ;
    default :
    authorization = "Please enroll or subscribe";
}

console.log(authorization);