// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// // // Professional Development Environment Setup

// // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // Create some messy code - don't worry about formatting yet
// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult";
// //   } else {
// //     return "Hello " + name + ", you are a minor";
// //   }
// // };

// // console.log("Current messy code example:", messyExample("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);
// // // This code has terrible formatting - Prettier will fix it!
// // const prettierTest = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   skills: ["JavaScript", "React", "Node.js"],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = (items) => {
// //   return items.map((item) => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   "Before Prettier formatting - this code works but looks unprofessional"
// // );

// // const studentTest = {
// //   firstName: "diether baculpo",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   experience: "beginner",
// //   goals: ["become-developer", "build-projects"],
// // };

// // const testFunc = function (data) {
// //   for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// //   }
// // };

// // // Test 1: Basic live reload
// // let liveServerTest = "Initial message - change #1";
// // console.log("Live Server test:", liveServerTest);

// // // Test 2: Time-based updates
// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // Test 3: Function testing
// // function demonstrateLiveReload() {
// //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log("Current time:", now);
// //   return now;
// // }

// // showCurrentTime();

// // // Environment Setup Verification

// // console.log("🎉 Professional Development Environment Complete!");
// // console.log("✅ Prettier: Automatic code formatting");
// // console.log("✅ Live Server: Automatic browser refresh");
// // console.log("✅ Snippets: Fast code generation");
// // console.log("✅ Extensions: Enhanced productivity");
// // console.log("Ready for professional JavaScript development!");

// // // Calculate time savings
// // function calculateTimeSavings() {
// //   const dailyConsoleLogs = 50;
// //   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
// //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// //   const monthlySavings = dailySavings * 22; // work days

// //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// //   return { daily: dailySavings, monthly: monthlySavings };
// // }

// // calculateTimeSavings();

// // console.log(
// //   "Key insight: Professional developers think systematically, not just code"
// // );
// // console.log("Goal: Transform from beginner to professional problem-solver");

// // ////////////////////////////////////
// // // The 4-Step Problem-Solving Framework

// // console.log("4-Step Framework: Understand → Divide → Research → Implement");

// // const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);
// // const calcTempAmplitudeNew = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const array1 = [3, 5, 1];
// // const array2 = [9, 0, 5];
// // const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// // console.log(amplitudeNew);

// // console.log(
// //   "Problem-solving framework applied successfully to extended challenge!"
// // );
// // console.log("🎯 Framework mastered - ready for independent problem solving!");

// //Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
// 'use strict';

// console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

// /*
// Random Googling vs Strategic Research:

// RANDOM GOOGLING (Beginner Approach):
// - Search only when completely stuck
// - Use vague search terms like "javascript array problem"
// - Copy-paste first solution found
// - Don't understand what the code does
// - Same problems happen repeatedly

// STRATEGIC RESEARCH (Professional Approach):
// - Research proactively to understand concepts
// - Use specific, targeted search terms
// - Evaluate multiple solutions
// - Understand solutions before implementing
// - Build knowledge for future problems
// */

// console.log(
//   'Goal: Master research and debugging like a professional developer'
// );
// console.log(
//   'Strategic research builds lasting knowledge, not just quick fixes'
// );

// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// RESEARCH CHALLENGE: Find Maximum Value in Array
// Search progression:
// 1. "javascript maximum value array"
// 2. "javascript Math.max array"
// 3. "javascript Math.max spread operator array"
// 4. "Math.max MDN javascript"
// */

// function demonstrateArrayMax(numbers) {
//   // Method 1 - Using Math.max with spread operator (from research)
//   const method1 = Math.max(...numbers);

//   // Method 2 - Using for loop (traditional approach)
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   // Method 3 - Using reduce method (functional approach)
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

// ////////////////////////////////////
// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   // Method 1 - Most common Stack Overflow solution
//   const method1 = str.split('').reverse().join('');

//   // Method 2 - Manual loop approach (educational)
//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // Test our Stack Overflow research results
// const reverseResults = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults);

// ////////////////////////////////////
// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   // Method 1 - Most common Stack Overflow solution
//   const method1 = str.split('').reverse().join('');

//   // Method 2 - Manual loop approach (educational)
//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // MDN DOCUMENTATION MASTERY
// // Implement Array.concat

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   // Method 1: Simple concatenation
//   const simple = array1.concat(array2);

//   // Method 2: Concatenate multiple arrays at once
//   const multiple = array1.concat(array2, array3);

//   // Verify concat doesn't modify original arrays
//   console.log('Original array1 unchanged:', array1);

//   return { simple, multiple };
// }

// // Run demo
// const concatResults = demonstrateConcat();
// console.log('MDN documentation applied:', concatResults);

// // SYSTEMATIC DEBUGGING STRATEGIES

// function calculateAverageScore(scores) {
//   if (scores.length === 0) return 0; // safeguard

//   let total = 0;
//   for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }

//   return total / scores.length;
// }

// // Test the fixed function
// const testScores = [85, 92, 78, 96, 88];
// const fixedResult = calculateAverageScore(testScores);
// console.log('Buggy result:', fixedResult);

// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object') {
//     console.warn('Warning: Expected object, got', typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges
'use strict';

console.log('=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===');

/*
Your Developer Transformation Today:
Hour 1: Professional tools and environment ✅
Hour 2: Problem-solving framework and mindset ✅  
Hour 3: Research and debugging mastery ✅
Hour 4: Apply everything to real challenges
 
You're now solving unfamiliar problems independently.
*/

console.log('Ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

// WEATHER FORECAST CHALLENGE — Polished solution

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // Safeguard: if not an array or empty, print a minimal placeholder
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log('...');
    return;
  }

  // Build fragments like "17°C in 1 day" or "21°C in 2 days"
  const fragments = arr.map((temp, i) => {
    const day = i + 1;
    const dayLabel = day === 1 ? 'day' : 'days';
    return `${temp}°C in ${day} ${dayLabel}`;
  });

  // Join with the separator "..." and add leading + trailing "..."
  const output = `...${fragments.join('...')}...`;
  console.log(output);
}

// Tests
printForecast(data1);
printForecast(data2);
printForecast([]);

// TIME-PRESSURED CHALLENGE: Work Hours Analyzer
// JOB INTERVIEW SIMULATION: Analyze freelancer work week systematically

function analyzeWorkWeek(dailyHours) {
  // Handle empty or invalid input safely
  if (!Array.isArray(dailyHours) || dailyHours.length === 0) {
    return {
      totalHours: 0,
      averageHours: 0,
      maxDay: null,
      daysWorked: 0,
      isFullTime: false,
    };
  }

  // 1. Total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // 2. Average daily hours (rounded to 1 decimal place)
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // 3. Day with most hours
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxDay = days[maxDayIndex] || `Day ${maxDayIndex + 1}`;

  // 4. Number of days worked (non-zero)
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // 5. Full-time week check (≥ 35 hours)
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Test solution
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log('Work week analysis:', analyzeWorkWeek(weeklyHours));

const weeklyHours2 = [9, 9, 9, 9, 9, 0, 0];
console.log('Work week analysis:', analyzeWorkWeek(weeklyHours2));

const emptyHours = [];
console.log('Work week analysis (empty):', analyzeWorkWeek(emptyHours));

console.log('Challenge completed under time pressure!');

// SYSTEMATIC DEBUGGING AND ENHANCEMENT

// Completely fixed and enhanced version
function enhancedForecastFunction(temperatures, options = {}) {
  // Step 5 - PREVENT: Add comprehensive input validation
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error('Invalid input: temperatures must be a non-empty array');
    return '';
  }

  // Step 4 - FIX: Use modern JavaScript with proper declarations
  const { unit = '°C', separator = '...', includeIndex = true } = options;

  // Step 4 - FIX: Correct loop bounds and string building
  let result = '';

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = i + 1; // ✅ always +1, days start at 1
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  // Step 5 - PREVENT: Return clean result without trailing separator
  return separator + result.slice(0, -separator.length);
}

const testData = [15, 18, 22, 19];
console.log('Enhanced function (default):', enhancedForecastFunction(testData));

console.log(
  'Enhanced function (custom):',
  enhancedForecastFunction(testData, {
    unit: '°F',
    includeIndex: true,
  })
);

console.log('🎯 Complete developer skills successfully applied!');
console.log('Legacy code debugged, fixed, and enhanced systematically');
