# About project Fatsecret
FatSecret is a web application that helps users track their calorie intake and maintain a healthy diet. The application provides a database of foods, allowing users to search for and log the foods they eat throughout the day. The app calculate the nutritional information, including the number of calories, fat, protein, and carbohydrates.

# MockUp Link
https://www.figma.com/file/ywQbDR73BXArdbOWEmSsT2/fatsecret?node-id=0%3A1&t=tkoHFYWhGmCk4aHn-1

# Main functions
- login and register
- view and update profile information
- set daily norm of calories, fats, protein, carbs
- search and log food you eat for breakfast/lanch/dinner
- edit meals types and number
- track amount of water, calorie and nutrition per day
- add new food
- create your dish
- mark food as favorite one
- choose day in calendar to set meal plan

# Models Description
- User Model: (username, name, email address, password, age, gender, weight, height, which could be used to calculate their daily calorie goals; calorie, protein, fats, cabs norm)

- Food Model: (name, nutritional information (e.g., calories, fat, protein, and carbohydrates), serving size. This model could also include information about different brands of the same food.)

- Meal Model: (foods that were included in the meal, and the amount of each food that was consumed)

- Dish Model: (information about the dishes included in the application. It could include details such as the ingredients, name of dish, nutrition information)

# API, which could be used: 
- google calendar, 
- api for calculating daily calorie goals using some params.
