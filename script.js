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
// نمایش مودال
// ===

function showModal(title, content) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalBody").innerHTML = content;

    document.getElementById("modal").classList.remove("hidden");

}


// ===
// بستن مودال
// ===

function closeModal() {

    document.getElementById("modal").classList.add("hidden");

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

        if (course.minPassedUnits) {

            let passedUnits = 0;
        
            courses.forEach(c => {
        
                if (c.passed)
                    passedUnits += Number(c.units);
        
            });
        
            if (passedUnits < course.minPassedUnits) {
        
                course.available = false;
                course.locked = true;
        
                return;
        
            }
        
        }

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

        if (prerequisitesPassed) {

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
// پیدا کردن درس‌هایی که این درس پیش‌نیاز آن‌هاست
// ===

function getFutureCourses(courseId) {

    return courses.filter(course => {

        return course.prerequisites.includes(courseId);

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

const title = document.createElement("span");

title.textContent = course.name;

name.appendChild(title);


// دکمه هم‌نیاز

if (course.corequisites.length > 0) {

    const coreBtn = document.createElement("button");

    coreBtn.textContent = "⭐";

    coreBtn.className = "corequisite-button";

    coreBtn.title = "نمایش هم‌نیاز";

    coreBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        showCorequisites(course);

    });

    name.appendChild(coreBtn);

}

// دکمه دروس آینده

if (getFutureCourses(course.id).length > 0) {

    const futureBtn = document.createElement("button");

    futureBtn.textContent = "دروس آینده";

    futureBtn.className = "future-button";

    futureBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        showFutureCourses(course);

    });

    name.appendChild(futureBtn);

}

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


    if (course.minPassedUnits) {

        let passedUnits = 0;
    
        courses.forEach(c => {
    
            if (c.passed)
                passedUnits += Number(c.units);
    
        });
    
        if (passedUnits < course.minPassedUnits) {
    
            showModal(
                "حداقل واحد لازم",
                `
                <p>برای اخذ این درس باید حداقل
                <b>${course.minPassedUnits}</b>
                واحد پاس کرده باشید.</p>
            
                <p>واحدهای پاس‌شده فعلی:
                <b>${passedUnits}</b></p>
                `
            );
    
            return;
    
        }
    
    }
    
    
    if (course.locked) {

        let html = "<b>برای اخذ این درس باید این پیش‌نیازها را پاس کنید:</b><br><br>";

course.prerequisites.forEach(id => {

    const c = getCourse(id);

    if (!c.passed) {

        html += "❌ " + c.name + "<br>";

    }

});

if (course.corequisites.length) {

    html += "<br><b>هم‌نیازها:</b><br>";

    course.corequisites.forEach(id => {

        html += "★ " + getCourse(id).name + "<br>";

        });
    }

    showModal(course.name, html);

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


   // ===
    // نمایش درس‌های آینده
    // ===

    function showFutureCourses(course) {

        const future = getFutureCourses(course.id);
    
        if (future.length === 0) {
    
            showModal(
                "درس‌های آینده",
                "<p>این درس پیش‌نیاز هیچ درس دیگری نیست.</p>"
            );
            
            return;
    
        }
    
        
    
        let html = "";

    future.forEach(c => {

    html += `
        <div>
            ترم ${c.semester} - ${c.name}
        </div>
    `;

    });

    showModal(
        "درس‌های آینده",
     html
    );
    
    }

    function showCorequisites(course) {

        let html = "";
    
        course.corequisites.forEach(id => {
    
            const c = getCourse(id);
    
            if (c) {
    
                html += `
                    <div>
                        ⭐ ${c.name}
                    </div>
                `;
    
            }
    
        });
    
        showModal(
            "هم‌نیازهای " + course.name,
            html
        );
    
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

    const percent = (passed / total) * 100;

document.getElementById("progressFill").style.width =
    percent + "%";

document.getElementById("progressText").textContent =
    passed + " / " + total + " واحد";

    document.getElementById("progressText").textContent =
`${passed} / ${total} (${percent.toFixed(1)}%)`;

}


window.onload = function () {

    loadPassedCourses();

    calculateCourseStates();

    renderSemesters();

    updateCreditsInfo();

    document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);

document
    .getElementById("modal")
    .addEventListener("click", function(e){

        if(e.target.id==="modal")
            closeModal();

    });

};



async function exportImage() {

    const element =
        document.getElementById("semestersContainer");

    const canvas = await html2canvas(element, {

        scale: 4,

        useCORS: true

    });

    const link = document.createElement("a");

    link.download = "Pharmacy-Roadmap.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

}
