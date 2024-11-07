var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Get references to elements
var form = document.getElementById('resume-form');
var resumeOutputElement = document.getElementById('resume-output');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, education, experience, skills, photoFile, photoDataURL, resumeHTML, shareableURL, resumeData;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault(); // Prevent page reload
                name = document.getElementById('name').value;
                email = document.getElementById('email').value;
                phone = document.getElementById('phone').value;
                education = document.getElementById('education').value;
                experience = document.getElementById('experience').value;
                skills = document.getElementById('skills').value;
                photoFile = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
                photoDataURL = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onload = function () { return resolve(reader.result); };
                        reader.onerror = reject;
                        reader.readAsDataURL(photoFile);
                    })];
            case 1:
                photoDataURL = _b.sent();
                _b.label = 2;
            case 2:
                resumeHTML = "\n        <h2>*** Your Generated Resume ***</h2>\n        ".concat(photoDataURL ? "<img src=\"".concat(photoDataURL, "\" alt=\"Profile Photo\" style=\"width: 100px; height: auto;\">") : '', "\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Education:</b> <span contenteditable=\"true\">").concat(education, "</span></p>\n        <p><b>Experience:</b> <span contenteditable=\"true\">").concat(experience, "</span></p>\n        <p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
                // Display the generated resume
                resumeOutputElement.innerHTML = resumeHTML;
                resumeOutputElement.style.display = 'block';
                shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(name));
                shareableLinkContainer.style.display = 'block';
                shareableLinkElement.href = shareableURL;
                shareableLinkElement.textContent = shareableURL;
                resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
                localStorage.setItem(name, JSON.stringify(resumeData));
                return [2 /*return*/];
        }
    });
}); });
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
