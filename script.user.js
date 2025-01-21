// ==UserScript==
// @name         Vision Tool 2
// @namespace    https://www.facebook.com/sapienti19/
// @version      1.0
// @description  سكربت إنهاء المهمات تلقائياَ
// @author       Vision
// @match        *.centurygames.com/*
// @icon         https://iili.io/2OGyVu2.png
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @require      https://unpkg.com/axios/dist/axios.min.js
// @updateURL    https://s.id/VSNxSite
// @downloadURL  https://s.id/VSNxSite
// ==/UserScript==
(function () {
async function Vision() {
    let style = document.createElement('style');
    let adminName, adminPictureUrl, userToken, userX;
    let VSN = 'wildxnxx@gmail.com';
    let Misk = 'yasoo.hemaa@yahoo.com';
    let Aml = 'amlhaiaty555@yahoo.com';
    let Wlaa = 'walaa.love3010@yahoo.com';
    let Muna = 'mmbadran79@gmail.com';
    let Medo = 'medododg@gmail.com';
    let allowedUsers = [VSN, Misk, Aml, Wlaa, Muna, Medo];

    async function checkUserInfo() {
       //Get User Token//
       userToken = await unsafeWindow.HV.get_access_token();
       //Get User Info//
       try {
           const response = await fetch(`https://graph.facebook.com/v18.0/me?fields=id,name,email&access_token=${userToken}`);
           const data = await response.json();
           userX = data.email;
       } catch (error) {
           console.error('Error fetching user data:', error);
           throw error;
           }
           //Get User Data//
           if (userX === VSN) {
                    adminPictureUrl = `https://i.ibb.co/34DvGHm/28.jpg`;
                    adminName = "VISION";
           } else if (userX === Misk) {
                    adminPictureUrl = `https://i.ibb.co/YXxVFmj/Misk.jpg`;
                    adminName = "Misk Alkhitam";
           } else if (userX === Aml) {
                    adminPictureUrl = `https://i.ibb.co/gmgXVpS/Aml.jpg`;
                    adminName = "Aml Mohamed";
           } else if (userX === Wlaa) {
                    adminPictureUrl = `https://i.ibb.co/wwdNxgh/Wlaa.jpg`;
                    adminName = "Aml Mohamed";
           } else if (userX === Muna) {
                    adminPictureUrl = `https://i.ibb.co/6PmFcJf/Muna.jpg`;
                    adminName = "Muna Badran";
           } else if (userX === Medo) {
                    adminPictureUrl = `https://i.ibb.co/N2kbtmJ/Medo.jpg`;
                    adminName = "Medo Dodge";
           }
    }

    function print(type, ...args) {
        console[type](``, ...args);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function definePropertyWhenUndefinedAsync(object, property, callback) {
        if (!object.hasOwnProperty(property)) {
            let value;
            Object.defineProperty(object, property, {
                get() {
                    return value;
                },
                async set(newValue) {
                    value = newValue;
                    await callback();
                },
                configurable: true,
                enumerable: true
            });
        } else {
            await callback();
        }
    }

    // style.textContent = `.animatedBtn { display: flex; justify-content: center; align-items: center; border: none; outline: none; color: #ffffff; font-size: 20px; font-weight: bold; width: fit-content; padding: 20px 60px; background: linear-gradient(-30deg, #b0d30d 50%, #000000 50%); cursor: pointer; position: relative; z-index: 0; border-radius: 20px; user-select: none; -webkit-user-select: none; touch-action: manipulation; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); } .animatedBtn:before, .animatedBtn:after { content: ""; position: absolute; width: 100%; height: 5px; z-index: 1; transition: all 0.3s ease; } .animatedBtn:before { background: #b0d30d; top: 0; left: 0; animation: move-line 10s linear infinite; } .animatedBtn:after { background: #000000; bottom: 0; left: 0; animation: move-line 10s linear infinite; } @keyframes move-line { 0% { left: -100%; } 100% { left: 100%; } } .animatedBtn:hover { color: #ffffff; background: linear-gradient(-30deg, #000000  50%, #b0d30d 50%); box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3); } .animatedBtn:hover:before{ background: #000000; } .animatedBtn:hover:after { background: #b0d30d; }`;
    style.textContent = `.animatedBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            background-image: url('https://i.ibb.co/ydfT6B9/ready2.png');
            background-size: 100%;
            background-position: center;
            border: none;
            width: 70px;
            height: 79.14px;
            cursor: pointer;
            outline: none;
            padding: 0;
            margin: 0px;

    }`;
    document.head.appendChild(style);

    print("log", `Init`);
    var getElement = unsafeWindow.document.getElementById("prod_guide");
    var xBtn = unsafeWindow.document.createElement("div");
    xBtn.className = 'animatedBtn';
    xBtn.innerHTML = "";
    //xBtn.style.cssText = "top: -91px; left: 0px; padding: 8px 10px; border-radius: 10px; font-size: 14px;";
    xBtn.style.cssText = "top: 632px; left: 515.45px; padding: 0px; border-radius: 13px; font-size: 14px; float: left;";
    document.body.appendChild(xBtn);

    // Function to update button position
    function updateButtonPosition() {
        const windowWidth = window.innerWidth;
        const positionMap = {
            1537: "515.45px",
            1747: "618.45px",
            2011: "752.45px",
            2169: "830.45px",
            1365: "427.45px",
            1158: "331.45px"
        };
        xBtn.style.left = positionMap[windowWidth] || "0px";
    }
    xBtn.onclick = async () => {
         pressSound.play();
         await checkUserInfo();
         if (!allowedUsers.includes(userX)) {
                alert("غير مسموح لك باستخدام الإضافة...... اطلب إذن الوصول");
                window.location.reload();
                return;
            }
         createBackground();
    };
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    //Varibles//
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/earlyaccess/droidarabickufi.css';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    let overlay, inputPoints, spinner, coTitle1, adminImg, adminImg2, userImg, missionName;
    let fileInput, typeInput, type, loTitle1, loTitle2, loButtonContainer, downloadButton;
    let linksCounter = 0;
    let shortenIndex = 0;
    var alarm = new Audio("https://od.lk/s/MTNfMzE4MTIxMzFf/beeb.mp3");
    var toggleSound = new Audio("https://od.lk/s/MTNfMzE4MTIxMzdf/Off2.mp3");
    var pressSound = new Audio("https://od.lk/s/MTNfMzE4MTIxMzhf/Press.mp3");
    var userName = unsafeWindow.currentUserInfo.name;
    var userPictureUrl = unsafeWindow.currentUserInfo.picture;

    async function createBackground() {
    style = document.createElement('style');
    style.textContent = `
        .spinner {
            border: 8px solid #b0d30d; /* Light grey */
            border-top: 8px solid #333; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px; /* Center the spinner */
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWd0c3g0dzAxOGQwYjJqbHIxYXN1Z2M1NWpiejdkZ3lzMzNzMHQxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KWcGnX2iz0G1fMMHrO/giphy.gif');
            background-size: cover; /* Cover the entire overlay */
            background-position: center; /* Center the image */
            display: none; /* Initially hidden */
            z-index: 9999; /* Ensure it covers everything */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            text-align: center;
        }
        .overlay-container {
            display: flex; /* Enable flexbox */
            flex-direction: column; /* Arrange children in a column */
            position: fixed; /* Fixed position relative to the viewport */
            top: 35%; /* Position from the top */
            left: 50%; /* Position from the left */
            background-color: #1e1e1e; /* Dark background for overlay container */
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            color: #202020; /* Text color */
            font-size: 24px; /* Font size */
            text-align: center; /* Center text */
            align-items: center; /* Center items in flex container */
            width: auto; /* Allow the width to adjust to the content */
            transform: translate(-50%, -50%); /* Center the element */
        }
        .container {
            display: flex; /* Enable flexbox */
            flex-direction: column; /* Arrange children in a column */
            position: fixed; /* Fixed position relative to the viewport */
            top: 35%; /* Position from the top */
            left: 50%; /* Position from the left */
            background-color: #1e1e1e; /* Dark background for overlay container */
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            color: #202020; /* Text color */
            font-size: 24px; /* Font size */
            text-align: center; /* Center text */
            align-items: center; /* Center items in flex container */
            width: auto; /* Allow the width to adjust to the content */
            heigh: auto;
            transform: translate(-50%, -50%); /* Center the element */
        }
        .signature {
            font-size: 16px;
			font-weight: bold;
            color: #b7dd07;
			background-color: #333;
            margin-bottom: 10px;
			border: 1px solid #353535; /* Dark border */
			border-radius: 10px;
            padding: 10px; /* Add padding for better appearance */
			display: inline-block; /* Prevent stretching */
			width: fit-content; /* Allow the width to adjust to the content */
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Drop shadow */
			transform: translateY(-40%); /* Scale down to 75% and move up by 15% */
        }
        h1 {
            font-size: 36px;
            font-weight: bold;
            background-color: #333;
            color: #b7dd07; /* Default dark heading color */
            border: 1px solid #353535; /* Dark border */
            border-radius: 10px;
            padding: 15px; /* Add padding for better appearance */
            margin: 15px 0px 20px 0px; /* Space below the heading */
            transition: color 0.3s;
            display: inline-block; /* Prevent stretching */
            width: auto;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Drop shadow */
        }
        .input-container {
            display: flex; /* Use flexbox to align inputs */
            justify-content: space-between; /* Space between inputs */
            width: 100%;
        }
        input {
            width: 85%;
            padding: 20px;
            margin: 0px 5px 30px 5px;
            border: 1px solid #353535; /* Dark border */
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
            font-size: 20px;
            background-color: #333; /* Dark input background */
            color: #f0f0f0; /* Dark input text color */
            box-shadow: 2px 2px 7px 0 rgb(0 0 0 / 34%);
        }
        input:focus {
        border-color: #353535;
        outline: none;
        }
        input::placeholder {
            font-family: 'Droid Arabic Kufi', sans-serif;
            color: #f0f0f0; /* Red color for the placeholder text */
            opacity: .7; /* Ensures the color is fully opaque */
        }
        input[type="file"] {
             display: none; /* Hide the file input */
        }
        .button-container {
            display: flex; /* Use flexbox to align buttons */
            justify-content: space-between; /* Space between buttons */
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          flex: 1;
          margin: 0 8px;
          padding: 20px 60px;
          border-radius: 15px;
          border: none;
          font-family: 'Droid Arabic Kufi', sans-serif;
          font-size: 20px;
          font-weight: bold;
          background: #b0d30d;
          color: #000;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
          cursor: pointer;
        }
        button:hover {
          background: #d2ff00;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        button:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }
        button::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          -webkit-transform: skewX(-20deg);
          -moz-transform: skewX(-20deg);
          -ms-transform: skewX(-20deg);
          -o-transform: skewX(-20deg);
          transform: skewX(-20deg);
        }
        @keyframes sh02 {
          from {
            opacity: 0;
            left: 0%;
          }
          50% {
            opacity: 1;
          }
          to {
            opacity: 0;
            left: 100%;
          }
        }
        button:active {
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: box-shadow 0.2s ease-in;
          -moz-transition: box-shadow 0.2s ease-in;
          transition: box-shadow 0.2s ease-in;
        }
        .toggle-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: -10px 0px 0px 0px;
        }
        .toggle {
            position: relative;
            width: 40px;
            height: 19px;
            background-color: #626f5a;
            border-radius: 30px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .toggle::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            background-image: url('https://i.ibb.co/yybHQsF/Moon.png');
            background-size: cover;
            background-position: center;
            background-color: #7caf1a;
            border-radius: 50%;
            top: -5.3px;
            left: -10px;
            transition: transform 0.3s, background-color 0.3s;
        }
        body.light .spinner {
            border: 8px solid #4386f4;
            border-top: 8px solid #f8f8f8;
        }
        body.light .toggle {
            height: 20px;
            background-color: #cbd8e2; /* Light toggle background */
        }
        body.light .toggle::before {
            background-image: url('https://i.ibb.co/7nYCR0w/Sun.png');
            background-color: #3774d7;
            width: 30px;
            height: 30px;
            transform: translateX(30px);
        }
        body.light {
            background-color: #f0f0f0; /* Light background */
            color: #333; /* Light text color */
        }
        body.light spinner {
            border: 8px solid #1d1d1d;
            border-top: 8px solid #3700B3;
        }
        body.light #overlay {
            background-color: #f5f9ff;
        }
        body.light .overlay-container {
            background-color: #fffcf0; /* Light container */
            color: #333; /* Light text color */
        }
        body.light .container {
            background-color: #fffcf0; /* Light container */
            color: #333; /* Light text color */
        }
		body.light .signature {
            background-color: #f8f8f8; /* Light toggle background */
			color: #0c4eb8; /* Light text color */
            border: 2px solid #ddd; /* Dark border */
        }
        body.light h1 {
            background-color: #f8f8f8; /* Light toggle background */
			color: #0c4eb8; /* Light text color */
            border: 2px solid #ddd; /* Dark border */
        }
        body.light input {
            background-color: #fff; /* Light input background */
            color: #333; /* Light input text color */
            border: 2px solid #ddd; /* Light border */
        }
        body.light input::placeholder {
            color: #000000; /* Red color for the placeholder text */
            opacity: .7; /* Ensures the color is fully opaque */
        }
        body.light button {
            background-color: #4386f4; /* Light button background */
        }
        body.light button:hover {
            background-color: #6ba2fd; /* Light button hover */
       }
    `;
    document.head.appendChild(style);
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.cssText = 'display: block;';
    document.body.appendChild(overlay);
    //Container and its content//
    const container = document.createElement('div');
    container.className = 'container';
    overlay.appendChild(container);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.cssText = "position: relative; top: -8px; left: 50%; width: 1px; height: 1px ; margin: -7px; padding: 3px 15px; font-size: 12px; font-weight: 900; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px;";
    closeButton.onclick = function() {
         pressSound.play();
         overlay.style.cssText = 'display: none;';
    };
    container.appendChild(closeButton);

    const updateButton = document.createElement('button');
    updateButton.textContent = 'تحديث';
    updateButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 14px; width: auto; padding: 2px 10px; margin: -7px 0px 30px 0px;";
    updateButton.onclick = function() {
        pressSound.play();
        window.open('https://s.id/VSNxSite', '_blank');
    };
    container.appendChild(updateButton);

    const signature = document.createElement('div');
    signature.className = 'signature';
    signature.textContent = 'By: Ahmed Khalil';
    container.appendChild(signature);

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'toggle-container';
    container.appendChild(toggleContainer);

    const toggleButton = document.createElement('div');
    toggleButton.className = 'toggle';
    toggleButton.onclick = function() {
        toggleSound.play();
        toggleTheme();
    };
    toggleContainer.appendChild(toggleButton);

    const heading = document.createElement('h1');
    heading.className = 'heading';
    heading.innerHTML = 'VISION أهلا بك فى أداة';
    heading.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 24px; padding: 5px 30px;";
    container.appendChild(heading);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    container.appendChild(inputContainer);

    const inputSR = document.createElement('input');
    inputSR.type = 'text';
    inputSR.id = 'signedRequest';
    inputSR.style.cssText = 'display: none; width: 155px;';
    inputSR.placeholder = 'أدخل ريكويست صالح';
    inputContainer.appendChild(inputSR);

    const inputCode = document.createElement('input');
    inputCode.type = 'text';
    inputCode.id = 'code';
    inputCode.style.cssText = 'display: none; width: 155px;';
    inputCode.placeholder = 'أدخل رقم الجائزة';
    inputContainer.appendChild(inputCode);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    container.appendChild(buttonContainer);

    const siteButton = document.createElement('button');
    siteButton.textContent = 'الموقع';
    siteButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 3px 30px; font-size: 24px;";
    siteButton.onclick = function() {
        pressSound.play();
        window.location.href = 'https://vision-redirector.neocities.org/';
    };
    buttonContainer.appendChild(siteButton);

    const cheatButton = document.createElement('button');
    cheatButton.textContent = 'المهمات';
    cheatButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 3px 30px; font-size: 24px;";
    cheatButton.onclick = function() {
         pressSound.play();
         container.style.cssText = 'display: none;';
         missionsOverlay();
    };
    buttonContainer.appendChild(cheatButton);

    const linksToolButton = document.createElement('button');
    linksToolButton.textContent = 'الروابط';
    linksToolButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 5px 25px; font-size: 24px; white-space: nowrap;";
    linksToolButton.onclick = function() {
             pressSound.play();
             linksOverlay();
    };
    buttonContainer.appendChild(linksToolButton);
    }

    function missionsOverlay() {
        const missionsOverlay = document.createElement('div');
        missionsOverlay.id = 'overlay';
        missionsOverlay.style.cssText = 'display: block;';
        document.body.appendChild(missionsOverlay);

        const moContainer = document.createElement('div');
        moContainer.className = 'overlay-container';
        missionsOverlay.appendChild(moContainer);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.cssText = "position: relative; top: -8px; left: 50%; width: 1px; height: 1px ; margin: -7px; padding: 3px 15px; font-size: 12px; font-weight: 900; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px;";
        closeButton.onclick = function() {
        pressSound.play();
        missionsOverlay.style.cssText = 'display: none;';
        overlay.style.cssText = 'display: none;';
        createBackground();
        };
        moContainer.appendChild(closeButton);

        const moSignature = document.createElement('div');
        moSignature.className = 'signature';
        moSignature.textContent = 'By: Ahmed Khalil';
        moSignature.style.cssText = 'margin: 10px 0px -15px 0px;';
        moContainer.appendChild(moSignature);

        const moTitle1 = document.createElement('h1');
        moTitle1.innerHTML = ""+adminName+" : مرحباَ بالأدمن";
        moTitle1.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 24px; padding: 5px 25px;";
        moContainer.appendChild(moTitle1);

        adminImg = document.createElement('img');
        adminImg.src = adminPictureUrl;
        adminImg.alt = "";
        adminImg.style.cssText = "display: block; width: 135px; height: 135px; border: 4.4px solid #000; border-radius: 25%; margin: -5px 0px 25px 0px; image-rendering: crisp-edges;";
        moContainer.appendChild(adminImg);

        const moTitle2 = document.createElement('h1');
        moTitle2.innerHTML = 'المهمات المتاحة';
        moTitle2.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 24px; margin-top: -10px; padding: 1px 25px;";
        moContainer.appendChild(moTitle2);
        /*
        inputPoints = document.createElement('input');
        inputPoints.type = 'text';
        inputPoints.id = 'points';
        inputPoints.style.cssText = 'display: block; width: 50%; padding: 5px 40px; margin: 0px 1px 10px 1px;';
        inputPoints.placeholder = 'عدد النقاط المراد شرائها';
        moContainer.appendChild(inputPoints);
        */

        const moButtonContainer = document.createElement('div');
        moButtonContainer.className = 'button-container';
        moContainer.appendChild(moButtonContainer);

        const m1Button = document.createElement('button');
        m1Button.textContent = 'اكتشف الاختلافات';
        m1Button.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 5px 27px; font-size: 24px; white-space: nowrap;";
        m1Button.onclick = function() {
            pressSound.play();
            missionName = "الاختلافات";
            missionsOverlay.style.cssText = 'display: none;';
            cheatsOverlay();
            cheat1();
        };
        moButtonContainer.appendChild(m1Button);
        /*
        const m2Button = document.createElement('button');
        m2Button.textContent = 'الشتاء الحافل';
        m2Button.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 5px 27px; font-size: 24px; white-space: nowrap;";
        m2Button.onclick = function() {
            pressSound.play();
        if (inputPoints.value === "") {
            alert("يرجى إدخال عدد النقاط المراد شرائها من فضلك");
            return;
        }
        if (isNaN(inputPoints.value) || Number(inputPoints.value) <= 0) {
        alert("يرجى إدخال عدد صحيح من فضلك");
        return;
        }
            missionName = "الشتاء الحافل";
            missionsOverlay.style.cssText = 'display: none;';
            cheatsOverlay();
            cheat2();
            coTitle1.innerHTML = "جارى شراء نقاط مهمة "+missionName+"<br>يرجى الانتظار";
        };
        moButtonContainer.appendChild(m2Button);
        */
        }

        function cheatsOverlay() {
            const cheatsOverlay = document.createElement('div');
            cheatsOverlay.id = 'overlay';
            cheatsOverlay.style.cssText = 'display: block;';
            document.body.appendChild(cheatsOverlay);

            const coContainer = document.createElement('div');
            coContainer.className = 'overlay-container';
            cheatsOverlay.appendChild(coContainer);

            const coSignature = document.createElement('div');
            coSignature.className = 'signature';
            coSignature.textContent = 'By: Ahmed Khalil';
            coSignature.style.cssText = 'margin: 10px 0px -13px 0px;';
            coContainer.appendChild(coSignature);

            coTitle1 = document.createElement('h1');
            coTitle1.innerHTML = "جارى إنهاء مهمة "+missionName+"<br>يرجى الانتظار";
            coTitle1.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 24px; padding: 5px 25px;";
            coContainer.appendChild(coTitle1);

            const imgContainer = document.createElement('div');
            imgContainer.className = 'button-container';
            coContainer.appendChild(imgContainer);

            adminImg2 = document.createElement('img');
            adminImg2.src = adminPictureUrl;
            adminImg2.alt = "";
            adminImg2.style.cssText = "display: none; width: 135px; height: 135px; border: 4.4px solid #000; border-radius: 25%; margin-bottom: 25px; image-rendering: crisp-edges;";
            imgContainer.appendChild(adminImg2);

            userImg = document.createElement('img');
            userImg.src = userPictureUrl;
            userImg.alt = "";
            userImg.style.cssText = "display: none; width: 135px; height: 135px; border: 4.4px solid #000; border-radius: 25%; margin-bottom: 25px; image-rendering: crisp-edges;";
            imgContainer.appendChild(userImg);

            spinner = document.createElement('div');
            spinner.className = 'spinner';
            coContainer.appendChild(spinner);

            const coButtonContainer = document.createElement('div');
            coButtonContainer.className = 'button-container';
            coContainer.appendChild(coButtonContainer);

            const siteReturnButton = document.createElement('button');
            siteReturnButton.textContent = 'العودة للموقع';
            siteReturnButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 5px 25px; font-size: 24px; white-space: nowrap;";
            siteReturnButton.onclick = function() {
                pressSound.play();
                window.location.href = 'https://vision-redirector.neocities.org/';
            };
            coButtonContainer.appendChild(siteReturnButton);

            const farmReturnButton = document.createElement('button');
            farmReturnButton.textContent = 'العودة للمزرعة';
            farmReturnButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 5px 25px; font-size: 24px; white-space: nowrap;";
            farmReturnButton.onclick = function() {
                pressSound.play();
                location.reload();
            };
            coButtonContainer.appendChild(farmReturnButton);
            }

        function linksOverlay() {
                const linksOverlay = document.createElement('div');
                linksOverlay.id = 'overlay';
                linksOverlay.style.cssText = 'display: block;';
                document.body.appendChild(linksOverlay);

                const loContainer = document.createElement('div');
                loContainer.className = 'overlay-container';
                linksOverlay.appendChild(loContainer);

                const closeButton = document.createElement('button');
                closeButton.textContent = 'X';
                closeButton.style.cssText = "position: relative; top: -8px; left: 50%; width: 1px; height: 1px ; margin: -7px; padding: 3px 15px; font-size: 12px; font-weight: 900; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px;";
                closeButton.onclick = function() {
                              pressSound.play();
                              linksOverlay.style.cssText = 'display: none;';
                };
                loContainer.appendChild(closeButton);

                const loSignature = document.createElement('div');
                loSignature.className = 'signature';
                loSignature.textContent = 'By: Ahmed Khalil';
                loSignature.style.cssText = 'margin: 1px 0px 23px 0px; font-size: 15px; padding: 6px 10px;';
                loContainer.appendChild(loSignature);

                fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = ".txt";
                fileInput.style.cssText = "padding: 8px 20px;";
                loContainer.appendChild(fileInput);

                loTitle1 = document.createElement('h1');
                loTitle1.innerHTML = "أداة صناعة الروابط";
                loTitle1.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 27.5px; padding: 0px 48px; margin: -20px 1px 30px 1px; width: 75%; white-space: nowrap;";
                loContainer.appendChild(loTitle1);

                loTitle2 = document.createElement('h1');
                loTitle2.innerHTML = "اختر ملف الحسابات";
                loTitle2.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 22.5px; padding: 0px 30px; margin: -13px 1px 26px 1px; white-space: nowrap;";
                loContainer.appendChild(loTitle2);

                const miniButtonsContainer = document.createElement('div');
                miniButtonsContainer.className = 'button-container';
                miniButtonsContainer.style.cssText = "margin: -12px 1px 28px 1px";
                loContainer.appendChild(miniButtonsContainer);

                const typeButton = document.createElement('button');
                typeButton.textContent = 'نوع الروابط';
                typeButton.style.cssText = "padding: 0px 15px; font-size: 16px; font-weight: bold; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 7px; white-space: nowrap;";
                typeButton.onclick = function() {
                          pressSound.play();
                          typeBackground();
                };
                miniButtonsContainer.appendChild(typeButton);

                const uploadButton = document.createElement('button');
                uploadButton.textContent = 'رفع الملف';
                uploadButton.style.cssText = "padding: 0px 15px; font-size: 16px; font-weight: bold; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 7px; white-space: nowrap;";
                uploadButton.onclick = function() {
                          pressSound.play();
                          fileInput.click();
                };
                miniButtonsContainer.appendChild(uploadButton);

                const instructionsButton = document.createElement('button');
                instructionsButton.textContent = 'الإرشادات';
                instructionsButton.style.cssText = "padding: 0px 15px; font-size: 16px; font-weight: bold; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 7px; white-space: nowrap;";
                instructionsButton.onclick = function() {
                          pressSound.play();
                          instructionsBackground();
                };
                miniButtonsContainer.appendChild(instructionsButton);

                fileInput.addEventListener('change', (event) => {
                     const fileName = event.target.files[0] ? event.target.files[0].name : 'لم يتم اختيار ملف';
                     loTitle2.innerHTML = `${fileName}`;
                });

                typeInput = document.createElement('input');
                typeInput.type = 'text';
                typeInput.placeholder = "--------------- أدخل أمر الروابط ---------------";
                typeInput.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 7px 20px; margin: -8px 1px 20px 1px;";
                loContainer.appendChild(typeInput);

                loButtonContainer = document.createElement('div');
                loButtonContainer.className = 'button-container';
                loContainer.appendChild(loButtonContainer);

                downloadButton = document.createElement('a');
                downloadButton.style.cssText = "display: none;";

                const createLinksButton = document.createElement('button');
                createLinksButton.textContent = 'صناعة الروابط';
                createLinksButton.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; padding: 0px 14px; font-size: 25px; white-space: nowrap;";
                createLinksButton.onclick = function() {
                        pressSound.play();
                if (!fileInput.files.length) {
                print("error", "Please select a file first.");
                alert("تأكد من إدخال ملف الروابط بشكل صحيح من فضلك");
                return;
                }
                if (typeInput.value.trim() === '') {
                print("error", "Please enter a type first.");
                alert("تأكد من إدخال أمر الروابط من فضلك");
                return;
                }
                linksCounter = 0;
                shortenIndex = 0;
                downloadButton.style.cssText = "display: none;";
                createLinks();
                };
                loButtonContainer.appendChild(createLinksButton);
        }

        function toggleTheme() {
                document.body.classList.toggle('dark');
                document.body.classList.toggle('light');
        }
        // creating links part //
        function instructionsBackground() {
            const insOverlay = document.createElement('div');
            insOverlay.id = 'overlay';
            insOverlay.style.cssText = 'display: block;';
            document.body.appendChild(insOverlay);

            const insContainer = document.createElement('div');
            insContainer.className = 'overlay-container';
            insOverlay.appendChild(insContainer);

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.cssText = "position: relative; top: -8px; left: 50%; width: 1px; height: 1px ; margin: -7px; padding: 3px 15px; font-size: 12px; font-weight: 900; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px;";
            closeButton.onclick = function() {
                 pressSound.play();
                 insOverlay.style.cssText = 'display: none;';
            };
            insContainer.appendChild(closeButton);

            const insText1 = document.createElement('h1');
            insText1.innerHTML = "يجب أن يكون تنسيق ملف الحسابات كالتالى";
            insText1.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 22.5px; padding: 0px 30px; margin: 5px 1px 25px 1px;";
            insContainer.appendChild(insText1);

            const insImg = document.createElement('img');
            insImg.src = 'https://i.ibb.co/kgH8HJp/textImg.png';
            insImg.alt = "";
            insImg.style.cssText = "display: block; width: 348px; height: 169px; margin-bottom: 17px; border: none; border-radius: none; image-rendering: crisp-edges; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);";
            insContainer.appendChild(insImg);

            const insText2 = document.createElement('h1');
            insText2.innerHTML = 'تصنع الروابط كل 4 ساعات عدا روابط التقويم<br>تصنع مرة واحدة فى اليوم فقط<br>حتى لا تعطى الحسابات ذهب';
            insText2.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 22.5px; padding: 0px 30px; margin: 5px 1px 2px 1px;";
            insContainer.appendChild(insText2);

        }
        function typeBackground() {
            const typeOverlay = document.createElement('div');
            typeOverlay.id = 'overlay';
            typeOverlay.style.cssText = 'display: block;';
            document.body.appendChild(typeOverlay);

            const typeContainer = document.createElement('div');
            typeContainer.className = 'overlay-container';
            typeOverlay.appendChild(typeContainer);

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.cssText = "position: relative; top: -8px; left: 50%; width: 1px; height: 1px ; margin: -7px; padding: 3px 15px; font-size: 12px; font-weight: 900; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px;";
            closeButton.onclick = function() {
                 pressSound.play();
                 typeOverlay.style.cssText = 'display: none;';
            };
            typeContainer.appendChild(closeButton);

            const typeTitle = document.createElement('h1');
            typeTitle.innerHTML = "اختر نوع الروابط المراد صناعتها";
            typeTitle.style.cssText = "font-family: 'Droid Arabic Kufi', sans-serif; font-size: 22.5px; padding: 0px 30px; margin: 5px 1px 25px 1px;";
            typeContainer.appendChild(typeTitle);

            const typeButtonContainer = document.createElement('div');
            typeButtonContainer.className = 'button-container';
            typeButtonContainer.style.cssText = "display: flex; flex-wrap: wrap; gap: 15px; width: 100%";
            typeContainer.appendChild(typeButtonContainer);

            const buttons = [
              { text: 'تقويم', value: 't_calendar_everday_reward' },
              { text: 'بنزين', value: 't_get_farmclub_final_reward' },
              { text: 'كرة بينجو', value: 't_bingo' },
              { text: 'سماد عادى', value: 't_get_Refinery_gas' },
              { text: 'سماد خارق', value: 't_get_Refinery_gas' },
              { text: 'سماد ودلو ساحر', value: 't_add_expand' },
              { text: 'دلو خارق', value: 't_get_mine_goldenChest' },
              { text: 'سماد مائى', value: 't_water_ranch_lev' },
              { text: 'سماد مائى خارق', value: 't_submarine_collect' },
              { text: 'طاقة المغامرة 1', value: 't_get_sky_adv_lev' },
              { text: 'طاقة المغامرة 2', value: 't_get_sky_adv_open' },
              { text: 'تشغيل تلقائى', value: 't_complete_farmclub_order' }
            ];

            buttons.forEach(btn => {
              const button = document.createElement('button');
              button.textContent = btn.text;
              button.style.cssText = "flex: 1 1 calc(25%); padding: 3px 0px; font-size: 14px; font-weight: bold; font-family: 'Droid Arabic Kufi', sans-serif; border-radius: 10px; box-sizing: border-box;";
              button.onclick = () => {
                pressSound.play();
                typeInput.value = btn.value;
                typeOverlay.style.cssText = 'display: none;';
              };
              typeButtonContainer.appendChild(button);
            });
        }
        function generateRandomKey() {
            const hexChars = '0123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let key = '';
            for (let i = 0; i < 32; i++) {
                key += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            return key;
        }
        // function to send the request and fetch the response//
        async function createLinks() {
            const xUrl = "https://farm-us.centurygames.com/index.php/webasync/get_feed_key/";
            const headers = {
                "Host": "farm-us.centurygames.com",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "sec-ch-ua-mobile": "?0",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
                "sec-ch-ua-platform": "\"Windows\"",
                "Sec-GPC": "1",
                "Accept-Language": "en-US,en;q=0.5",
                "Origin": "https://farm.centurygames.com",
                "Sec-Fetch-Site": "same-site",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "Referer": "https://farm.centurygames.com/",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive",
            };
            type = typeInput.value;
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = async function (event) {
                const content = event.target.result.trim();
                if (!content) {
                    print("error", "File is empty.");
                    alert("ملف الحسابات فارغ");
                    return;
                }

                const lines = content.split('\n').filter(line => line.trim() !== '');
                const totalAcconts = lines.length;
                loTitle2.innerHTML = `الملف به ${totalAcconts} من الحسابات`;
                let links = [];

                // Generate all links first
                for (const [index, line] of lines.entries()) {
                    console.log(`Processing line ${index + 1}: ${line}`); // Debug log
                    const [uss, hash] = line.trim().split('_');
                    if (!uss || !hash) {
                        print("error", `Invalid file format in line ${index + 1}: ${line}. Please ensure it contains 'uss_hash'.`);
                        continue;
                    }

                    console.log("log", `Fetching feed key for line ${index + 1}...`);
                    try {
                        const randomKey = generateRandomKey();
                        const data = new URLSearchParams({ uss, type, key: randomKey, hash });
                        console.log(`Sending request for line ${index + 1} with data:`, data.toString()); // Debug log

                        const response = await axios.post(xUrl, data.toString(), { headers });
                        const jsonResponse = response.data;
                        console.log(`Response for line ${index + 1}:`, jsonResponse); // Debug log

                        if (jsonResponse.ok) {
                            const { key, snsid, reward } = jsonResponse.payload;
                            const itemID = reward?.items || 'Coins';
                            let itemName;
                            if (itemID === 'Coins') {
                              itemName = 'عملات ذهبية'; // Skip item info and set itemName directly
                            } else {
                              const itemTid = itemID.split(':')[0];
                              const itemInfo = unsafeWindow.Config.Store_GetItemData(itemTid);
                              itemName = itemInfo?.name || 'اسم غير معروف';
                            }

                            let baseLink = `https://apps.facebook.com/family-farm/ar/facebook/get_reward/?vk=${key}_${snsid}___`;
                            if (baseLink.length < 119) {
                                baseLink += '_'.repeat(119 - baseLink.length);
                            }

                            const rowLink = `${baseLink}${type} - ${itemName}`;
                            const proLink = `${baseLink}${type}`;
                            shortenIndex++;
                            console.log(`Reward Link for line ${index + 1}: ${rowLink}`);
                            const shortenedLink = await shortenUrl(proLink);

                            links.push({ proLink: shortenedLink, itemID, rowLink });
                            linksCounter++;
                            loTitle1.innerHTML = "تم صناعة "+linksCounter+" من الروابط";
                        } else {
                            print("error", `Failed to fetch the feed key for line ${index + 1}. Please check your uss and hash.`);
                        }
                    } catch (error) {
                        print("error", `An error occurred while fetching the feed key for line ${index + 1}:`, error);
                    }
                }
                console.log(`Total links generated: ${links.length}`); // Debug log
                // Pass the generated links to the createDownloadLink function
                createDownloadLink(links);
            };
            reader.readAsText(file);
        }
        // Function to generate a random 6-character hex string
        function generateRandomsuffix() {
            const hexChars = '0123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let suffix = '';
            for (let i = 0; i < 6; i++) {
                suffix += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            return suffix;
        }
        // Function to get the formatted date
        function getFormattedDate() {
            const date = new Date();
            const yy = String(date.getFullYear()).slice(-2);
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = months[date.getMonth()];
            const dd = String(date.getDate()).padStart(2, '0');
            let hh = date.getHours();
            const period = hh >= 12 ? 'PM' : 'AM'; // Determine AM or PM
            hh = hh % 12 || 12; // Convert to 12-hour format (0 becomes 12)
            hh = String(hh).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');
            return `${dd}-${month}-${yy} ${hh}∶${min} ${period}`;
        }
        // Function to shorten URL using the ShortenUrl API
        async function shortenUrl(url) {
            const customAlias = `VSN_${generateRandomsuffix()}`;
            const isGdApiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}&shorturl=${customAlias}`;

            try {
                const response = await axios.get(isGdApiUrl);
                // Check if the response contains the shortened URL
                if (response.data && response.data.shorturl) {
                    console.log(`Shortened Url for line ${shortenIndex}:`, response.data.shorturl);
                    return response.data.shorturl; // Return the shortened URL
                } else {
                    throw new Error(`Failed to shorten URL: ${response.data.errormessage || 'Unknown error'}`);
                }
            } catch (error) {
                print("error", `Failed to shorten URL with is.gd: ${error.message}`);
                return url;
            }
        }

        function createDownloadLink(links) {
            // Sort links by itemID
            links.sort((a, b) => (a.itemID > b.itemID ? 1 : -1));
            let linkContent = '';
            let currentItemID = '';
            let linkNumber = 1;

            links.forEach((link) => {
                // Add a separator line when the itemID changes
                if (link.itemID !== currentItemID) {
                    if (linkContent !== '') {
                        //----------------------------------------------------------------------\n
                        linkContent += '';
                    }
                    // Extract the item name from the link (last part after " - ")
                    const itemName = link.rowLink.split(' - ').pop();
                    linkContent += `------------- ${link.itemID} (${itemName}) -------------\n`; // Add the separator line with item name
                    currentItemID = link.itemID;
                }
                // Format the link number and add the link
                const formattedNumber = linkNumber < 10 ? `00${linkNumber}-` : (linkNumber >= 10 && linkNumber < 100) ? `0${linkNumber}-` : `${linkNumber}-`;
                linkContent += `${formattedNumber} ${link.proLink}\n`;
                linkNumber++; // Increment the link counter
            });
            // Create a downloadable file
            const blob = new Blob([linkContent], { type: 'text/plain' });
            const linksUrl = URL.createObjectURL(blob);
            const date = getFormattedDate();
            // Create and append the download button
            downloadButton = document.createElement('a');
            downloadButton.innerHTML = 'ملف الروابط';
            downloadButton.style.cssText = "display: block; font-family: 'Droid Arabic Kufi', sans-serif; background-color: #b0d30d; color: #000; padding: 0px 14px; font-size: 25px; font-weight: bold; border-radius: 15px; white-space: nowrap;";
            downloadButton.href = linksUrl;
            downloadButton.download = `${type} ${date}.txt`;
            loButtonContainer.appendChild(downloadButton);
            alarm.play();
        }
        // end of create links part //
    async function cheat1() {
        for (let i = 1; i <= 45; i++) {
        let codeIndex = (i * 100) + "_1";
        let list = [];
            list[0] = String(codeIndex);

        var data = {
        action: "getReward",
        event: 202501,
        list: list,
        };
        await unsafeWindow.NetUtils.request("Activity/NewBattlePass", data);
        await new Promise(resolve => setTimeout(resolve, 0));
        }
        alarm.play();
        spinner.style.cssText = "display: none;";
        userImg.style.cssText = "display: block; width: 135px; height: 135px; border: 4.4px solid #000; border-radius: 25%; margin: -7px 5px 13px 5px; image-rendering: crisp-edges;";
        adminImg2.style.cssText = "display: block; width: 135px; height: 135px; border: 4.4px solid #000; border-radius: 25%; margin: -7px 5px 13px 5px; image-rendering: crisp-edges;";
        coTitle1.innerHTML = "تم إنهاء مهمة الاختلافات للعضو<br>"+userName+"<br>"+adminName+" : بواسطة الأدمن";
        }
        }
    window.addEventListener('load', Vision);
    })();

//================================================================================
