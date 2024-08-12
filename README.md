# **Broadcast Chat**

BroadcastChat is a real-time chat app built with Next.js and the Broadcast Channel API. It shows how to use the Broadcast Channel API to enable communication between multiple browser tabs. Users enter their name, send messages, and see updates in real-time across all open tabs. The app also tracks and displays active participants.

For more details on using the Broadcast Channel API, check out my article: [Exploring the Broadcast Channel API for Real-Time Browser Tab Communication](https://blog.tunmii.xyz/exploring-the-broadcast-channel-api-for-real-time-browser-tab-communication).

## Demo Video

[Watch the demo video](./public/demo.mp4)

## **Features**

- **Real-Time Chat:** Messages are instantly shared across all open tabs.
- **Dynamic Participants List:** See a list of participants, updated in real-time as new users join the chat.
- **Custom Chat Bubbles:** Messages are displayed in styled chat bubbles, with distinct colors for messages sent by the current user.

## **Getting Started**

### **Prerequisites**

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm**: Node Package Manager is typically installed with Node.js.

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/oluwatunmiisheii/broadcast-api-chat-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd broadcast-api-chat-app
   ```

3. **Install Dependencies:**

   ```bash
   bun install
   ```

4. **Start the development server:**

   ```bash
   bun dev
   ```

## **Usage**

- Open the application in multiple browser tabs.
- Enter your name in each tab.
- Send messages and watch them appear in real-time across all open tabs.
- View the list of participants, which updates as new users join.

## **Reference**

This project is used to demonstrate the capabilities of the Broadcast Channel API in my article: [Exploring the Broadcast Channel API for Real-Time Browser Tab Communication](#). The article provides a detailed explanation of the API and how it can be used to build features like the one demonstrated in this application.

## **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **Broadcast Channel API**: A simple API for communicating between different browser contexts (tabs, windows, iframes) of the same origin.
- **shadcn UI**: A UI component library built on top of Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without writing any custom CSS.

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss any changes.

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
