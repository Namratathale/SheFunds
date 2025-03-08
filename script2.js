document.addEventListener("DOMContentLoaded", () => {
    const courses = document.querySelectorAll(".course");
    const title = document.getElementById("courseTitle");
    const video = document.getElementById("courseVideo");
    const description = document.getElementById("courseDescription");
    const completeBtn = document.getElementById("completeBtn");

    const courseData = [
        {
            title: "Introduction to Financial Literacy",
            videoSrc: "videos/intro.mp4",
            description: "Financial literacy is the foundation of financial well-being. Learn key concepts like money management, budgeting, investing, and financial planning."
        },
        {
            title: "Budgeting & Expense Management",
            videoSrc: "videos/budgeting.mp4",
            description: "Understand how to manage income and expenses, create a budget, and prevent overspending."
        },
        {
            title: "Saving Strategies",
            videoSrc: "videos/saving.mp4",
            description: "Discover how to save money efficiently using methods like the 50/30/20 rule and emergency funds."
        },
        {
            title: "Investing for Beginners",
            videoSrc: "videos/investing.mp4",
            description: "Learn investment basics, including stocks, mutual funds, and risk management strategies."
        },
        {
            title: "Managing Debt & Loans",
            videoSrc: "videos/debt.mp4",
            description: "Explore strategies to manage loans effectively and reduce debt using snowball and avalanche methods."
        },
        {
            title: "Credit Score & Financial Health",
            videoSrc: "videos/credit.mp4",
            description: "Understand how credit scores work and their impact on financial opportunities."
        },
        {
            title: "Insurance & Risk Management",
            videoSrc: "videos/insurance.mp4",
            description: "Learn the importance of health, life, auto, and home insurance in financial security."
        },
        {
            title: "Retirement Planning",
            videoSrc: "videos/retirement.mp4",
            description: "Plan for a financially secure retirement by learning about pension plans and long-term investments."
        },
        {
            title: "Government Schemes & Financial Aid",
            videoSrc: "videos/government.mp4",
            description: "Explore government programs like Pradhan Mantri Jan Dhan Yojana and financial assistance options."
        }
    ];

    let currentCourse = 0;

    courses.forEach(course => {
        course.addEventListener("click", () => {
            let index = parseInt(course.getAttribute("data-index"));
            currentCourse = index;

            title.textContent = courseData[index].title;
            video.src = courseData[index].videoSrc;
            description.textContent = courseData[index].description;

            completeBtn.textContent = "Mark as Complete";
            completeBtn.disabled = false;
        });
    });

    completeBtn.addEventListener("click", () => {
        courses[currentCourse].classList.add("completed");
        completeBtn.textContent = "Completed ✅";
        completeBtn.disabled = true;
    });
});
