// 欢迎信息
console.log("Introducing your new personal assistant!");

// 导入个人助理模块
const personalAssistant = require("./personalAssistant");

// 提醒用户
personalAssistant.remind("Meeting with clients at 10:00 AM");

// 设置提醒
personalAssistant.setReminder("Call mom at 3:00 PM");

// 创建日历事件
personalAssistant.createCalendarEvent("Lunch with colleagues at 12:30 PM", "Restaurant XYZ");

// 获取天气信息
const weatherInfo = personalAssistant.getWeather("New York");
console.log("Weather in New York:", weatherInfo);

// 发送电子邮件
personalAssistant.sendEmail("friend@example.com", "Hello!", "Just checking in. How are you?");

// 执行其他操作
console.log("Harness the power of artificial intelligence to stay organized, productive, and informed throughout your day!");
