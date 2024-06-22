
![Logo](https://i.postimg.cc/bw7dBB7y/logo.png)


## Athenboard

Web Application for Connecting Artists and Art Enthusiasts

## Index

- [Introduction](#introduction)
- [Story](#story)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Color Reference](#color-reference)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [Usage](#usage)
- [Lessons Learned](#lessons-learned)
- [Roadmap](#roadmap)
- [Feedback](#feedback)
- [Authors](#authors)
- [Badges](#badges)
- [License](#license)
## Introduction

This web application facilitates connections between artists and art enthusiasts, offering a seamless platform for booking personalized art sessions. It showcases my skills and creativity in web application development, utilizing a variety of modern technologies.
## Story

This project emerged from my curiosity to explore new technologies and demonstrate my strong skills in frontend development, as well as my ability to learn and apply backend concepts when needed. Inspired by facilitating connections between artists and art enthusiasts, I embarked on creating this application as part of my personal portfolio.
## Screenshots

### Desktop version

![App Screenshot Desktop](https://i.postimg.cc/nLMbqFRM/desktop.png)

![App Screenshot Desktop](https://i.postimg.cc/jjWqt4r8/dates-desktop.png)

![App Screenshot Desktop](https://i.postimg.cc/x8Q9GrN7/stripe-desktop.png)

![App Screenshot Desktop](https://i.postimg.cc/vTvb3PWm/payment-success-desktop.png)


### Mobile version

![App Screenshot Mobile](https://i.postimg.cc/KYsbWkkn/mobile.png)

![App Screenshot Mobile](https://i.postimg.cc/Zq1bRvbJ/dates-mobile.png)

![App Screenshot Mobile](https://i.postimg.cc/tRdqqgLH/stripe-mobile.png)

![App Screenshot Mobile](https://i.postimg.cc/HxXp7WnX/payment-success-mobile.png)



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Dark Teal | ![#006876](https://via.placeholder.com/10/006876?text=+) #006876 |
| Dark Goldenrod | ![#775a0b](https://via.placeholder.com/10/775a0b?text=+) #775a0b |
| White Smoke | ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text=+) #f5f5f5 |


## Features

- **Explore Artistic Skills**: Users can browse through various artistic skills offered by talented instructors.
- **Book Sessions**: Easily book personalized art sessions.
- **Secure Transactions**: Seamless and secure payment processing via Stripe.
- **User-Friendly Interface**: Elegant and functional design using Ant Design and Tailwind CSS.
- **Responsive Design**: Optimized for both desktop and mobile experiences.


## Tech Stack

- **Bun**: A fast all-in-one JavaScript runtime
- **Next.js with TypeScript**: React framework for web applications.
- **Supabase**: Database management and authentication.
- **Stripe**: Payment integration.
- **Ant Design**: Component library.
- **Tailwind CSS**: Responsive design and styling.
- **LeafletJS**: An open-source JavaScript library for interactive maps


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```bash
NEXT_PUBLIC_SUPABASE_URL='YOUR_SUPABASE_URL'
NEXT_PUBLIC_SUPABASE_ANON_KEY='YOUR_SUPABASE_ANON_KEY'
NEXT_SERVICE_ROLE_KEY='YOUR_SUPABASE_SERVICE_ROLE_KEY'
STRIPE_SECRET_KEY='YOUR_STRIPE_SECRET_KEY'
STRIPE_WEBHOOK_SECRET='YOUR_STRIPE_WEBHOOK_SECRET'
```
## Installation

```bash
# Install bun - https://bun.sh/

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"

# Linux & macOs
curl -fsSL https://bun.sh/install | bash
```
## Run Locally

Clone the project

```bash
git clone git@github.com:nextokoi/athenboard.git
```

Go to the project directory

```bash
cd athenboard
```

Install dependencies

```bash
bun update
```

Start the server

```bash
bun dev
```
Set up enviroment variables

```bash
cp .env.example .env
```


## Usage

- Open your browser and navigate to http://localhost:3000.
- Sign up or log in using your credentials.
- Explore the various artistic skills and book a session with an instructor.
- Complete the payment process securely through Stripe.
## Lessons Learned

#### What did you learn while building this project? 

While building this project, I gained a deeper understanding of several modern web development technologies and practices. Specifically, I learned:

- **Next.js with TypeScript**: I enhanced my skills in building scalable and performant web applications. Using TypeScript improved the code's readability and maintainability, reducing bugs and facilitating collaboration.

- **Supabase**: I gained hands-on experience with Supabase for database management and authentication. It provided an efficient way to handle real-time data and user authentication, which was crucial for the application's functionality.

- **Stripe Integration**: I learned how to securely integrate Stripe for payment processing, ensuring that transactions are seamless and secure for users.

- **Ant Design**: Utilizing these libraries allowed me to create elegant, functional, and responsive user interfaces quickly. I learned how to balance design aesthetics with usability.

- **Project Management**: Managing this project improved my ability to plan, prioritize tasks, and adapt to unforeseen challenges, ultimately delivering a high-quality product.

#### What challenges did you face and how did you overcome them?

During the development of this project, I encountered several challenges:

- **Learning Curve with New Technologies**: Each technology had its own learning curve, especially Next.js, Supabase, Stripe, and Ant Design, which I had not used extensively before. To overcome this, I invested time in reading documentation, following tutorials, and experimenting with small-scale implementations to understand their functionalities better.

- **Authentication and Data Management**: Ensuring secure and efficient user authentication and real-time data handling was challenging. I overcame this by thoroughly understanding Supabase's capabilities, leveraging its real-time features, and implementing best practices for authentication.

- **Payment Integration**: Integrating Stripe required careful handling of sensitive data and secure transaction processes. I adhered to Stripe's documentation, implemented secure API calls, and conducted extensive testing to ensure the payment system was robust and reliable.

- **Design Consistency**: Maintaining a consistent design throughout the application while ensuring it remained responsive across devices was challenging. I utilized Ant Design and Tailwind CSS, which provided a solid foundation for responsive and cohesive UI components, and I consistently tested the design on various devices.

- **Technical and Creative Balance**: Balancing technical requirements with creative design needs required careful planning and iterative testing. I approached this by breaking down tasks into smaller, manageable parts, allowing me to focus on both technical precision and creative expression.


## Roadmap

- Create admin panel

- Create the artist view


## Feedback

If you have any feedback, please reach out to us at nextokoi.dev@gmail.com


## Acknowledgements

- This project is the result of several months of work. Initially, I thought I could complete it sooner, but technical challenges and pauses in development while working with technologies like Next.js and Supabase, as well as the need to find alternative approaches for specific functions, extended the process.

- Finally, I managed to complete it thanks to perseverance and the support of my friends, family, and especially AKMU, whose music accompanied me during my development sessions, listening to their albums over and over again.

- I also want to thank James Clear for his book "Atomic Habits," which provided me with the necessary tools to establish and maintain positive habits that were crucial in this process. Thanks to the combination of good music and good reading, I was able to stay focused and motivated until the end.


## Authors

- [@nextokoi](https://www.github.com/nextokoi)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## License

[MIT](https://choosealicense.com/licenses/mit/)

