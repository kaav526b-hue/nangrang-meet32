// 낭랑청춘만남2 커플매칭 프로그램
// GitHub Pages용 클라이언트 버전

// Firebase 설정
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE"
};

// Firebase 초기화
function initializeFirebase() {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");
  } else {
    console.warn("Firebase SDK not loaded");
  }
}

// 간단한 참가자 목록 예시
const participants = [
  { id: "F01", name: "김하늘", gender: "여", age: 29 },
  { id: "M01", name: "이도윤", gender: "남", age: 31 },
  { id: "F02", name: "박서연", gender: "여", age: 27 },
  { id: "M02", name: "정민호", gender: "남", age: 30 }
];

// DOM 로드 후 실행
window.onload = function () {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h2 style="text-align:center;">낭랑청춘만남2 커플매칭</h2>
    <p style="text-align:center;">참가자 수: ${participants.length}명</p>
    <ul>${participants.map(p => `<li>${p.id} - ${p.name} (${p.gender}, ${p.age}세)</li>`).join("")}</ul>
  `;
  initializeFirebase();
};
