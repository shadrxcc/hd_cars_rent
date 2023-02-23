# HDCARS
> A car booking app where the company's list of cars available for booking are displayed. It allows authenticated users to able to see these cars, book a car of their choice and see the bookings they have made. It also allows users to add their own cars for listing as well as delete them.

The app consumes a REST API created using the Ruby on Rails framework. API repo [hd_cars_rent_backend](https://github.com/shadrxcc/hd_cars_rent_backend)

## Live App
[Vercel App](https://hd-cars-rent-git-dev-shadrxcc.vercel.app/)

## Project Requirement/Features
Core features - for teams of each size
- A properly authenticated sign up and login using only a username. Users can not access any of the pages without authentication.

- In the navigation panel: the user can see links to:
    - Cars/Motorcycles/doctors/classes/items that you selected as a theme.
    
    - "My reservations".
     
    - "Add cars/motorcycle/doctor/class/item that you selected as a theme".
    
    -"Delete cars/motorcycle/doctor/class/item that you selected as a theme".

- On the main page, the user can see a list of cars/motorcycles/doctors/classes/items that you selected as a theme.


- When the user selects a specific item, they can see the details page with its full description.

- On the details page, the user can click the "Reserve" button.

- When the user clicks the "Add item" link in the navigation panel they can see a form for adding a new item.

- Make the app responsive, creating both mobile and desktop versions.

- When the user clicks the "Delete item" link in the navigation panel they can see a list of all items with a title and "Delete" button.

- When the user clicks the "Delete" button, the selected item is marked as removed and does not show on the main list anymore.

- To make reservations, the user has to select a date and city (username and selected item are auto-filled).

- When the user clicks the "My reservations" link in the navigation panel they can see a list of their reservations (with information about item name, date and city).

## Built with
- ReactJs
- Redux
- Tailwind CSS
- CSS
- AOS
### Setup
## Frontend
- Clone the GitHub Repository with 'git clone https://github.com/shadrxcc/hd_cars_rent.git'
- Go to the Project Directory
- Run ```npm install``` to install dependencies
- Run ```npm start```. It runs the app in the development mode.<br>
Open http://localhost:3000 to view it in your browser.

## Backend
- Go to the API repo [hd_cars_rent_backend](https://github.com/shadrxcc/hd_cars_rent_backend)
- Clone the GitHub Repository with 'git clone https://github.com/shadrxcc/hd_cars_rent_backend.git'
- Go to the Project Directory
- Run ```bundle install``` to install dependencies
- Run ```rails s -p 3100```. It runs the app in the development mode.<br>
Open http://localhost:3100 to view it in your browser or postman.

## Author

👤 **Shadrach Akaade**

- GitHub: [@shadrxcc](https://github.com/shadrxcc)
- Twitter: [@shadrxcc](https://twitter.com/shadrxcc)
- LinkedIn: [Shadrach Akaade](https://www.linkedin.com/in/shadrachakaade/)

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/shadrxcc/hd_cars_rent/issues).

## Show your support

Give a ⭐️ if you like this project!