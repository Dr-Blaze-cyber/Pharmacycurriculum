// ===
// تنظیمات
// ===

const STORAGE_KEY = "pharmacyPassedCourses";


// ===
// آپلود وضعیت پاس شدن
// ===

function loadPassedCourses() {

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saved) return;

    courses.forEach(course => {

        course.passed = saved.includes(course.id);

    });

}



// ===
// ذخیره وضعیت پاس شدن
// ===

function savePassedCourses() {

    const passedCourses = courses
        .filter(course => course.passed)
        .map(course => course.id);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(passedCourses)
    );

}



// ===
// پیدا کردن درس
// ===

function getCourse(id) {

    return courses.find(course => course.id === id);

}



// ===
// محاسبه وضعیت تمام درس‌ها
// ===

function calculateCourseStates() {

    courses.forEach(course => {

        if (course.passed) {

            course.available = false;
            course.locked = false;

            return;

        }


        //---
        // بررسی پیش نیازها
        //---

        let prerequisitesPassed = true;

        for (const id of course.prerequisites) {

            const prerequisite = getCourse(id);

            if (!prerequisite || !prerequisite.passed) {

                prerequisitesPassed = false;

                break;

            }

        }


        //---
        // بررسی هم‌نیازها
        //---

        let corequisitesPassed = true;

            for (const id of course.corequisites) {

        const corequisite = getCourse(id);

            if (!corequisite || !corequisite.passed) {

        corequisitesPassed = false;
        break;

        }

        }   


        //---
        // نتیجه
        //---

        if (prerequisitesPassed && corequisitesPassed) {

            course.available = true;
            course.locked = false;

        }

        else {

            course.available = false;
            course.locked = true;

        }

    });

}


// ===
// رسم همه ترم‌ها
// ===

function renderSemesters() {

    const container = document.getElementById("semestersContainer");

    container.innerHTML = "";

    for (let semester = 1; semester <= 11; semester++) {

        const semesterCourses = courses.filter(course =>
            course.semester === semester
        );

        container.appendChild(
            createSemesterCard(
                semester,
                semesterCourses
            )
        );

    }

}



// ===
// ساخت جدول هر ترم
// ===

function createSemesterCard(semester, semesterCourses) {

    const card = document.createElement("div");
    card.className = "semester-card";


    const title = document.createElement("h2");
    title.textContent = "ترم " + semester;

    card.appendChild(title);


    const table = document.createElement("table");
    table.className = "semester-table";


    table.innerHTML = `

        <thead>

            <tr>

                <th>وضعیت</th>
                <th>نام درس</th>
                <th>واحد</th>

            </tr>

        </thead>

    `;


    const tbody = document.createElement("tbody");


    semesterCourses.forEach(course => {

        tbody.appendChild(
            createCourseRow(course)
        );

    });


    table.appendChild(tbody);

    card.appendChild(table);

    return card;

}


// ===
// بررسی اینکه درس پیش نیاز آینده است یا نه
// ===

function isFutureImportant(course) {

    return courses.some(otherCourse => {

        return otherCourse.prerequisites.includes(course.id);

    });

}


// ===
// ساخت سطر هر درس
// ===

function createCourseRow(course) {

    const tr = document.createElement("tr");

    tr.classList.add("course-row");


    //---
    // رنگ سطر
    //---

    if (course.locked) {

        tr.classList.add("status-locked");
    
    }
    
    else if (course.passed) {
    
        tr.classList.add("normal-course");
    
    }
    
    else if (isFutureImportant(course)) {
    
        tr.classList.add("future-important");
    
    }
    
    else {
    
        tr.classList.add("normal-course");
    
    }


    //---
    //  ستون وضعیت پاس شدن
    //---

    const status = document.createElement("td");

    if (course.passed) {

        status.textContent = "✅";
    
    }
    
    else if (course.locked) {
    
        status.textContent = "🚫";
    
    }
    
    else {
    
        status.textContent = "🤔";
    
    }


    //---
    // ستون نام درس
    //---

    const name = document.createElement("td");

    name.textContent = course.name;


    //---
    // ستون تعداد واحد
    //---

    const units = document.createElement("td");

    units.textContent = course.units;


    tr.appendChild(status);
    tr.appendChild(name);
    tr.appendChild(units);


    //---
    // کلیک
    //---

    tr.addEventListener("click", function () {

        courseClicked(course);

    });


    return tr;

}


function courseClicked(course) {


    if (course.locked) {

        alert("این درس هنوز قابل اخذ نیست.");

        return;

    }


    //---
    // تغییر وضعیت پاس شدن
    //---

    course.passed = !course.passed;


    //---
    // ذخیره
    //---

    savePassedCourses();


    //---
    // محاسبه مجدد
    //---

    calculateCourseStates();


    //---
    // تغییر مجدد جدول
    //---

    renderSemesters();


    //---
    //محاسبه مجدد تعداد واحد
    //---
    updateCreditsInfo();

}

function updateCreditsInfo(){

    let passed = 0;

    let total = 0;


    courses.forEach(course => {

        total += Number(course.units);


        if(course.passed){

            passed += Number(course.units);

        }

    });


    document.getElementById("passedCredits").textContent = passed;


    document.getElementById("remainingCredits").textContent = total - passed;

}


window.onload = function () {

    loadPassedCourses();

    calculateCourseStates();

    renderSemesters();

    updateCreditsInfo();

};

